import Restaurant from './main'

const restoran1 = new Restaurant(4) //there will be 4 tables in new restaraunt

restoran1.addPizza(
  'Capricoza',
  'Serbiana',
  'Italiana',
  'Belgijana',
  'Spanjolka'
)
restoran1.addPasta('Predo', 'Fredo', 'Medo', 'Ledo', 'Kredo')
restoran1.addBeverage(['Kola', 0.5], ['Jabuka', 0.3], ['Voda', 0.25])
restoran1.addSides('kecap', 'origano', 'majcinaDusica', 'sir', 'besamel')

restoran1.addMeal(
  1,
  ['pizza', 'Capricoza', 1],
  ['sides', 'kecap', 1],
  ['sides', 'origano', 1]
)
restoran1.addMeal(1, ['pasta', 'Fredo', 1], ['sides', 'sir', 1])
restoran1.addMeal(1, ['beverage', 'Kola', 2, 0.5])

//we lock table 1 and calculate total sum, and now we cannot add more meals
restoran1.closeBill(1)

//error message
restoran1.addMeal(1, ['pasta', 'Fredo', 1], ['sides', 'sir', 1])

//We unlocked table 1 after we paid
restoran1.payBill(1)

//now it works
restoran1.addMeal(1, ['pasta', 'Fredo', 1], ['sides', 'sir', 1])
