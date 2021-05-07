function openPopup(){
	let popup = document.getElementById('popup');
	popup.style.display = "block";


	window.onclick = function(e){
		if(e.target == popup){
			popup.style.display = "none";
		}	
	}
}

function authorize(){
	window.isAuthorized = false;
	let user_name = document.getElementById('popup_text_nickname').value;
	let prof = document.getElementById('popup_text_prof').value;
	if (user_name && prof) {
		if (user_name.length <= 12){
			isAuthorized = true;
			document.getElementById('user').innerHTML = user_name;
			window.prof = document.getElementById('popup_text_prof').value; 
			document.getElementById('popup').style.display = "none";
			alert("Авторизация прошла успешно");
			alert(prof);
		}
		else {
			alert("Длина не должна превышать 12 символов")
		}
	}	
	else {
		alert("Повторите попытку");
	}
}


function addFilm(){
	let LIST = {
		id: document.getElementById("id").value,
		name: document.getElementById("name").value, 
		png : document.getElementById("png").value,
		country : document.getElementById("country").value,
		genre : document.getElementById("genre").value,
		director : document.getElementById("director").value,
		producer : document.getElementById("producer").value,
		screenwriter : document.getElementById("screenwriter").value,
		operator : document.getElementById("operator").value,
		compositor : document.getElementById("compositor").value,
		budget : document.getElementById("budget").value,
		tallage : document.getElementById("tallage").value,
		duration : document.getElementById("duration").value, 
		release : document.getElementById("release").value,
		age : document.getElementById("age").value
	}

	for (var key in LIST) {
		if (LIST[key] == null || LIST[key] == "") return alert("Вы не заполнили все поля");
	}

	// for (let i = 0; i < LIST.length; i++) {
	// 	if(LIST[i] == null || LIST[i] == ""){
	// 		return alert("Вы ввели не все поля");
	// 	}
	// }

	film = new Film(LIST.id, LIST.name, LIST.png, LIST.country, LIST.genre,LIST.director, 
					LIST.producer, LIST.screenwriter, LIST.operator, LIST.compositor,
					LIST.budget, LIST.tallage, LIST.duration, LIST.release, LIST.age);

	alert(film.name);
	localStorage.setItem(`id${LIST.id}`, JSON.stringify(film));
	
	filmsPage.render();
	closeAdder();
}

function closeAdder(){
	document.getElementById("name").value = '';
	document.getElementById("genre").value = '';
	document.getElementById("country").value = '';
	document.getElementById("director").value = '';
	document.getElementById("producer").value = '';
	document.getElementById("screenwriter").value = '';
	document.getElementById("operator").value = '';
	document.getElementById("compositor").value = '';
	document.getElementById("budget").value = '';
	document.getElementById("tallage").value = '';
	document.getElementById("duration").value = '';
	document.getElementById("release").value = '';
	document.getElementById("age").value = '';
	ROOT_ADDER.style.display = "none";
}






