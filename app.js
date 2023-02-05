const moneyText = document.querySelector("#game__main-section__money-text");

const callUpdateInSeconds = 0.1;

var money = 0;
var efectiveMoney = 0;

var clickModifire = 1;
var autoModifire = 0;

const autoClicker = {
	title: "Autoklicker",
	costs: 10,
	autoModifire: 0.1,
	clickModifire: 0,
	countHtml: document.querySelector("#autoclicker_count"),
	textHtml: document.querySelector("#autoclicker_title"),
	costHtml: document.querySelector("#autoclicker_costs"),
};
const workerClicker = {
	title: "worker",
	costs: 20,
	autoModifire: 0.25,
	clickModifire: 0,
	countHtml: document.querySelector("#worker_count"),
	textHtml: document.querySelector("#worker_title"),
	costHtml: document.querySelector("#worker_costs"),
};
const coworkerClicker = {
	title: "coworker",
	costs: 100,
	autoModifire: 2,
	clickModifire: 0,
	countHtml: document.querySelector("#coworker_count"),
	textHtml: document.querySelector("#coworker_title"),
	costHtml: document.querySelector("#coworker_costs"),
};
const CEOClicker = {
	title: "CEO",
	costs: 500,
	autoModifire: 20,
	clickModifire: 0,
	countHtml: document.querySelector("#CEO_count"),
	textHtml: document.querySelector("#CEO_title"),
	costHtml: document.querySelector("#CEO_costs"),
};
const buttons = [autoClicker, workerClicker, coworkerClicker, CEOClicker];

const UpdateEfectiveMoney = () => {
	efectiveMoney = Math.floor(money);
};

const UpdateElements = () => {
	UpdateEfectiveMoney();
	moneyText.innerHTML = efectiveMoney;
};

const GenerateMoney = () => {
	money += clickModifire;
	console.log(money);

	UpdateElements();
};

var everySecondTime = 0;
// gets called every callUpdateInSeconds intervall
const Update = () => {
	// gets called every Second, independet of the Updateintervall
	if (everySecondTime >= 1) {
		everySecondTime = 0;
		money += autoModifire;
	}
	everySecondTime += callUpdateInSeconds;

	UpdateElements();
};

var intervalId = window.setInterval(function () {
	Update();
}, callUpdateInSeconds * 1000);

const UpdateAutoAndClickModifire = (upgradeTypeDict) => {
	if (money >= upgradeTypeDict["costs"]) {
		money -= upgradeTypeDict["costs"];
		autoModifire += upgradeTypeDict["autoModifire"];
		clickModifire += upgradeTypeDict["clickModifire"];
		upgradeTypeDict["countHtml"].innerHTML =
			parseInt(upgradeTypeDict["countHtml"].innerHTML) + 1;
	}
};

const OnClick_Autoclicker = () => {
	UpdateAutoAndClickModifire(autoClicker);
};
const OnClick_worker = () => {
	UpdateAutoAndClickModifire(workerClicker);
};
const OnClick_coworker = () => {
	UpdateAutoAndClickModifire(coworkerClicker);
};
const OnClick_CEO = () => {
	UpdateAutoAndClickModifire(CEOClicker);
};

const InitilizeUpgradeButtons = () => {
	buttons.forEach((button) => {
		button["countHtml"].innerHTML = 0;
		button["textHtml"].innerHTML = button["title"];
		button["costHtml"].innerHTML = button["costs"];
	});
};

window.onload = () => {
	InitilizeUpgradeButtons();
};
