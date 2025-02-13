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
    console.log(this.shape);
  }
  /**
   *
   * @param {Document} document
   */
  hidden(document) {
    document.querySelector(".context-menu").style.display = "none";
  }
}
