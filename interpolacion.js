var xlist = [];
var ylist = [];
var xlista = [];
var ylista = [];
var divlist = [];
var div2list = [];
var div3list = [];
var div4list = [];
var div5list = [];
var count = 0;
var count1 = 5;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;
var n1 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;
var n6 = 0;

function getLog(x) {
  return Math.log(x).toFixed(3);
}

function guardar() {
    xlista = [1, 4, 5, 6, 2];
    for (var index = 0; index < xlista.length; index++) {

        xlist.push(xlista[index]);
        ylist.push(getLog(xlista[index]));

        var x = xlist[index];
        var y = ylist[index];

        if (xlist.length > 1) {
            var X = parseFloat(-xlist[n1]) + parseFloat(xlist[n1 + 1]);
            var Y = parseFloat(-ylist[n1]) + parseFloat(ylist[n1 + 1]);
            var div = Y / X;
            div.toFixed(3);
            divlist.push(div);

            n1 += 1;
        }
        if (xlist.length > 2) {
            var X1 = parseFloat(-xlist[n3]) + parseFloat(xlist[n3 + 2]);
            var divs = parseFloat(-divlist[n3]) + parseFloat(divlist[n3 + 1]);
            var div2 = divs / X1;
            div2.toFixed(3);
            div2list.push(div2);
            n3 += 1;
        }
        if (xlist.length > 3) {
            var X2 = parseFloat(-xlist[n4]) + parseFloat(xlist[n4 + 3]);
            var divs1 = parseFloat(-div2list[n4]) + parseFloat(div2list[n4 + 1]);
            var div3 = divs1 / X2;
            div3.toFixed(3);
            div3list.push(div3);
            n4 += 1;
        }
        if (xlist.length > 4) {
            var X2 = parseFloat(-xlist[n5]) + parseFloat(xlist[n5 + 4]);
            var divs1 = parseFloat(-div3list[n5]) + parseFloat(div3list[n5 + 1]);
            var div4 = divs1 / X2;
            div4.toFixed(3);
            div4list.push(div4);

            n5 += 1;
        }

        if (xlist.length > 5) {
            var X2 = parseFloat(-xlist[n6]) + parseFloat(xlist[n6 + 5]);
            var divs1 = parseFloat(-div4list[n6]) + parseFloat(div4list[n6 + 1]);
            var div5 = divs1 / X2;
            div5.toFixed(3);
            div5list.push(div5);

            n6 += 1;
        }

        var fila = "<tr><td>" + x + "</td><td>" + y;
        tablita = document.getElementById("tablita");
        var btn = document.createElement("TR");
        btn.innerHTML = fila;

        for (i = 0; i < count; i++) {
            var td = document.createElement("TD");
            var textoCelda = document.createTextNode(div.toFixed(3));

            btn.appendChild(td);
            td.appendChild(textoCelda);
        }
        count = 1;
        if (count2 >= 2) {
            for (i = 0; i < 1; i++) {
                var td1 = document.createElement("TD");
                var textoCelda2 = document.createTextNode(div2.toFixed(3));
                btn.appendChild(td1);
                td1.appendChild(textoCelda2);
            }
        }
        count2 += 1;
        if (count3 >= 3) {
            for (i = 0; i < 1; i++) {
                var td2 = document.createElement("TD");
                var textoCelda3 = document.createTextNode(div3.toFixed(3));
                btn.appendChild(td2);
                td2.appendChild(textoCelda3);
            }
        }
        count3 += 1;
        if (count4 >= 4) {
            for (i = 0; i < 1; i++) {
                var td3 = document.createElement("TD");
                var textoCelda4 = document.createTextNode(div4.toFixed(3));
                btn.appendChild(td3);
                td3.appendChild(textoCelda4);
            }
        }
        count4 += 1;

        if (count5 >= 5) {
            for (i = 0; i < 1; i++) {
                var td4 = document.createElement("TD");
                var textoCelda5 = document.createTextNode(div5.toFixed(3));
                btn.appendChild(td4);
                td4.appendChild(textoCelda5);
            }
        }
        count5 += 1;

        for (i = 0; i <= count1; i++) {
            var td = document.createElement("TD");
            btn.appendChild(td);
        }

        tablita.appendChild(btn);

        count1 -= 1;

    }
}
