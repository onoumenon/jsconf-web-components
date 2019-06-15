(function() {
  const template = document.createElement("template");
  template.innerHTML = `
    <style>
      :host {
        display: flex;
        flex-direction: column;
      }
    </style>
    <slot></slot>
  `;

  class TodoList extends HTMLElement {
    constructor() {
      super();
      // append template to the shadow root
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this._onSlotChange = this._onSlotChange.bind(this);
      this._slot = this.shadowRoot.querySelector("slot");
    }

    connectedCallback() {
      // listen to slotchange
      this._slot.addEventListener("slotchange", this._onSlotChange);
    }

    disconnectedCallback() {
      // clean up slotchange listener
      this._slot.removeEventListener("slotchange", this._onSlotChange);
    }

    _onSlotChange(_) {
      // Remove all nodes that are unknown to todo-list
      // Dispatch custom event 'todolist-change' with todoItemElementCount value
      this.childNodes.forEach(node => {
        if (!(node.nodeType === 1 && node.tagName === "TODO-ITEM")) {
          node.remove();
        }
      });

      const todoItemElementCount = this._slot.assignedNodes().length;

      this.dispatchEvent(
        new CustomEvent("todolist-change", {
          detail: {
            todoItemElementCount
          }
        })
      );
    }
  }
  window.customElements.define("todo-list", TodoList);
  // Define the new custom element as todo-list
})();
