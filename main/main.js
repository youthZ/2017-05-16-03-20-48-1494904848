const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
	var goods = loadAllItems();
	var totalPrice = 0.0;
	var products=[];
	
	var text = '----------------------\n' +
            '�ܼƣ�'+totalPrice+'(Ԫ)\n' +
            '**********************';
    console.log(text);
   // return 'Hello World!';
};
