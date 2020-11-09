import Food from './models/Food'
import Beverage from './models/Beverage'
import Sides from './models/Sides'

export default class Restaurant {
  constructor(numOfTables) {
    this.tables = []
    for (let i = 0; i < numOfTables; i++) {
      this.tables.push({ tableNumber: i, locked: false, meals: [], sum: 0 })
    }
    this.pizza = []
    this.pasta = []
    this.sides = []
    this.beverage = []
  }
  addPizza(...names) {
    names.forEach((el) => {
      this.pizza.push(new Food(el))
    })
  }
  addPasta(...names) {
    names.forEach((el) => {
      this.pasta.push(new Food(el))
    })
  }
  addSides(...names) {
    names.forEach((el) => {
      this.sides.push(new Sides(el))
    })
  }
  addBeverage(...names) {
    names.forEach((el) => {
      this.beverage.push(new Beverage(el[0], el[1]))
    })
  }

  //[(in which category belongs), (name), (quantity), for beverages(volume)]
  //restaurant.addMeal([pizza, peperoni, 2], [sides, ketchap, 3], [beverage, coke, 1, 0.5])
  addMeal(tableNum, ...orders) {
    if (this.tables[tableNum].locked === false) {
      orders.forEach((meal) => {
        if (this.isMealValid(meal)) {
          this.tables[tableNum].meals.push(meal)
          console.log(`Date ${this.todaysDate()} table number ${tableNum}`)
        }
      })
    } else {
      console.log(
        `Bill for table ${tableNum} is closed, it\'s not possible to add more meals until bill is paid.`
      )
    }
  }

  todaysDate() {
    let today = new Date()
    let todaysDate = `${today.getDate()}/${
      today.getMonth() + 1
    }/${today.getFullYear()}`
    let timeRightNow = `${today.getHours()}:${today.getMinutes()}`
    return `${todaysDate} ${timeRightNow}`
  }

  //check validity of meal array //[pizza, peperoni, 2]
  isMealValid(meal) {
    if (
      meal[0] == 'pizza' ||
      meal[0] == 'pasta' ||
      meal[0] == 'beverage' ||
      meal[0] == 'sides'
    ) {
      if (this.loopThroughCategory(meal[0], meal[1])) {
        if (!isNaN(meal[0])) {
          return true
        } else {
          console.log(`Type in number of ${meal[1]}.`)
        }
      } else {
        console.log(`We dont have that type of ${meal[0]}.`)
      }
    } else {
      console.log('We dont have that category of food.')
    }
    return false
  }

  loopThroughCategory(category, foodType) {
    this[category].forEach((e) => {
      if (e.name === foodType) {
        return true
      }
    })
    return false
  }
  loopThroughCategoryIndex(category, foodType) {
    this[category].forEach((e, index) => {
      if (e.name === foodType) {
        return index
      }
    })
  }

  closeBill(tableNum) {
    let sum = 0
    this.tables[tableNum].meals.forEach((meal) => {
      let index = loopThroughCategoryIndex(meal[0], meal[1])
      let mealPrice = this[meal[0]][index].price * meal[2]
      sum += mealPrice
    })
    console.log(
      `Date ${this.todaysDate()} table number ${tableNum}, to pay ${sum}`
    )
    this.tables[tableNum].sum = sum
    this.tables[tableNum].locked = true
  }

  payBill(tableNum) {
    if (this.tables[tableNum].locked === true) {
      console.log(`Your bill is paid, have a nice day!`)
      this.tables[tableNum].sum = 0
      this.tables[tableNum].locked = false
      this.tables[tableNum].meals = []
    }
  }
}
