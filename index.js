const inserted = document.getElementById('numId')
inserted.addEventListener('input', function(parm){
    let calculated = parm.target.value
    let dollar = document.getElementById('dollarId');
dollar.innerHTML = calculated / 400
    let euro = document.getElementById('euroId');
euro.innerHTML = calculated / 420
    let pounds = document.getElementById('poundsId');
pounds.innerHTML = calculated / 460
    let btc = document.getElementById('btcId');
btc.innerHTML = calculated * 0.0000001
});



