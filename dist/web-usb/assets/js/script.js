document.querySelector("#connect").addEventListener("click", async () => {
  if ("usb" in navigator) {
    // hexidecimal values for vendorId and productId (can be found in system info)
    const device = await navigator.usb.requestDevice({ filters: [{ vendorId: 0x0416, productId: 0x5011 }] });
    console.log(device);
    document.querySelector("#info").innerHTML = `
          <p>Manufacturer Name: ${device.manufacturerName}</p>
          <p><em>Netum on the printer; Winbond Electronics Corporation based on vendorId</em></p>
          </em></p>
          <p>Manufacturer Id: ${device.vendorId}</p>
          <p>Product Name: ${device.productName}</p>
          <p>Product Id: ${device.productId}</p>
          <p>Product version: ${device.deviceVersionMajor}.${device.deviceVersionMinor}</p>
          <p>Serial Number: ${device.serialNumber}</p>
          <p>USB Version: ${device.usbVersionMajor}.${device.usbVersionMinor}</p>
        `;
    document.querySelector(".info-wrapper").style.display = "flex";
  } else {
    console.log("WebUSB is not supported");
  }
});
