export default class Counter {
  constructor() {
    this.count = 0;
    this.$value = document.querySelector("#value");
    this.initEventListeners();
  }

  increase() {
    if (this.count >= 10) {
      return;
    }
    this.count += 1;
    this.$value.innerText = this.count;
  }

  decrease() {
    if (this.count <= 0) {
      return;
    }
    this.count -= 1;
    this.$value.innerText = this.count;
  }

  reset() {
    this.count = 0;
    this.$value.innerText = this.count;
  }

  initEventListeners() {
    document
      .querySelector(".increase-btn")
      .addEventListener("click", this.increase.bind(this));

    document
      .querySelector(".decrease-btn")
      .addEventListener("click", this.decrease.bind(this));

    document
      .querySelector(".reset-btn")
      .addEventListener("click", this.reset.bind(this));
  }
}
