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
    var elemRad2=document.getElementById('rad2');
    var elemRad3=document.getElementById('rad3');

    var elem=document.getElementById('DaysCount');
    if (elemRad.checked===true)
        elem.style.display='block';
    else elem.style.display='none';
    var elem1=document.getElementById('CityFilt');
	elem1.style.display='block';
    var elem2=document.getElementById('CanFilt');
    elem2.style.display='block';
    var elem3=document.getElementById('LastAgent');
    if (elemRad.checked===false)
        elem3.style.display='block';
    else elem3.style.display='none';
    var elem4=document.getElementById('Bills');
    elem4.style.display='block';
    

}
function tooglePanel(){
    var elem=document.getElementById('Panelll');
    elem.style.display='block';
    var elem1=document.getElementById('Send');
    elem1.className="btn btn-danger";
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
