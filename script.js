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

