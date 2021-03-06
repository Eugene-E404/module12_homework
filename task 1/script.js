let protoPlace = {
	cantry: 'Russia',
	region: 'Primorskiy kray'
};

let place = Object.create(protoPlace);

place.town = 'Vladivostok';
place['degree celsius'] = -8;

let enumPropObj = function (obj) {
	for (key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log(`${key}: ${obj[key]}`);
		}
	}
}

enumPropObj(place);	