class BrowserSupport extends HTMLElement {
  shadowDom;

  static get observedAttributes() {
    return ["chrome", "edge", "firefox", "safari", "chrome-mobile", "safari-mobile"];
  }

  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: "open" });
    this.render();
    this.chrome = this.shadowRoot.querySelector("#chrome");
    this.edge = this.shadowRoot.querySelector("#edge");
    this.firefox = this.shadowRoot.querySelector("#firefox");
    this.safari = this.shadowRoot.querySelector("#safari");
    this.chromeMobile = this.shadowRoot.querySelector("#chrome-mobile");
    this.chromeMobileMobile = this.shadowRoot.querySelector("#chrome-mobile-mobile");
    this.safariMobile = this.shadowRoot.querySelector("#safari-mobile");
    this.safariMobileMobile = this.shadowRoot.querySelector("#safari-mobile-mobile");
  }

  render() {
    this.shadowDom.innerHTML = `
      <style>@import "/assets/css/browser-support.css";</style>
      <div class="browser-support">
          <svg id="chrome" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" title="Not supported on Chrome">
              <path
              d="m0 256c0-46.6 12.5-90.4 34.3-128.9l109.8 191.2c21.9 39.2 63.8 65.7 111.9 65.7 14.3 0 27.1-2.3 40.8-6.6l-76.3 132.2c-124.6-17.3-220.5-124.3-220.5-253.6zm365.1 65.6c12.3-19.2 18.9-42.5 18.9-65.6 0-38.2-16.8-72.5-43.3-96h152.7c12 29.6 18.6 62.1 18.6 96 0 141.4-114.6 255.1-256 256zm112.7-193.6h-221.8c-62.9 0-113.7 44.1-125.5 102.7l-76.3-132.2c46.8-60 119.8-98.5 201.8-98.5 94.8 0 177.5 51.5 221.8 128zm-309.8 128c0-48.6 39.4-88 88-88s88 39.4 88 88-39.4 88-88 88-88-39.4-88-88z"
              />
          </svg>
          <svg id="edge" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" title="Not supported on Edge">
              <path
              d="m120.1 37.4c41-25.2 87.6-38.2 134.9-37.4 168 0 257 123.8 257 219.5-.1 32.7-13 63.9-35.9 87.2-22.9 23.2-54 36.5-86.7 37-75.2 0-91.5-23.1-91.5-32 0-3.8 1.2-6.2 4.8-9.4l1-1.2.4-1.6c10.5-11.5 15.9-26.2 15.9-41.6 0-78.7-82.2-142.7-184-142.7-37.5-.3-74.5 8.9-107.5 26.9 27-57.5 82.7-97.6 91.3-103.8.8-.6.3-.9.3-.9zm15.6 318.1c-1.4 30 4.6 60 16.4 87.2 13.6 26.4 32.7 51 56.5 69.3-59.5-11.5-111.5-43.9-149.4-89.3-38.1-46.4-59.2-104.3-59.2-164.8 0-51.2 62.4-94.4 136-94.4 36.6-.6 72.4 10.9 101.8 32.7l-3.6 1.2c-51.5 17.6-98.5 90.7-98.5 158.1zm334.1 44.5-.7.1c-11.8 18.8-25.9 35.1-42.2 49.5-30.8 28-68.1 45.5-108.8 49.9-18.6.3-36.8-3.2-53.8-11.4-25.6-10.3-47.1-30-61.6-53-14.4-23.9-21.1-51.7-19-79.6-.6-20.1 5.4-40.3 15-58.2 13.9 33.1 37.5 61.3 67.6 80.8s65.5 29.5 101.4 28.6c31 .3 62.1-6.7 90.2-20.5l1.9-.9c3.9-2.3 7.7-3.9 11.6 0 4.5 4.9 1.8 9.2-1.2 14-.2.2-.3.5-.4.7z"
              />
          </svg>
          <svg id="firefox" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" title="Supported on Firefox">
              <path
              d="m130.2 127.5c.2.1.1.1 0 0zm351.4 45.4c-10.6-25.5-32-53-48.9-61.7 13.7 26.9 21.7 53.8 24.7 74 0 .1 0 .2.1.4-27.6-68.8-74.4-96.5-112.6-156.9-15-23.6-10.9-25.2-13.1-24.6l-.1.1c-46.7 25.9-75.3 78.3-82.6 122.7-16.6.9-32.9 5-47.9 12.1-1.4.6-2.5 1.7-3.1 3-.7 1.4-.9 2.9-.6 4.3.2.9.6 1.7 1.1 2.3.5.7 1.2 1.3 1.9 1.7.8.4 1.6.7 2.5.8.8 0 1.7-.1 2.5-.3l.5-.2c15.5-7.3 32.4-11.2 49.5-11.4 62.9-.5 97.2 44.1 107.7 62.3-13-9.1-36.4-18.2-58.9-14.3 87.8 43.9 64.2 194.6-57.3 189.2-59.5-2.6-97.1-50.9-100.6-90.8 0 0 11.3-41.9 80.6-41.9 7.5 0 29-20.9 29.4-27-.1-2-42.6-18.9-59.1-35.2-8.9-8.7-13.1-12.9-16.8-16-2-1.7-4.1-3.3-6.3-4.8-5.6-19.5-5.8-40.1-.7-59.6-25 11.4-44.5 29.4-58.7 45.3h-.1c-9.7-12.2-9-52.6-8.4-61.1-.2-.5-7.3 3.7-8.2 4.4-8.6 6-16.5 12.9-23.8 20.4-16.3 16.6-44.2 50.1-55.5 101.2-4.6 20.4-6.8 44.4-6.8 52.3 0 134.7 109.2 243.9 243.9 243.9 120.7 0 223-87.2 240.5-202.6 11.5-76.7-14.8-131.1-14.8-132z"
              />
          </svg>
          <svg id="safari" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" title="Supported on Safari">
              <path
              d="m274.7 274.7-37.4-37.4-71.3 108.7zm-18.7-266.7c-137 0-248 111-248 248s111 248 248 248 248-111 248-248-111-248-248-248zm155.9 174.8 14.8-6.1a8 8 0 0 1 10.4 4.3 8 8 0 0 1 -4.3 10.5l-14.8 6.1a8 8 0 0 1 -10.5-4.3 8 8 0 0 1 4.4-10.5zm-97.5-88.8 6.1-14.8a8 8 0 0 1 10.5-4.3 8 8 0 0 1 4.3 10.5l-6.1 14.8a8 8 0 0 1 -10.5 4.3 8 8 0 0 1 -4.3-10.5zm-58.4-34a8 8 0 0 1 8 8v16a8 8 0 0 1 -8 8 8 8 0 0 1 -8-8v-16a8 8 0 0 1 8-8zm-75 14.9a8 8 0 0 1 10.5 4.3l6.1 14.8a8 8 0 1 1 -14.8 6.1l-6.1-14.8a8 8 0 0 1 4.3-10.4zm-63.6 42.5a8 8 0 0 1 11.3 0l11.3 11.3a8 8 0 0 1 0 11.3 8 8 0 0 1 -11.3 0l-11.3-11.3a8 8 0 0 1 0-11.3zm-57.4 138.6a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8 8 8 0 0 1 -8 8h-16a8 8 0 0 1 -8-8zm40.2 73.2-14.8 6.1a8 8 0 0 1 -10.5-4.3 8 8 0 0 1 4.3-10.5l14.8-6.1a8 8 0 0 1 10.5 4.3 8 8 0 0 1 -4.3 10.5zm4.3-136a8 8 0 0 1 -10.5 4.4l-14.8-6.1a8 8 0 0 1 -4.3-10.5 8 8 0 0 1 10.5-4.3l14.8 6.1a8 8 0 0 1 4.3 10.4zm93.1 224.8-6.1 14.8a8 8 0 0 1 -14.8-6.1l6.1-14.8a8 8 0 1 1 14.8 6.1zm66.4 26a8 8 0 0 1 -8 8 8 8 0 0 1 -8-8v-16a8 8 0 0 1 8-8 8 8 0 0 1 8 8zm67-6.9a8 8 0 0 1 -10.5-4.3l-6.1-14.8a8 8 0 0 1 4.3-10.5 8 8 0 0 1 10.5 4.3l6.1 14.8a8 8 0 0 1 -4.3 10.5zm63.6-42.5a8 8 0 0 1 -11.3 0l-11.3-11.3a8 8 0 0 1 0-11.3 8 8 0 0 1 11.3 0l11.3 11.3a8 8 0 0 1 0 11.3zm-108.3-108.3-176 115.4 115.5-175.9 175.9-115.5zm150.8 44.7a8 8 0 0 1 -10.5 4.3l-14.8-6.1a8 8 0 0 1 -4.3-10.5 8 8 0 0 1 10.5-4.3l14.8 6.1a8 8 0 0 1 4.3 10.5zm6.9-67h-16a8 8 0 0 1 -8-8 8 8 0 0 1 8-8h16a8 8 0 0 1 8 8 8 8 0 0 1 -8 8z"
              />
          </svg>
          <div class="mobile">
              <svg id="chrome-mobile" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" title="Supported on Chrome mobile">
              <path
                  d="m0 256c0-46.6 12.5-90.4 34.3-128.9l109.8 191.2c21.9 39.2 63.8 65.7 111.9 65.7 14.3 0 27.1-2.3 40.8-6.6l-76.3 132.2c-124.6-17.3-220.5-124.3-220.5-253.6zm365.1 65.6c12.3-19.2 18.9-42.5 18.9-65.6 0-38.2-16.8-72.5-43.3-96h152.7c12 29.6 18.6 62.1 18.6 96 0 141.4-114.6 255.1-256 256zm112.7-193.6h-221.8c-62.9 0-113.7 44.1-125.5 102.7l-76.3-132.2c46.8-60 119.8-98.5 201.8-98.5 94.8 0 177.5 51.5 221.8 128zm-309.8 128c0-48.6 39.4-88 88-88s88 39.4 88 88-39.4 88-88 88-88-39.4-88-88z"
              />
              </svg>
              <svg id="chrome-mobile-mobile" class="mobile" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                  d="m80 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-384c0-8.8-7.2-16-16-16zm-64 16c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64h-224c-35.3 0-64-28.7-64-64zm144 336h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
              />
              </svg>
          </div>
          <div class="mobile">
              <svg id="safari-mobile" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" title="Supported on Safari mobile">
              <path
                  d="m274.7 274.7-37.4-37.4-71.3 108.7zm-18.7-266.7c-137 0-248 111-248 248s111 248 248 248 248-111 248-248-111-248-248-248zm155.9 174.8 14.8-6.1a8 8 0 0 1 10.4 4.3 8 8 0 0 1 -4.3 10.5l-14.8 6.1a8 8 0 0 1 -10.5-4.3 8 8 0 0 1 4.4-10.5zm-97.5-88.8 6.1-14.8a8 8 0 0 1 10.5-4.3 8 8 0 0 1 4.3 10.5l-6.1 14.8a8 8 0 0 1 -10.5 4.3 8 8 0 0 1 -4.3-10.5zm-58.4-34a8 8 0 0 1 8 8v16a8 8 0 0 1 -8 8 8 8 0 0 1 -8-8v-16a8 8 0 0 1 8-8zm-75 14.9a8 8 0 0 1 10.5 4.3l6.1 14.8a8 8 0 1 1 -14.8 6.1l-6.1-14.8a8 8 0 0 1 4.3-10.4zm-63.6 42.5a8 8 0 0 1 11.3 0l11.3 11.3a8 8 0 0 1 0 11.3 8 8 0 0 1 -11.3 0l-11.3-11.3a8 8 0 0 1 0-11.3zm-57.4 138.6a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8 8 8 0 0 1 -8 8h-16a8 8 0 0 1 -8-8zm40.2 73.2-14.8 6.1a8 8 0 0 1 -10.5-4.3 8 8 0 0 1 4.3-10.5l14.8-6.1a8 8 0 0 1 10.5 4.3 8 8 0 0 1 -4.3 10.5zm4.3-136a8 8 0 0 1 -10.5 4.4l-14.8-6.1a8 8 0 0 1 -4.3-10.5 8 8 0 0 1 10.5-4.3l14.8 6.1a8 8 0 0 1 4.3 10.4zm93.1 224.8-6.1 14.8a8 8 0 0 1 -14.8-6.1l6.1-14.8a8 8 0 1 1 14.8 6.1zm66.4 26a8 8 0 0 1 -8 8 8 8 0 0 1 -8-8v-16a8 8 0 0 1 8-8 8 8 0 0 1 8 8zm67-6.9a8 8 0 0 1 -10.5-4.3l-6.1-14.8a8 8 0 0 1 4.3-10.5 8 8 0 0 1 10.5 4.3l6.1 14.8a8 8 0 0 1 -4.3 10.5zm63.6-42.5a8 8 0 0 1 -11.3 0l-11.3-11.3a8 8 0 0 1 0-11.3 8 8 0 0 1 11.3 0l11.3 11.3a8 8 0 0 1 0 11.3zm-108.3-108.3-176 115.4 115.5-175.9 175.9-115.5zm150.8 44.7a8 8 0 0 1 -10.5 4.3l-14.8-6.1a8 8 0 0 1 -4.3-10.5 8 8 0 0 1 10.5-4.3l14.8 6.1a8 8 0 0 1 4.3 10.5zm6.9-67h-16a8 8 0 0 1 -8-8 8 8 0 0 1 8-8h16a8 8 0 0 1 8 8 8 8 0 0 1 -8 8z"
              />
              </svg>
              <svg id="safari-mobile-mobile" class="mobile" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                  d="m80 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-384c0-8.8-7.2-16-16-16zm-64 16c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64h-224c-35.3 0-64-28.7-64-64zm144 336h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
              />
              </svg>
          </div>
      </div>
    `;
  }

  attributeChangedCallback(attrName) {
    switch (attrName) {
      case "chrome":
        this.chrome.classList.add("supported");
        this.chrome.setAttribute("title", "Supported on Chrome");
        break;
      case "edge":
        this.edge.classList.add("supported");
        this.edge.setAttribute("title", "Supported on Edge");
        break;
      case "firefox":
        this.firefox.classList.add("supported");
        this.firefox.setAttribute("title", "Supported on Firefox");
        break;
      case "safari":
        this.safari.classList.add("supported");
        this.safari.setAttribute("title", "Supported on Safari");
        break;
      case "chrome-mobile":
        this.chromeMobile.classList.add("supported");
        this.chromeMobileMobile.classList.add("supported");
        this.chromeMobile.setAttribute("title", "Supported on Chrome mobile");
        this.chromeMobileMobile.classList.add("supported");
        break;
      case "safari-mobile":
        this.safariMobile.classList.add("supported");
        this.safariMobileMobile.classList.add("supported");
        this.safariMobile.setAttribute("title", "Supported on Safari mobile");
        break;
    }
  }
}

customElements.define("browser-support", BrowserSupport);
