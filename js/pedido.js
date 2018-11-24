/*Pedidos.html*/
var resumenpe = new Array();
var pedidoc = new Array(5);
function abreVentana(){
	var menu;
	menu = window.open("./menu.html","Menus","width=300,height=280,top=100,left=300");
	menu.focus();
}
function introdatospedido() {
	pedidoc[0] = document.getElementById("fname").value;
	pedidoc[1] = document.getElementById("ftel").value;
	
	var selmenu = document.getElementById("selemenu");
	pedidoc[2] = selmenu.options[selmenu.selectedIndex].text;

	var fpago = document.getElementById("forpago");
	pedidoc[3] = fpago.options[fpago.selectedIndex].text;
	
	pedidoc[4] = document.getElementById("fpedido").value;

	resumenpe[0] = pedidoc;
}
function mostrarresumenpedidos(){
	var tabla;
	tabla = "<table id=\"genpedido\" border=2>";
	for (var i = 0; i < 5; i++) {
		tabla += "<tr>";
		if (i == 0) {
			tabla += "<th>Cliente:</th>";
		}else if (i == 1) {
			tabla += "<th>Telefono:</th>";
		}else if (i == 2) {
			tabla += "<th>Menu:</th>";
		}else if (i == 3) {
			tabla += "<th>Forma de Pago:</th>";
		}else if (i == 4) {
			tabla += "<th>Fecha pedido:</th>";
		}
		tabla += "<td>"+resumenpe[0][i]+"</td>";
		tabla += "</tr>";
	}
	tabla += "</table>";
	tabla += "<div style=\"margin-left: 32%;margin-right: 32%;\"><input type=\"button\" value=\"Realizar Pedido\" class=\"btn2\" onclick=\"abreVentana2()\"></div>";
	document.getElementById("resumen").innerHTML = tabla;
}
/*------------------------------------------------------------------------------------------------*/
/*enviado.html*/
function abreVentana2(){
	var menu;
	menu = window.open("./enviado.html","Enviado","width=300,height=280,top=100,left=300");
	menu.focus();
}
enviado.html
/*------------------------------------------------------------------------------------------------*/
/*menu.html*/
var menus = new Array(3);
var menu1 = new Array(2);
var menu2 = new Array(2);
var menu3 = new Array(2);
function introdatosm1() {
	menu1[0] = "Refrescos.";
	menu1[1] = "Bocadillo o pizzas.";

	menus[0] = menu1;
}
function introdatosm2() {
	menu2[0] = "Cafés.";
	menu2[1] = "Bolleria dulce.";

	menus[1] = menu2;
}
function introdatosm3() {
	menu3[0] = "Cafés.";
	menu3[1] = "Bolleria salada.";

	menus[2] = menu3;
}

function mostrarocultarmenus1(iddiv) {
    if (document.getElementById){
		var el = document.getElementById(iddiv);
		//el.style.display = (el.style.display == 'block') ? 'none' : 'block';
		if (el.style.display == 'block') {
			el.style.display = 'none';
		}else{
			el.style.display = 'block';
			introdatosm1();
			mostrarmenus1();
		}
	}
}
function mostrarocultarmenus2(iddiv) {
    if (document.getElementById){
		var el = document.getElementById(iddiv);
		
		//el.style.display = (el.style.display == 'block') ? 'none' : 'block';
		if (el.style.display == 'block') {
			el.style.display = 'none';
		}else{
			el.style.display = 'block';
			introdatosm2();
			mostrarmenus2();
		}
	}
}
function mostrarocultarmenus3(iddiv) {
    if (document.getElementById){
		var el = document.getElementById(iddiv);
		
		//el.style.display = (el.style.display == 'block') ? 'none' : 'block';
		if (el.style.display == 'block') {
			el.style.display = 'none';
		}else{
			el.style.display = 'block';
			introdatosm3();
			mostrarmenus3();
		}
	}
}
function mostrarmenus1(){
	var tabla;
	tabla = "<table border=2>";
	for (var i = 0; i < 2; i++) {
		tabla += "<tr>";
		if (i == 0) {
			tabla += "<th>Bebidas:</th>";
		}else if (i != 0) {
			tabla += "<th>Comida:</th>";
		}
		tabla += "<td>"+menus[0][i]+"</td>";
		tabla += "</tr>";
	}
	tabla += "</table>";
	document.getElementById("menu1").innerHTML = tabla;
}
function mostrarmenus2(){
	var tabla;
	tabla = "<table border=2>";
	for (var i = 0; i < 2; i++) {
		tabla += "<tr>";
		if (i == 0) {
			tabla += "<th>Bebidas:</th>";
		}else if (i != 0) {
			tabla += "<th>Comida:</th>";
		}
		tabla += "<td>"+menus[1][i]+"</td>";
		tabla += "</tr>";
	}
	tabla += "</table>";
	document.getElementById("menu2").innerHTML = tabla;
}
function mostrarmenus3(){
	var tabla;
	tabla = "<table border=2>";
	for (var i = 0; i < 2; i++) {
		tabla += "<tr>";
		if (i == 0) {
			tabla += "<th>Bebidas:</th>";
		}else if (i != 0) {
			tabla += "<th>Comida:</th>";
		}
		tabla += "<td>"+menus[2][i]+"</td>";
		tabla += "</tr>";
	}
	tabla += "</table>";
	document.getElementById("menu3").innerHTML = tabla;
}
function elegirmenu(menu) {
	window.opener.document.formu.pago.value = menu;
	window.close();
}
/*menu*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("cuerpo").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("cuerpo").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}