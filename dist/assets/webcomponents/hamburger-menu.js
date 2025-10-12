class HamburgerMenu extends HTMLElement {
  shadowDom;

  static get observedAttributes() {
    return ["current-page"];
  }

  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: "open" });
    this.render();
    this.home = this.shadowRoot.querySelector("#home");
    this.clipboard = this.shadowRoot.querySelector("#clipboard");
    this.fullscreen = this.shadowRoot.querySelector("#fullscreen");
    this.pictureInPicture = this.shadowRoot.querySelector("#picture-in-picture");
    this.screenWakeLock = this.shadowRoot.querySelector("#screen-wake-lock");
    this.webShare = this.shadowRoot.querySelector("#web-share");
    this.webUSB = this.shadowRoot.querySelector("#web-usb");
    this.webUSBPrinter = this.shadowRoot.querySelector("#web-usb-printer");
    this.webHIDKeyboard = this.shadowRoot.querySelector("#web-hid-keyboard");
    this.webHIDPs4 = this.shadowRoot.querySelector("#web-hid-ps4");
    this.gamepadBluetooth = this.shadowRoot.querySelector("#gamepad-bluetooth");
    this.myHamburger = this.shadowRoot.querySelector("#hamburger");
    this.myNavMenu = this.shadowRoot.querySelector("#navMenu");
    this.closeNavMenu = this.shadowRoot.querySelector("#closeNavMenu");
    this.myMenuLinks = this.shadowRoot.querySelector("nav button, nav a");
    this.myHamburger.addEventListener(
      "click",
      () => {
        if (this.myNavMenu.classList.contains("hidden")) {
          this.doMenuOpen();
        } else {
          this.doMenuClose();
        }
      },
      false
    );
    this.closeNavMenu.addEventListener(
      "click",
      () => {
        this.doMenuClose();
      },
      false
    );
    this.shadowRoot.addEventListener(
      "keyup",
      (e) => {
        // 27 = ESC key
        if (e.keyCode === 27) {
          this.doMenuClose();
        }
      },
      false
    );
  }

  render() {
    this.shadowDom.innerHTML = `
      <style>@import "/assets/css/hamburger-menu.css";</style>
        <nav aria-labelledby="hamburger">
          <button id="hamburger" class="button hamburger" aria-label="Show Navigation Menu" aria-expanded="false" tabindex="0">☰</button>
          <div id="navMenu" class="navMenu hidden">
            <button id="closeNavMenu" class="button closeBtn" aria-label="Hide Navigation Menu">×</button>
            <ul>
              <li><a id="home" href="/">Home</a></li>
              <li><a id="clipboard" href="/clipboard">Clipboard API</a></li>
              <li><a id="fullscreen" href="/fullscreen">Fullscreen API</a></li>
              <li><a id="picture-in-picture" href="/picture-in-picture">Picture-in-Picture API</a></li>
              <!--<li><a id="screen-wake-lock" href="/screen-wake-lock">Screen Wake Lock API</a></li>-->
              <li><a id="web-share" href="/web-share">Web Share API</a></li>
              <li><a id="web-usb" href="/web-usb">Web USB API &nbsp; - &nbsp;part 1</a></li>
              <li><a id="web-usb-printer" href="/web-usb-printer">Web USB API &nbsp; - &nbsp;part 2</a></li>
              <!--<li><a id="web-hid-keyboard" href="/web-hid-keyboard">Web HID API &nbsp; - &nbsp;part 1</a></li>-->
              <!--<li><a id="web-hid-ps4" href="/web-hid-ps4">Web HID API &nbsp; - &nbsp;part 2</a></li>-->
              <li><a id="file-system" href="/file-system">File System API</a></li>
              <li><a id="gamepad-bluetooth" href="/gamepad-bluetooth">Gamepad + Bluetooth API</a></li>
            </ul>
          </div>
        </nav>
    `;
  }

  doMenuOpen() {
    this.myHamburger.setAttribute("aria-expanded", true);
    this.myNavMenu.classList.remove("hidden");
    this.myHamburger.classList.add("menuOpen");
  }

  doMenuClose() {
    this.myHamburger.setAttribute("aria-expanded", false);
    this.myNavMenu.classList.add("hidden");
    this.myHamburger.classList.remove("menuOpen");
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    switch (newValue) {
      case "home":
        this.home.setAttribute("aria-current", "page");
        break;
      case "clipboard":
        this.clipboard.setAttribute("aria-current", "page");
        break;
      case "fullscreen":
        this.fullscreen.setAttribute("aria-current", "page");
        break;
      case "picture-in-picture":
        this.pictureInPicture.setAttribute("aria-current", "page");
        break;
      case "screen-wake-lock":
        this.screenWakeLock.setAttribute("aria-current", "page");
        break;
      case "web-share":
        this.webShare.setAttribute("aria-current", "page");
        break;
      case "web-usb":
        this.webUSB.setAttribute("aria-current", "page");
        break;
      case "web-usb-printer":
        this.webUSBPrinter.setAttribute("aria-current", "page");
        break;
      case "web-hid-keyboard":
        this.webHIDKeyboard.setAttribute("aria-current", "page");
        break;
      case "web-hid-ps4":
        this.webHIDPs4.setAttribute("aria-current", "page");
        break;
      case "gamepad-bluetooth":
        this.gamepadBluetooth.setAttribute("aria-current", "page");
        break;
    }
  }
}

customElements.define("hamburger-menu", HamburgerMenu);
