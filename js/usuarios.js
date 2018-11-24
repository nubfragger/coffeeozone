function abreVentana()
{
	var ayuda
	ayuda = window.open("./ayuda.html","ayuda","width=300,height=280,top=100,left=300")
	ayuda.focus()
}
function usuario (nombre_in, apellido_in, foto_in, nacionalidad_in, telefono_in, direccion_in, fnac_in) {
	this.nombre = nombre_in;
	this.apellido = apellido_in;
	this.foto = foto_in;
	this.nacionalidad = nacionalidad_in;
	this.telefono = telefono_in;
	this.direccion = direccion_in;
	this.fnac = fnac_in;
}
var usuarios = new Array(5);
	usuarios[0] = new usuario("Nicolas", "Viñals", "./imagenes/nico.png", "Argentina", "999999999", "Aspe","1993-08-24");
	usuarios[1] = new usuario("Roberto", "Fernandez", "./imagenes/roberto.png", "Española", "888888888", "Alicante", "1993-12-20");
	usuarios[2] = new usuario("Jorge", "Ribera", "./imagenes/jorge.png", "Española", "777777777", "Alicante", "1988-06-4");
	usuarios[3] = new usuario("Cristina", "Ulloa", "./imagenes/cris.png", "Española", "666666666", "Pamplona", "1993-04-30");
	usuarios[4] = new usuario("Neo", "Antonia", "./imagenes/neo.png", "Angola", "555555555", "Elche", "1987-08-11");
function mostrarusuarios(){
	var persona = document.getElementById("lista").value;
	document.formu.txtnombre.value = usuarios[persona-1].nombre;
	document.formu.txtapellido.value = usuarios[persona-1].apellido;
	document.formu.txtnacionalidad.value = usuarios[persona-1].nacionalidad;
	document.formu.txttelefono.value = usuarios[persona-1].telefono;
	document.formu.txtfnac.value = usuarios[persona-1].fnac;
	document.formu.txtdireccion.value = usuarios[persona-1].direccion;
	document.formu.foto_img.src = usuarios[persona-1].foto;
}
function editarusuarios(){
	var persona = document.getElementById("lista").value;
	usuarios[persona-1].nombre = document.formu.txtnombre.value;
	usuarios[persona-1].apellido = document.formu.txtapellido.value;
	usuarios[persona-1].nacionalidad = document.formu.txtnacionalidad.value;
	usuarios[persona-1].telefono = document.formu.txttelefono.value;
	usuarios[persona-1].direccion = document.formu.txtdireccion.value;
	usuarios[persona-1].fnac = document.formu.txtfnac.value;
	alert("Datos Modificados");
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