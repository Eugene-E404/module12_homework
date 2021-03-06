class ElectricalAppliances {
	constructor(name, amperage) {
		this.name = name;
		this['switch status'] = 'Off';
		this.amperage = amperage;
	}
	switchStatus(status) {
		if (status) {
			this['switch status'] = 'On';
			console.log(`${this.name} включен`);
		} else {
			this['switch status'] = 'Off';
			console.log(`${this.name} выключен`);		
		}
	}
	powerConsumption(mainsVoltage) {
		console.log(`Потребляемая прибором мощность составляет ${this.amperage * mainsVoltage} кВт`);
	}
}

class Laptops extends ElectricalAppliances {
	constructor(name, amperage, batOper, gflops) {
		super(name, amperage);
		this['battery operation'] = batOper;
		this.gflops = gflops;	
	}
	switchStatus(status) {
		if (status) {
			this['switch status'] = 'work';
			console.log(`${this.name} заряжен`);
		} else {
			this['switch status'] = 'not work';
			console.log(`${this.name} разряжен`);
		}
	}
	powerConsumption(mainsVoltage) {
		console.log(`Потребляемая нотубуком мощность во время зарядки составляет ${this.amperage * mainsVoltage} кВт`);
	}
}

class AudioSystem extends ElectricalAppliances {
	constructor(name, amperage, soundPower, audioChan) {
		super(name, amperage);
		this['sound power'] = soundPower;
		this['audio channels'] = audioChan;
	}
}

const appliances1 = new Laptops('Clevo P170EM', 0.6, 5000, 350);
const appliances2 = new AudioSystem('JBL partybox 300', 1.2, 300, 7.1);

console.log(appliances1);
appliances1.switchStatus(1);
appliances1.powerConsumption(220);

console.log(appliances2);
appliances2.switchStatus(0);
appliances2.powerConsumption(220);













