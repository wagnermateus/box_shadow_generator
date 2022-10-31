class BoxShadowGenerator {
  constructor(
    horizontalInput,
    horizontalInputValue,
    verticalInput,
    verticalInputValue,
    blurInput,
    blurInputValue,
    spreadInput,
    spreadInputValue
  ) {
    this.horizontalInput = horizontalInput;
    this.horizontalInputValue = horizontalInputValue;
    this.verticalInput = verticalInput;
    this.verticalInputValue = verticalInputValue;
    this.blurInput = blurInput;
    this.blurInputValue = blurInputValue;
    this.spreadInput = spreadInput;
    this.spreadInputValue = spreadInputValue;
  }

  initialize() {
    this.horizontalInputValue.value = this.horizontalInput.value;
    this.verticalInputValue.value = this.verticalInput.value;
    this.blurInputValue.value = this.blurInput.value;
    this.spreadInputValue.value = this.spreadInput.value;
  }

  updateBoxShadowProperties(type, value) {
    switch (type) {
      case "horizontal":
        this.horizontalInputValue.value = value;
        break;
      case "vertical":
        this.verticalInputValue.value = value;
        break;
      case "blur":
        this.blurInputValue.value = value;
        break;
      case "spread":
        this.spreadInputValue.value = value;
        break;  
    }
  }
}

const horizontalInput = document.querySelector("#horizontal-input");
const horizontalInputValue = document.querySelector("#horizontal-input-value");
const verticalInput = document.querySelector("#vertical-input");
const verticalInputValue = document.querySelector("#vertical-input-value");
const blurInput = document.querySelector("#blur-input");
const blurInputValue = document.querySelector("#blur-input-value");
const spreadInput = document.querySelector("#spread-input");
const spreadInputValue = document.querySelector("#spread-input-value");

const rule = document.querySelector("#rule");
const webkitRule = document.querySelector("#webkit-rule");
const mozRule = document.querySelector("#moz-rule");

const previewer = document.querySelector("#previewer");


const boxShadow = new BoxShadowGenerator(
  horizontalInput,
  horizontalInputValue,
  verticalInput,
  verticalInputValue,
  blurInput,
  blurInputValue,
  spreadInput,
  spreadInputValue
);

boxShadow.initialize();

horizontalInput.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateBoxShadowProperties("horizontal", value);
});

verticalInput.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateBoxShadowProperties("vertical", value);
});

blurInput.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateBoxShadowProperties("blur", value);
});

spreadInput.addEventListener("input", (e) => {
  const value = e.target.value;
  boxShadow.updateBoxShadowProperties("spread", value);
});