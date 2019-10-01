// function setAttributes(el, attrs) {
//     for(var key in attrs) {
//       el.setAttribute(key, attrs[key]);
//     }
//   }

const state = {
  data: [
    { value: 88, link: "img/svg/logo1.svg" },
    { value: 100, link: "img/svg/logo2.svg" },
    { value: 120, link: "img/svg/logo3.svg" }
  ],
  container: document.querySelector(".container")
};

class Logo {
  constructor(state) {
    this.state = state;
    this.control = document.createElement("div");
    this.control.classList.add("control");
    state.container.appendChild(this.control);
    this.output = document.createElement("div");
    this.output.classList.add("output");
    this.output.innerHTML = "";
    state.container.appendChild(this.output);
  }

  makeRange(value) {
    const input = document.createElement("input");
    input.setAttribute("type", "range");
    input.setAttribute("min", "60");
    input.setAttribute("max", "150");
    input.setAttribute("value", value);
    return input;
  }

  makeRate(value) {
    const rate = document.createElement("span");
    rate.innerHTML = value;
    return rate;
  }

  makeLogo(src, value) {
    const logo = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", src);
    logo.classList.add("logo");
    logo.classList.add("logo_1");
    logo.style.width = value + "px";
    logo.appendChild(img);
    return logo;
  }

  rangeToLogo(range, logo, rate) {
    range.addEventListener("input", e => {
      logo.style.width = e.target.value + "px";
      rate.innerHTML = e.target.value;
    });
  }

  render() {
    this.state.data.map(e => {
      const range = this.makeRange(e.value);
      const rate = this.makeRate(e.value);
      const logo = this.makeLogo(e.link, e.value);
      this.rangeToLogo(range, logo, rate);
      this.control.appendChild(range);
      this.control.appendChild(rate);
      this.output.appendChild(logo);
    });
  }
}

const foo = new Logo(state);
foo.render();
