import Base from './Base'

export default class Beverage {
  constructor(name, volume) {
    this.name = name
    this.volume = volume
    this.price = Base.randomPrice(150, 500)
  }
}
