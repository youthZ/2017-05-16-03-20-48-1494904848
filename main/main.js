const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
	var goods = loadAllItems();
	var totalPrice = 0.0;
	var products = [];
	var strText = "***<没钱赚商店>购物清单***\n";
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
		if(!products.indexOf(product))
		{
			products.push(product);
		}
	} 
	for(var index = 0; index < products.length ; index++)
	{
		for(var tab = 0; tab < goods.length ; tab++)
		{
			if(products[index].item == goods[tab].barcode){
				strText +=  "名称："+goods[tab].name+"，数量："+products[index].number+goods[tab].unit+"，单价："+goods[tab].price+"(元)，小计："+products[index].number*goods[tab].price+"(元)\n";
				totalPrice += products[index].number*goods[tab].price;
			}
		}
	}
	strText += "----------------------\n" +
            "总计："+totalPrice+"(元)\n" +
            "**********************";
    console.log(strText);
    return strText;
};
