// Este codigo ha sido generado por el modulo psexport 20230904-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function piedrapapeltijera() {
	var jugador = new Number();
	var maquina = new Number();
	var opciones = new String();

	jugador = Number(prompt("Bienvenido a Piedra, Papel o Tijera \n Elige una opción:\n 1. Piedra\n 2. Papel \n 3. Tijera"));
	maquina = Math.floor(Math.random() * 3) + 1;
	alert("Tu elección: "+ jugador);
	alert("Elección de la máquina: "+ maquina);
	if (jugador==maquina) {
		document.getElementById("resultado").innerHTML = "¡Empate!";
	} else {
		if ((jugador==1 && maquina==3) || (jugador==2 && maquina==1) || (jugador==3 && maquina==2)) {
		document.getElementById("resultado").innerHTML = "¡Ganaste!";
		} else {
		document.getElementById("resultado").innerHTML = "¡Perdiste!";
		}
	}
}

