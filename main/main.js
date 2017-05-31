const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
	var goods = loadAllItems();
	var totalPrice = 0.0;
	var products=[];
	
	var text = '----------------------\n' +
            '×Ü¼Æ£º'+totalPrice+'(Ôª)\n' +
            '**********************';
    console.log(text);
   // return 'Hello World!';
};
