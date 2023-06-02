/**
 * Helper function to add an element to a parent with an optional class.
 */
function addChild(parent, el, cl) {
  const child = parent.appendChild(document.createElement(el));
  if (typeof cl === "string") {
    child.setAttribute("class", cl);
  }
  return child;
}

// Inline svg icons with associated alt text
const ICONS = {
  summary: {
    svg: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 2.79086 4.79086 1 7 1H15.3431C16.404 1 17.4214 1.42143 18.1716 2.17157L19.8284 3.82843C20.5786 4.57857 21 5.59599 21 6.65685V19C21 21.2091 19.2091 23 17 23H7C4.79086 23 3 21.2091 3 19V5ZM19 8V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14V5C14 6.65685 15.3431 8 17 8H19ZM18.8891 6C18.7909 5.7176 18.6296 5.45808 18.4142 5.24264L16.7574 3.58579C16.5419 3.37035 16.2824 3.20914 16 3.11094V5C16 5.55228 16.4477 6 17 6H18.8891Z" />
        <path d="M9 12C8.44771 12 8 12.4477 8 13C8 13.5523 8.44771 14 9 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H9Z" />
        <path d="M9 16C8.44771 16 8 16.4477 8 17C8 17.5523 8.44771 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9Z" />
      </svg>
    `,
    alt: "Paper icon with lines and the top right corner folded.",
  },
  copy: {
    svg: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 2.79086 4.79086 1 7 1H15.3431C16.404 1 17.4214 1.42143 18.1716 2.17157L19.8284 3.82843C20.5786 4.57857 21 5.59599 21 6.65685V19C21 21.2091 19.2091 23 17 23H7C4.79086 23 3 21.2091 3 19V5ZM19 8V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14V5C14 6.65685 15.3431 8 17 8H19ZM18.8891 6C18.7909 5.7176 18.6296 5.45808 18.4142 5.24264L16.7574 3.58579C16.5419 3.37035 16.2824 3.20914 16 3.11094V5C16 5.55228 16.4477 6 17 6H18.8891Z" />
      </svg>
    `,
    alt: "Paper icon with the top right corner folded.",
  },
  close: {
    svg: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" />
      </svg>
    `,
    alt: "A cross icon for closing the transcription view.",
  },
  flag: {
    svg: `
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33334 0.833334C3.33334 0.373096 3.70644 0 4.16668 0C4.62691 0 5.00001 0.373096 5.00001 0.833333V19.1667C5.00001 19.6269 4.62691 20 4.16668 20C3.70644 20 3.33334 19.6269 3.33334 19.1667V0.833334Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.30893 11.6667H3.33334V1.66666H8.33334C9.42186 1.66666 10.3479 2.36233 10.6911 3.33332H14.8033C16.0423 3.33332 16.8481 4.63718 16.294 5.74535L15 8.33332L16.294 10.9213C16.8481 12.0295 16.0423 13.3333 14.8033 13.3333H11.6667C10.5782 13.3333 9.65213 12.6377 9.30893 11.6667ZM5.00001 3.33332H8.33334C8.79358 3.33332 9.16668 3.70642 9.16668 4.16666V9.99999H5.00001V3.33332ZM10.8333 10.8333C10.8333 11.2936 11.2064 11.6667 11.6667 11.6667H14.8033L13.1366 8.33332L14.8033 4.99999H10.8333V10.8333Z" />
      </svg>
    `,
    alt: "Icon of a flag on a flag pole blowing in the wind.",
  },
  caretDown: {
    svg: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289L12 12.5858L9.20711 9.79289C8.81658 9.40237 8.18342 9.40237 7.79289 9.79289C7.40237 10.1834 7.40237 10.8166 7.79289 11.2071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L16.2071 11.2071C16.5976 10.8166 16.5976 10.1834 16.2071 9.79289Z" />
      </svg>
    `,
  },
};

// Helper function to create an inline svg icon
function renderIcon(parent, icon) {
  const elem = addChild(parent, "div", "icon");
  elem.innerHTML = icon.svg;
  elem.setAttribute("role", "img");
  elem.setAttribute("alt", icon.alt);
  return elem;
}

/**
 * Web component for displaying transcriptions on a webpage.
 * Supports optional summary section, translation and dark mode.
 */
class TranscriptionWidget extends HTMLElement {
  static get observedAttributes() {
    return ["dark", "summary", "translation"];
  }

  constructor() {
    super();
    this.setupUI();
  }

