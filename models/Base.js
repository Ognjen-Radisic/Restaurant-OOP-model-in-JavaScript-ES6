export default class Base {
  constructor(name) {
    this.name = name
  }

  static randomPrice(min, max) {
    return Math.random() * (max - min) + min
  }
}
