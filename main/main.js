const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
	var goods = loadAllItems();
	var totalPrice = 0.0;
	var products = [];
	for(var i = 0; i < inputs.length; i++)
	{
		var num = 0;
		for(var j = 0; j < inputs.length; j++){
			if(inputs[i] == inputs[j])
			{
				num ++;
			}
		}
		var product = {item:inputs[i],number:num};
		if(products.indexOf(product) == -1)
		{
			products.push(product);
		}
	} 
	console.log("'***<ûǮ׬�̵�>�����嵥***\n'");
	for(var index = 0; index < products.length ; index++)
	{
		for(var tab = 0; tab < goods.length ; tab++)
		{
			if(products[index].item == goods[tab].barcode){
				var str =  '���ƣ�'+goods[tab].name+'��������'+products[index].number+goods[tab].unit'�����ۣ�'+goods[tab].price+'(Ԫ)��С�ƣ�'+products[index].number*goods[tab].price+'(Ԫ)\n'
				console.log(str);
				totalPrice += products[index].number*goods[tab].price;
			}
		}
	}
	var text = '----------------------\n' +
            '�ܼƣ�'+totalPrice+'(Ԫ)\n' +
            '**********************';
    console.log(text);
    return 'Hello World!';
};
