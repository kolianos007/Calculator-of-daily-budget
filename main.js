let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD')

const appData = {
  budget: money,
  timeData: time,
  expences: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

let answer1 = prompt('Введите обязательную статью расходов в этом месяце'),
    answer2 = prompt('Во сколько обойдется?'),
    answer3 = prompt('Введите обязательную статью расходов в этом месяце'),
    answer4 = prompt('Во сколько обойдется?')

appData.expences[answer1] = answer2
appData.expences[answer3] = answer4


alert(appData.budget / 30)