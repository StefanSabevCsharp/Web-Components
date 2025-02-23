const template = document.createElement("template");
template.innerHTML = `
<style>
h3{
color: blue
}
</style>
<h3 data-title>
<slot></slot>
</h3>
`

class ToDoItem extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode : "open"});
        shadow.append(template.content.cloneNode(true));

        this.title = shadow.querySelector("[data-title]");
        this.title.innerText = this.innerText;
    }
}

customElements.define("todo-item", ToDoItem);