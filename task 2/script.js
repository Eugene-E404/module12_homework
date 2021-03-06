let propObj = prompt('Введите наименование свойства\nПодсказка: town, degree celsius');

let protoPlace = {
	cantry: 'Russia',
	region: 'Primorskiy kray'
};

let place = Object.create(protoPlace);

place.town = 'Vladivostok';
place['degree celsius'] = -8;

let enumPropObj = function (str, obj) {
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (key == str) {
				return true;
			}
		}
	}
	return false;
}

console.log(enumPropObj(propObj, place));	