const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
	var goods = loadAllItems();
	var totalPrice = 0.0;
	var products = [];
	var strText = "***<ûǮ׬�̵�>�����嵥***\n";
	for(var i = 0; i < inputs.length; i++)
	{
		var num = 0;
		for(var j = 0; j < inputs.length; j++){
			if(inputs[i] == inputs[j])
			{
				num ++;
			}
		}
		var product = {barcode:inputs[i],number:num};
		if(isExist(product, products))
		{
			products.push(product);
		}
	} 
	for(var index = 0; index < products.length ; index++)
	{
		for(var tab = 0; tab < goods.length ; tab++)
		{
			if(products[index].barcode == goods[tab].barcode){
				strText +=  "���ƣ�"+goods[tab].name+"��������"+products[index].number+goods[tab].unit+"�����ۣ�"+goods[tab].price+"(Ԫ)��С�ƣ�"+products[index].number*goods[tab].price+"(Ԫ)\n";
				totalPrice += products[index].number*goods[tab].price;
			}
		}
	}
	strText += "----------------------\n" +
            "�ܼƣ�"+totalPrice+"(Ԫ)\n" +
            "**********************";
    console.log(strText);
    return strText;
};
function isExist(product,products){
	if(products.length == 0)
	{
		return true;
	}else{
		for (var index = 0; index< products.length ; index++)
		{
			if(product.barcode == products[index].barcode)
			{
				return false;
			}
		}
	}
	return true;
}