  // Lifecycle callback for handling attribute updates
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case "dark":
        this.updateMode();
      case "summary":
        this.updateSummary();
      case "translation":
        this.updateTranslation();
    }
  }

  // Helper to update the className on the wrapper element
  updateMode() {
    this.wrapper.className = `wrapper ${
      this.hasAttribute("dark") ? "dark" : "light"
    }`;
  }

  updateSummary() {
    this.summary.style.display = this.hasAttribute("summary")
      ? "block"
      : "none";
  }

  updateTranslation() {
    this.translation.style.display = this.hasAttribute("translation")
      ? "flex"
      : "none";
  }

  toggle() {
    const hidden = this.style.visibility === "hidden";
    if (hidden) {
      this.style.visibility = "visible";
    } else {
      this.style.visibility = "hidden";
    }
  }

  handleCopyClick() {
    const text = this.options.summary.concat(
      this.options.timestamps.reduce(
        (acc, { text }) => acc.concat(" ").concat(text),
        ""
      )
    );
    navigator.clipboard.writeText(text);
    const copyEvent = this.dispatchEvent(
      new CustomEvent("copy", {
        bubbles: true,
        detail: { ...this.options },
      })
    );
  }

  handleTimestampClick(timestamp) {
    return () => {
      navigator.clipboard.writeText(timestamp.text);
      const copyEvent = this.dispatchEvent(
        new CustomEvent("copy", {
          bubbles: true,
          detail: { ...timestamp },
        })
      );
    };
  }

  setupUI() {
    this.attachShadow({ mode: "open" });

    this.wrapper = addChild(this.shadowRoot, "div");
    this.updateMode();

    // Toolbar section
    const toolbar = addChild(this.wrapper, "div", "toolbar");

    this.translation = addChild(toolbar, "div", "translation");
    renderIcon(this.translation, ICONS.flag);
    const language = addChild(this.translation, "span");
    language.innerText = "English";
    renderIcon(this.translation, ICONS.caretDown);

    const copyIcon = renderIcon(toolbar, ICONS.copy);
    copyIcon.addEventListener("click", this.handleCopyClick.bind(this));
    const closeIcon = renderIcon(toolbar, ICONS.close);
    closeIcon.addEventListener("click", this.toggle.bind(this));

    // Summary section
    this.summary = addChild(this.wrapper, "div", "summary");
    this.updateSummary();

    const summaryHeading = addChild(this.summary, "div", "summary-heading");
    renderIcon(summaryHeading, ICONS.summary);
    const summaryTitle = addChild(summaryHeading, "span");
    summaryTitle.textContent = "Summary";

    const summaryContent = addChild(this.summary, "p", "summary-content");
    summaryContent.innerText = `“${this.options.summary}”`;
    const summaryLink = addChild(summaryContent, "a");
    summaryLink.setAttribute("href", "#");
    summaryLink.textContent = " See more";
    addChild(this.summary, "hr");

    // Transcription section
    const transcription = addChild(this.wrapper, "div", "transcription");

    for (const timestamp of this.options.timestamps) {
      const row = addChild(transcription, "div", "transcription-row");
      row.addEventListener(
        "click",
        this.handleTimestampClick(timestamp).bind(this)
      );
      const time = addChild(row, "span", "transcription-time");
      time.innerText = timestamp.time;
      const text = addChild(row, "span", "transcription-text");
      text.innerText = `“${timestamp.text}”`;
    }

    // Import our custom font from Google fonts
    const font = document.createElement("link");
    font.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap";
    font.rel = "stylesheet";
    document.head.appendChild(font);

    // Custom styles
    const style = addChild(this.shadowRoot, "style");
    style.textContent = `
      .wrapper {
        position: absolute;
        right: 20px;
        top: 18px;
        bottom: 18px;
        box-sizing: border-box;
        padding: 1.5em;
        border-radius: 1em;
        width: 451px;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
      }

      .icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .toolbar {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      .toolbar > div {
        margin-left: 12px;
      }

      .toolbar .icon {
        cursor: pointer;
      }
      
      .translation {
        box-sizing: border-box;
        height: 3em;
        padding: 0 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid currentColor;
        border-radius: 80px;
        cursor: pointer;
      }

      .summary-heading {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
      }

      .summary-heading span {
        margin-left: 0.5em;
      }

      .summary-content a {
        text-decoration: none;
      }

      .summary hr {
        margin: 1.5em 2.5em;
        border-top: 1px solid;
        border-bottom: none;
      }

      .transcription {
        margin-top: 1.5em;
        padding-right: 1em;
      }

      .transcription-row {
        margin-bottom: 1.5em;
        display: flex;
      }

      .transcription-row:hover {
        cursor: pointer;
      }

      .transcription-time {
        flex-shrink: 0;
        font-weight: 400;
        width: 49px;
      }

      /*********************
       * Light mode styles *
       ********************/

      .light {
        border: #E6E8EC 1px solid;
        background: white;
        color: #353945;
      }

      .light .toolbar {
        color: #777E90;
      }

      .light .toolbar > div:hover {
        color: #353945;
      }

      .light .summary-content a {
        color: #777E90;
      }

      .light .summary-content a:hover {
        color: #353945 !important;
      }

      .light .summary hr {
        border-color: #E6E8EC;
      }

      .light .transcription-row:nth-child(n + 2) {
        color: #777E90;
      }
      
      .light .transcription-row:hover {
        color: #353945 !important;
      }

      /********************
       * Dark mode styles *
       *******************/

      .dark {
        border: #303034 1px solid;
        background: #141416;
        color: #E5E5E9;
      }

      .dark .toolbar {
        color: #80808A;
      }

      .dark .toolbar > div:hover {
        color: #E5E5E9 !important;
      }

      .dark .summary-content a {
        color: #80808A;
      }

      .dark .summary-content a:hover {
        color: #E5E5E9 !important;
      }

      .dark .summary hr {
        border-color: #353945;
      }

      .dark .transcription-row:nth-child(n + 2) {
        color: #91919C;
      }

      .dark .transcription-row:hover {
        color: #E5E5E9 !important;
      }
    `;
  }
}

// Register our web component
customElements.define("transcription-widget", TranscriptionWidget);
