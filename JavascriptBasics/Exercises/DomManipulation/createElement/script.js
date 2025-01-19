const elmBox = document.querySelector(".element-box")
const element = document.createElement('span')
element.innerHTML = "Welcome"

elmBox.appendChild(element)

//ShortHand
// document.querySelector(".element-box")
//   .appendChild(Object.assign(document.createElement('span'), { innerHTML: "Welcome" }));
