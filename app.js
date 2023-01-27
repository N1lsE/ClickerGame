const moneyText = document.querySelector("#game__main-section__money-text")

var money = 0

var clickModifire = 1

const UpdateElements = () => {
	moneyText.innerHTML = money
}

const GenerateMoney = () => {
	money += clickModifire
	console.log(money)

	UpdateElements()
}
