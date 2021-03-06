let newObjWithoutProto = function () {
	return Object.create(null);
}

let obj999 = newObjWithoutProto();

console.log(obj999);