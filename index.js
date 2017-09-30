function activeToggle(){
	var server = document.getElementById("fechaActual").value.split("-");
	var fechaActual = new Date(server[2],server[1],server[0]);
	var inicio = document.querySelectorAll("[data-inicio]");
	inicio.forEach(function(promo){
		let init = promo.getAttribute("data-inicio").split("-");
		let fin = promo.getAttribute("data-fin").split("-");
		fechaInit = new Date(init[2],init[1],init[0]);
		fechaFin = new Date(fin[2],fin[1],fin[0]);

		if (fechaInit >= fechaActual && fechaActual <= fechaFin) {
			let padre = i.parentNode;
			padre.appendChild(promo);
		} else {
			let padre = i.parentNode;
			padre.removeChild(promo);
		}
	});
}

activeToggle();