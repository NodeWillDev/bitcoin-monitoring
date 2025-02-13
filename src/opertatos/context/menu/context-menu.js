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

  /**
   * @param {Document} document
   */
  show(document) {
    const element = document.querySelector(".context-menu");
    Object.entries(this.shape).forEach((item) => {
      const [text, callback] = item;
      const container = Object.assign(document.createElement("div"), {
        className: "menu-options",
      });
      const span = Object.assign(document.createElement("span"), {
        innerHTML: text,
        onclick: () => callback(document),
      });

      container.appendChild(span);
      element.append(container);
    });
  }
  /**
   *
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
