export class ContextMenu {
  /** @type {string,Object<ContextMenu>} */
  static menus = {};

  /**
   * @type {Boolean}
   * @private
   */
  open = false;

  /**
   * @type {string}
   * @private
   */
  name = null;

  /**
   * @type {ShapeContextMenu}
   * @private
   * @todo
   */
  shape = null;
  /**
   * @param {string} name
   */
  constructor(name, shape) {
    this.name = name;
    if (!this.isMenu(name)) ContextMenu.menus[name] = shape;
  }

  /**
   * @returns {ContextMenu}
   */
  getMenu() {
    return ContextMenu.menus[this.name];
  }

  /**
   * @private
   * @param {string} name
   * @return {Boolean}
   */
  isMenu(name) {
    return name in ContextMenu.menus;
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
}
