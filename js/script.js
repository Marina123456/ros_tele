function toogleMy(strId,elemInp){//'ViborReg'
    var elem=document.getElementById(strId);
    if ((elem.style.display=='none') && (elemInp.checked===true))
        elem.style.display='block';
    else elem.style.display='none';
}
function toogleMy1(strId,elemInp){//'ViborCanal'
    var elem=document.getElementById(strId);
    if ((elem.style.display=='none') && (elemInp.checked===true))
        elem.style.display='block';
    else elem.style.display='none';
}
function toogleRadio(){
    var elemRad=document.getElementById('rad1');

    var elem=document.getElementById('DaysCount');
    if (elemRad.checked===true)
        elem.style.display='block';
    else elem.style.display='none';
    var elem1=document.getElementById('CityFilt');
	elem1.style.display='block';
    var elem2=document.getElementById('CanFilt');
    elem2.style.display='block';
    

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
