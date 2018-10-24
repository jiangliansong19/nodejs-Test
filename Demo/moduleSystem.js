function person() {
	var name;
	this.setName = function(thisName) {
		name = thisName;
	}
	this.sayHello = function() {
		console.log("hello-world");
	}
}

module.exports = person;
