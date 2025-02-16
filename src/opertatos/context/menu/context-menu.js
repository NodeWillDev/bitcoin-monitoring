export class ContextMenu {
  /**
   * @type {Boolean}
   * @private
   */
  open = false;

  /**
   * @type {ShapeContextMenu}
   * @private
   */
  shape = null;

  /**
   * @param {string} name
   * @param {ShapeContextMenu} shape
   */
  constructor(shape) {
    this.shape = shape;
  }

  /** @return {Boolean} */
  isOpen() {
    return this.open;
  }

  /** @return {void} */
  change() {
    this.open = !this.open;
  }

  /**
   * @param {Boolean} value
   * @return {void}
   */
  setOpen(value) {
    this.open = value;
  }

  test(document, parent, discovery = null) {
    Object.entries();
  }

  /**
   * @param {Document} document
   * @param {HTMLElement} parent
   * @param {ShapeContextMenu} discovery
   */
  show(document, parent, discovery = null) {
    Object.entries(discovery ? discovery : this.shape).forEach((item) => {
      const [text, callback] = item;
      const container = Object.assign(document.createElement("div"), {
        className: "menu-options",
      });
      const span = Object.assign(document.createElement("span"), {
        innerHTML: text,
      });
      if (typeof callback == "object") {
        Object.entries(callback).forEach((item) => {
          const [text, callback] = item;
          const span = Object.assign(document.createElement("span"), {
            innerHTML: text,
          });
          console.log(text);
          if (typeof callback == "function")
            span.onclick = () => callback(document);
        });
        span.classList.add(".sub-menu");
        container.appendChild(span);
        parent.append(container);
        return;
      }
      if (typeof callback == "function")
        span.onclick = () => callback(document);
      else {
        this.show(document, container, item);
      }
      container.appendChild(span);
      parent.append(container);
    });
  }
  /**
   * @param {Document} document
   */
  hidden(document) {
    document.querySelector(".context-menu").style.display = "none";
    Array.from(document.querySelector(".context-menu").children).forEach(
      (element) => {
        element.remove();
      }
    );
  }
}
