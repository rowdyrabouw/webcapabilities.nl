export class DualShock4 {
  constructor() {
    this.state = {};
    this.state.interface = "none";
    this.state.axes = {};
    this.state.buttons = {};
    this.state.touchpad = {};

    this.rumble = {};
    this.rumble.light = 0;
    this.rumble.heavy = 0;

    this.lightbar = {};

    if (!navigator.hid || !navigator.hid.requestDevice) {
      throw new Error("WebHID not supported by browser or not available.");
    }
  }

  async init() {
    if (this.device && this.device.opened) return;

    const devices = await navigator.hid.requestDevice({
      filters: [
        // Official Sony Controllers
        { vendorId: 0x054c, productId: 0x0ba0 },
        { vendorId: 0x054c, productId: 0x05c4 },
        { vendorId: 0x054c, productId: 0x09cc },
        { vendorId: 0x054c, productId: 0x05c5 },
      ],
    });

    this.device = devices[0];
    await this.device.open();
    this.device.oninputreport = (e) => this.processControllerReport(e);
  }

  processControllerReport(report) {
    const { data } = report;
    this.lastReport = data.buffer;

    // Interface is unknown
    if (this.state.interface === "none") {
      if (data.byteLength === 63) {
        this.state.interface = "usb";
      } else {
        this.state.interface = "bt";
        this.device.receiveFeatureReport(0x02);
        return;
      }
    }

    this.state.timestamp = report.timeStamp;

    // USB Reports
    if (this.state.interface === "usb" && report.reportId === 0x01) {
      this.updateState(data);
    }
    // Bluetooth Reports
    if (this.state.interface === "bt" && report.reportId === 0x11) {
      this.updateState(new DataView(data.buffer, 2));
      this.device.receiveFeatureReport(0x02);
    }
  }

  /**
   * Updates the controller state using normalized data from the last report.
   *
   * This function is called internally by the library each time a report is received.
   *
   * @param data - Normalized data from the HID report.
   */
  updateState(data) {
    // Update thumbsticks
    this.state.axes.leftStickX = data.getUint8(0);
    this.state.axes.leftStickY = data.getUint8(1);
    this.state.axes.rightStickX = data.getUint8(2);
    this.state.axes.rightStickY = data.getUint8(3);

    // Update main buttons
    const buttons1 = data.getUint8(4);
    this.state.buttons.triangle = !!(buttons1 & 0x80);
    this.state.buttons.circle = !!(buttons1 & 0x40);
    this.state.buttons.cross = !!(buttons1 & 0x20);
    this.state.buttons.square = !!(buttons1 & 0x10);

    // Update D-Pad
    const dPad = buttons1 & 0x0f;
    this.state.buttons.dPadUp = dPad === 7 || dPad === 0 || dPad === 1;
    this.state.buttons.dPadRight = dPad === 1 || dPad === 2 || dPad === 3;
    this.state.buttons.dPadDown = dPad === 3 || dPad === 4 || dPad === 5;
    this.state.buttons.dPadLeft = dPad === 5 || dPad === 6 || dPad === 7;

    // Update additional buttons
    const buttons2 = data.getUint8(5);
    this.state.buttons.l1 = !!(buttons2 & 0x01);
    this.state.buttons.r1 = !!(buttons2 & 0x02);
    this.state.buttons.l2 = !!(buttons2 & 0x04);
    this.state.buttons.r2 = !!(buttons2 & 0x08);
    this.state.buttons.share = !!(buttons2 & 0x10);
    this.state.buttons.options = !!(buttons2 & 0x20);
    this.state.buttons.l3 = !!(buttons2 & 0x40);
    this.state.buttons.r3 = !!(buttons2 & 0x80);

    const buttons3 = data.getUint8(6);
    this.state.buttons.playStation = !!(buttons3 & 0x01);
    this.state.buttons.touchPadClick = !!(buttons3 & 0x02);

    // Update Triggers
    this.state.axes.l2 = data.getUint8(7);
    this.state.axes.r2 = data.getUint8(8);

    // Update battery level
    this.state.charging = !!(data.getUint8(29) & 0x10);
    if (this.state.charging) {
      this.state.battery = Math.min(Math.floor(((data.getUint8(29) & 0x0f) * 100) / 11));
    } else {
      this.state.battery = Math.min(100, Math.floor(((data.getUint8(29) & 0x0f) * 100) / 8));
    }

    // Update motion input
    this.state.axes.gyroX = data.getUint16(13);
    this.state.axes.gyroY = data.getUint16(15);
    this.state.axes.gyroZ = data.getUint16(17);
    this.state.axes.accelX = data.getInt16(19);
    this.state.axes.accelY = data.getInt16(21);
    this.state.axes.accelZ = data.getInt16(23);

    // Update touchpad
    this.state.touchpad.touches = [];
    if (!(data.getUint8(34) & 0x80)) {
      this.state.touchpad.touches.push({
        touchId: data.getUint8(34) & 0x7f,
        x: ((data.getUint8(36) & 0x0f) << 8) | data.getUint8(35),
        y: (data.getUint8(37) << 4) | ((data.getUint8(36) & 0xf0) >> 4),
      });
    }
    if (!(data.getUint8(38) & 0x80)) {
      this.state.touchpad.touches.push({
        touchId: data.getUint8(38) & 0x7f,
        x: ((data.getUint8(40) & 0x0f) << 8) | data.getUint8(39),
        y: (data.getUint8(41) << 4) | ((data.getUint8(40) & 0xf0) >> 4),
      });
    }
  }

  /**
   * Sends the local rumble and lightbar state to the controller.
   *
   * This function is called automatically in most cases.
   *
   * **Currently broken over Bluetooth, doesn't do anything**
   */
  async sendLocalState() {
    if (!this.device) throw new Error("Controller not initialized. You must call .init() first!");

    if (this.state.interface === "usb") {
      const report = new Uint8Array(16);

      // Report ID
      report[0] = 0x05;

      // Enable Rumble (0x01), Lightbar (0x02)
      report[1] = 0xf0 | 0x01 | 0x02;

      // Light rumble motor
      report[4] = this.rumble.light;
      // Heavy rumble motor
      report[5] = this.rumble.heavy;

      // Lightbar Red
      report[6] = this.lightbar.r;
      // Lightbar Green
      report[7] = this.lightbar.g;
      // Lightbar Blue
      report[8] = this.lightbar.b;

      this.lastSentReport = report.buffer;

      return this.device.sendReport(report[0], report.slice(1));
    } else if (this.state.interface === "bt") {
      const report = new Uint16Array(79);
      const crcBytes = new Uint8Array(4);
      const crcDv = new DataView(crcBytes.buffer);

      // Header
      report[0] = 0xa2;
      // Report ID
      report[1] = 0x11;

      // Poll Rate
      report[2] = 0x80;
      // Enable rumble and lights
      report[4] = 0xff;

      // Light rumble motor
      report[7] = this.rumble.light;
      // Heavy rumble motor
      report[8] = this.rumble.heavy;

      // Lightbar Red
      report[9] = this.lightbar.r;
      // Lightbar Green
      report[10] = this.lightbar.g;
      // Lightbar Blue
      report[11] = this.lightbar.b;

      crcDv.setUint32(0, this.crc32(new String(report.slice(0, 75))));
      report[75] = crcBytes[3];
      report[76] = crcBytes[2];
      report[77] = crcBytes[1];
      report[78] = crcBytes[0];

      this.lastSentReport = report.buffer;

      return this.device.sendReport(report[1], report.slice(2));
    }
  }

  // Adapted from https://stackoverflow.com/questions/18638900/javascript-crc32

  crc32(str) {
    var crcTable = this.crcTable || (this.crcTable = this.makeCRCTable());
    var crc = 0 ^ -1;

    for (var i = 0; i < str.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xff];
    }

    return (crc ^ -1) >>> 0;
  }

  makeCRCTable() {
    var c;
    var crcTable = [];
    for (var n = 0; n < 256; n++) {
      c = n;
      for (var k = 0; k < 8; k++) {
        c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
      }
      crcTable[n] = c;
    }
    return crcTable;
  }
}
