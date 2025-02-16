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
   * @param {HTMLElement} parent
   * @param {ShapeContextMenu} discovery
   */

  show(document, parent, discovery = this.shape) {
    for (const [text, callback] of Object.entries(discovery)) {
      const container = this.createElement("div", {
        className: "menu-options",
      });
      const span = this.createElement("span", { textContent: text });

      if (typeof callback === "object" && callback !== null) {
        const arrow = this.createElement("i", {
          className: "fa-sharp fa-solid fa-caret-right",
        });
        const submenu = this.createElement("div", { className: "sub-menu" });

        // Recursivamente cria os itens do submenu
        this.show(document, submenu, callback);

        container.append(span, arrow, submenu);
      } else {
        if (typeof callback === "function") {
          span.onclick = () => callback(document);
        }
        container.appendChild(span);
      }

      parent.appendChild(container);
    }
  }

  // show(document, parent, discovery = this.shape) {
  //   for (const [text, callback] of Object.entries(discovery)) {
  //     const container = this.createElement("div", {
  //       className: "menu-options",
  //     });
  //     const span = this.createElement("span", { textContent: text });
  //     if (typeof callback === "object") {
  //       const arrow = this.createElement("i", {
  //         className: "fa-sharp fa-solid fa-caret-right",
  //       });
  //       console.log(callback);
  //       const submenu = this.createElement("div", { className: "sub-menu" });
  //       for (const [subText, subCallback] of Object.entries(callback)) {
  //         const subSpan = this.createElement("span", {
  //           textContent: subText,
  //           onclick:
  //             typeof subCallback === "function"
  //               ? () => subCallback(document)
  //               : null,
  //         });
  //         submenu.appendChild(subSpan);
  //       }
  //       container.appendChild(submenu);
  //       container.appendChild(arrow);
  //     } else if (typeof callback === "function")
  //       span.onclick = () => callback(document);
  //     else this.show(document, container, callback);
  //     container.appendChild(span);
  //     parent.appendChild(container);
  //   }
  // }

  /**
   * @private
   * @template {keyof HTMLElementTagNameMap} K
   * @param {K} tag
   * @param {Partial<HTMLElementTagNameMap[K]>} [props={}]
   * @returns {HTMLElementTagNameMap[K]}
   */
  createElement(tag, props = {}) {
    return Object.assign(document.createElement(tag), props);
  }

  /**
   * @param {Document} document
   */
  hidden(document) {
    const menu = document.querySelector(".context-menu");
    menu.style.display = "none";
    menu.replaceChildren();
  }
}
