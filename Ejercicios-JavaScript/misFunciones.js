/**
 * Conversión de unidades, de metros, yardas, pies y pulgadas
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, pies, yardas o pylgadas
 * @param {number} value - El valor de los inputs de metros, pies, yardas o pulgadas
 * @return
 */

function cambiarUnidades(id, value) {
    var metro, pulgada, pie, yarda;
    if(value.includes(",")){
        value= value.replace(",", ".");
    }
    if(isNaN(value)){
        alert("se ingresó un valor inválido "+id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id=="metro"){
        metro = value;
        pulgada = 39.3701*value;
        pie = 3.28084*value;
        yarda = 1.09361*value;
    }else if(id=="pulgada"){
        metro = 0.0254*value;
        pulgada = value;
        pie = 0.0833333*value;
        yarda = 0.02777778*value;
    }else if(id=="pie"){
        metro = 0.3048*value;
        pulgada = 12*value;
        pie = value;
        yarda = 0.333333*value;
    }else if(id=="yarda"){
        metro = 0.9144*value;
        pulgada = 36*value;
        pie = 3*value;
        yarda = value;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;

    /*    if(isNaN(value)){
        alert("se ingresó un valor inválido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value= "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value= 39.3701*value;
        document.lasUnidades.unid_pie.value = 3.28084*value;
        document.lasUnidades.unid_yarda.value = 1.09361*value;
    }else if(id=="pulgada"){
        document.lasUnidades.unid_metro.value= 0.0254*value;
        document.lasUnidades.unid_pie.value = 0.0833333*value;
        document.lasUnidades.unid_yarda.value = 0.0277778*value;
    }else if(id=="pie"){
        document.lasUnidades.unid_pulgada.value= 12*value;
        document.lasUnidades.unid_metro.value = 0.3048*value;
        document.lasUnidades.unid_yarda.value = 0.33333*value;
    }else if(id=="yarda"){
        document.lasUnidades.unid_pulgada.value= 36*value;
        document.lasUnidades.unid_pie.value = 3*value;
        document.lasUnidades.unid_metro.value = 0.9144*value;
    }*/
}

function convertirGR(id) {
    var grad, rad;
    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO) {
    if(valorMO=="val_mostrar") {
        document.getElementById("divMo").style.display = "block";
    }else if (valorMO=="val_ocultar"){
         document.getElementById("divMo").style.display= "none";
        }
}

function calcularSuma(){
    var num1, num2;

    num1=Number(document.getElementsByName("sum_num1")[0].value);
    num2=document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value= num1 + Number(num2);
}

function calcularResta(){
    var num1, num2;

    num1=Number(document.getElementsByName("res_num1")[0].value);
    num2=document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value= num1 - Number(num2);
}

function calcularMultiplicacion(){
    var num1, num2;

    num1=Number(document.getElementsByName("mul_num1")[0].value);
    num2=document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value= num1 * Number(num2);
}

function calcularDivision(){
    var num1, num2;

    num1=Number(document.getElementsByName("div_num1")[0].value);
    num2=document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value= num1 / Number(num2);
}

function dibujarCircuad() {
    var canvas= document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var Margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0+Margen,yMax-40-Margen,40,40);

    ctx.arc(xMax/2,yMax/2,20,0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#c433d4";
    ctx.fill();
}
//mala práctica usar variable global. se usa solo a efectos de que el ejercicio se resuelva rápido sin tener que madnar mas params a la función
var bandera;
function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function(){bandera=true};
    canvas.onmouseup = function(){bandera=false};

    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}

function limpiarCanvas() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var alturaMax = canvas.height;

    //Dibujar lineas horizontales
    ctx.beginPath();
    for (var i=0;i<alturaMax;) {
        ctx.moveTo(0, i);
        ctx.lineTo(1000, i);
        ctx.strokeStyle = "#617bc4";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();
    var anchoMax = canvas.width;

    //Dibujar lineas verticales
    ctx.beginPath();
    for (var i=0;i<anchoMax;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#617bc4";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    var alturaMax = canvas.height;

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#f8073a";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "#f8073a";
    ctx.stroke();
    ctx.closePath();
}

function dibujarImagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log();
    var img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;
    img.onload = function(){
        ctx.drawImage(img, posX, posY);
    }

}

x=0;
dx=2;
function animarAuto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new Image();
    img.src = "images/auto.png";

    img.onload = function(){
        ctx.drawImage(img, x, 100);
    }

    if(x>canvas.width){
        x=0;
    }
   x+=dx;
}
