const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
	var goods = loadAllItems();
	var totalPrice = 0.0;
	var products=[] ;
	for(var index_i = 0; index < inputs.length; index_i++;){
		var num = 0;
		var littlePrice = 0.0;
		for(var index_j = 0; index_j < inputs.length; index_j++;){
			if(inputs[index_i] == inputs[index_j]){
				num ++;
			}
		}
		var product = {item:inputs[index_i],number:num};
		if(products.indexOf(product) == -1{
			products.push(product);
		}
	}
	console.log("'***<ûǮ׬�̵�>�����嵥***\n'");
	for (var index = 0; index < products.length ; index++)
	{
		for (var tab = 0; tab < goods.length ; tab++)
		{
			if(products[index].item == goods[tab].barcode){
				var str =  '���ƣ�'+goods[tab].name+'��������'+products[index].number+goods[tab].unit'�����ۣ�'+goods[tab].price+'(Ԫ)��С�ƣ�'+products[index].number*goods[tab].price+'(Ԫ)\n'
				console.log(str);
				totalPrice += products[index].number*goods[tab].price;
			}
		}
	}
    console.log("'----------------------\n' +
 '�ܼƣ�'+totalPrice+'\n' +
 '**********************'");
    return 'Hello World!';
};
