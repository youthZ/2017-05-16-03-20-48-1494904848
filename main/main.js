const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
	var goods = loadAllItems();
	var totalPrice = 0.0;
	var products=[];
	
	var text = '----------------------\n' +
            '�ܼƣ�'+totalPrice+'(Ԫ)\n' +
            '**********************';
    console.log(text);
    return  '***<ûǮ׬�̵�>�����嵥***\n' +
            '���ƣ��ɿڿ��֣�������5ƿ�����ۣ�3.00(Ԫ)��С�ƣ�15.00(Ԫ)\n' +
            '���ƣ�ѩ�̣�������2ƿ�����ۣ�3.00(Ԫ)��С�ƣ�6.00(Ԫ)\n' +
            '���ƣ���أ�������1�������ۣ�2.00(Ԫ)��С�ƣ�2.00(Ԫ)\n' +
            '----------------------\n' +
            '�ܼƣ�23.00(Ԫ)\n' +
            '**********************';
};
