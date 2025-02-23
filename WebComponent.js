const template = document.createElement("template");
template.innerHTML = `
<style>
    label {
    color: red;
    display: block;
    }
    .description {
    font-size: .65rem;
    color:black;
    font-weight: lighter;
    }

</style>
<label>
<input type="checkbox" />
<slot></slot>
<span class="description">
<slot name="description"></slot>
</span>
</label>
`

class ToDoItem extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode : "open"});
        shadow.append(template.content.cloneNode(true));
    }
}

customElements.define("todo-item", ToDoItem);