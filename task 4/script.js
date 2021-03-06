function ElectricalAppliances(name, amperage) {
	this.name = name;
	this['switch status'] = 'Off';
	this.amperage = amperage;
}
ElectricalAppliances.prototype.switchStatus = function(status) {
	if (status) {
		this['switch status'] = 'On';
		console.log(`${this.name} включен`);
	} else {
		this['switch status'] = 'Off';
		console.log(`${this.name} выключен`);
	}
}
ElectricalAppliances.prototype.powerConsumption = function(mainsVoltage) {
	console.log(`Потребляемая прибором мощность составляет ${this.amperage * mainsVoltage} кВт`);
}

function Laptops(name, amperage, batOper, gflops) {
	this.name = name;
	this.amperage = amperage;
	this['battery operation'] = batOper;
	this.gflops = gflops;
}
Laptops.prototype = new ElectricalAppliances();
Laptops.prototype.switchStatus = function(status) {
	if (status) {
		this['switch status'] = 'work';
		console.log(`${this.name} заряжен`);
	} else {
		this['switch status'] = 'not work';
		console.log(`${this.name} разряжен`);
	}
}
Laptops.prototype.powerConsumption = function(mainsVoltage) {
	console.log(`Потребляемая нотубуком мощность во время зарядки составляет ${this.amperage * mainsVoltage} кВт`);
}

function AudioSystem(name, amperage, soundPower, audioChan) {
	this.name = name;
	this.amperage = amperage;
	this['sound power'] = soundPower;
	this['audio channels'] = audioChan;
}
AudioSystem.prototype = new ElectricalAppliances();

let appliances1 = new Laptops('Clevo P170EM', 0.6, 5000, 350);
let appliances2 = new AudioSystem('JBL partybox 300', 1.2, 300, 7.1);

console.log(appliances1);
appliances1.switchStatus(1);
appliances1.powerConsumption(220);

console.log(appliances2);
appliances2.switchStatus(0);
appliances2.powerConsumption(220);














