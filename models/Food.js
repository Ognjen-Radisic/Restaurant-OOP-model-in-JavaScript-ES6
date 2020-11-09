import Base from './Base'

export default class Food extends Base {
  constructor(name) {
    super(name)
    this.price = Base.randomPrice(300, 600)
  }
}
