let money = prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD')

let answer1 = prompt('Введите обязательную статью расходов в этом месяце'),
    answer2 = prompt('Во сколько обойдется?')

const appData = {
  money: money,
  timeData: time,
  expences: {
    answer1: answer2
  },
  optionalExpenses: {

  },
  income: [],
  savings: false
}

alert(money / 30)