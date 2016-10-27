function toogleMy(strId,elemInp){//'ViborReg'
    var elem=document.getElementById(strId);
    if ((elem.style.display=='none') && (elemInp.checked===true))
        elem.style.display='block';
    else elem.style.display='none';
}
function test_shablon(i){
    var res=document.getElementById('shablon');
    if(i==2){
        res.innerHTML='Подключите автоплатеж для выгодной оплаты';
    }
    if (i==1){
        res.innerHTML='Мы советуем вам перейти на более выгодный канал оплаты. Оплата через Сбербанк. Ближайший адрес %adress%';
    }
    if (i==3){
        res.innerHTML='Вы просрочили платеж на %n% дней. Ростелеком';
    }
}