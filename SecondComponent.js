const template = document.createElement("template");
template.innerHTML = `
    <style>
        button {
            padding: 10px;
            border: 2px solid red;
            background-color: orange;
            color: black;
            border-radius: 50%;
            cursor: pointer;
            font-size: 16px;
            outline: none;
            transition: 0.3s;
        }

        button:hover {
            background-color: darkorange;
        }
    </style>
    <button>
        <slot></slot>
    </button>
`;

class MyButton extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" }); 
        shadow.appendChild(template.content.cloneNode(true));
    }
}

customElements.define("my-button", MyButton);
