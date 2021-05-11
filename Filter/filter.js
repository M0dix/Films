function showFilters() {
	document.getElementById("dropdown").style.display = "block";
	document.getElementById("dropbtn").style.display = "none";

}

function filterDate() {
	if (document.getElementById("dropdown-date").style.display == "block") {
		document.getElementById("dropdown-date").style.display = "none";
	}
	else {
		document.getElementById("dropdown-date").style.display = "block";
	}
}

function filterGenre() {
	if (document.getElementById("dropdown-genre").style.display == "block") {
		document.getElementById("dropdown-genre").style.display = "none";
	}
	else {
		document.getElementById("dropdown-genre").style.display = "block";
	}
}

function filterCountry() {
	if (document.getElementById("dropdown-country").style.display == "block") {
		document.getElementById("dropdown-country").style.display = "none";
	}
	else {
		document.getElementById("dropdown-country").style.display = "block";
	}
}

function confirmFilters() {
	let filmsmassiv = [];
	let htmlCatalog = '';

	let radiosdate = document.querySelectorAll('input[name="radio-date"]');
	let	radiosgenre = document.querySelectorAll('input[name="radio-genre"]');
	let radioscountry = document.querySelectorAll('input[name="radio-country"]');
	
	let date = null;
	let genre = null;
	let country = null;

	function checkradios(){
		for (element of radiosdate){
			if (element.checked){
				if (element.value == "descending") date = "desc";
				else date = "asc";
			}		
		}

		for (element of radiosgenre) {
			if (element.checked){
				if (element.value == "drama") genre = "Драма";
				if (element.value == "comedy") genre = "Комедия";
				if (element.value == "thriller") genre = "Боевик";
				if (element.value == "fantasy") genre = "Фэнтези";
				if (element.value == "cartoon") genre = "Мультфильм";
				if (element.value == "documentary") genre = "Документальный";
			}
		}

		for (element of radioscountry){
			if (element.checked){
				if (element.value == "russia") country = "Россия";
				if (element.value == "usa") country = "США";
				if (element.value == "uk") country = "Великобритания";
				if (element.value == "italy") country = "Италия";
				if (element.value == "japan") country = "Япония";
			}
		}

		if (date == null && genre == null && country == null) {
			return false;
		}
		else return true;
	}

	for (let key in localStorage) {
		if (key.startsWith("id")) {
			let obj = JSON.parse(localStorage.getItem([key]));
			filmsmassiv.push(obj);		
		}
	}
	
	if (checkradios()) {
		
        classNameActive = 'films-element__btn_active';
		labelAdd = 'Добавить в каталог';
		labelRemove = 'Удалить из каталога';
        let htmlCatalog = '';
		let activeclass = '';
		let activetext = '';

		if (date != null) {
			if (date == "desc") {
				filmsmassiv.sort(function(a, b) {

					datearr1 = a.release.split(".");
					let day1 = datearr1[0];
					let mouth1 = datearr1[1];
					let year1 = datearr1[2];

					datearr2 = b.release.split(".");
					let day2 = datearr2[0];
					let mouth2 = datearr2[1];
					let year2 = datearr2[2];
					
					if (year1 != year2) {
						a = year1;
						b = year2;
						console.log(`${a.name} поменяли на ${b.name}`);
						return b - a;
					}
					else if (mouth1 != mouth2) {
						a = mouth1;
						b = mouth2;
						return b - a;
					}
					else if (day1 != day2) {
						a = day1;
						b = day2;
						return b - a;
					}
				
			});
			}
			else {
				filmsmassiv.sort(function(a, b) {

							datearr1 = a.release.split(".");
							let day1 = datearr1[0];
							let mouth1 = datearr1[1];
							let year1 = datearr1[2];

							datearr2 = b.release.split(".");
							let day2 = datearr2[0];
							let mouth2 = datearr2[1];
							let year2 = datearr2[2];
							
							if (year1 != year2) {
								a = year1;
								b = year2;
								console.log(`${a.name} поменяли на ${b.name}`);
								return a - b;
							}
							else if (mouth1 != mouth2) {
								a = mouth1;
								b = mouth2;
								return a - b;
							}
							else if (day1 != day2) {
								a = day1;
								b = day2;
								return a - b;
							}
						
					});

			}
		}

		if (genre != null){
			for (let i = 0; i < filmsmassiv.length;){
				if (filmsmassiv[i].genre != genre) {
					filmsmassiv.splice(i, 1);
				}
				else i++;
			}
		}
		
		if (country != null){
			for (let i = 0; i < filmsmassiv.length;){
				if (filmsmassiv[i].country != country) {
					filmsmassiv.splice(i, 1);
				}
				else i++;
			}
		}

		for (obj of filmsmassiv) {
			
			if (localStorageUtil.getFilms().indexOf(obj.id) === -1){
				activetext = this.labelAdd;
			}
			else {
				activetext = this.labelRemove;
				activeclass = ' ' + this.classNameActive;
			}

			htmlCatalog += `
			<div>
				<table class="films_element ${obj.id}" >
				<tr>
					<td rowspan="3" align="center">
						<img class="films-element__img" src="${obj.png}"/>
					</td>
					<td colspan="2" align="center">
						<span class="films-element__name">${obj.name}</span>
					</td>
					<td>
						<div class="film__delete" onclick="deleteFilm(${obj.id});"></div>
					</td>
				</tr>
				<tr>
					<td rowspan="2">
						<span class="films-element__age">${obj.age}</span>
						
						<span class="films-element__country">${obj.country}</span>
	
						<p>Жанр: <span class="films-element__genre">${obj.genre}</span></p>
	
						<p>Режиссёр: <span class="films-element__director">${obj.director}</span></p>
	
						<p>Продюсер: <span class="films-element__producer">${obj.producer}</span></p>
	
						<p>Сценарист: <span class="films-element__screenwriter">${obj.screenwriter}</span></p>
	
						<p>Оператор:<span class="films-element__operator">${obj.operator}</span></p>
	
						<p>Композитор: <span class="films-element__compositor">${obj.compositor}</span></p>
	
					</td>
					<td>
						<p>Бюджет: <span class="films-element__budget">${obj.budget.toLocaleString('ru-RU')}<img src="images/dollarsymbol.png"/></span></p>
	
						<p>Мировые сборы: <span class="films-element__tallage">${obj.tallage}<img src="images/dollarsymbol.png"/></span></p>
	
						<p>Длительность: <span class="films-element__duration">${obj.duration}</span></p>
	
						<p>Дата выхода: <span class="films-element__release">${obj.release}</span></p>
					</td>
				</tr>
				<tr>
					<td rowspan="2"> 
						<button class="films-element__btn ]${activeclass}" onclick="filmsPage.handleSetLocationStorage(this, '${obj.id}')">${activetext}</button>
						<button class="films-element__btn" id = "film-element__btn-showcomments_${obj.id}" onclick="commentShow('${obj.id}')">Посмотреть отзывы</button>
					</td>
				</tr>
				</table>

				<div class = "comment-element" id = "comment-element_${obj.id}">
					<div class = "comments-container" id="comments-container${obj.id}">

					</div>

					<div class = "comment-form" id = "comment-form${obj.id}">

						<form>
						<fieldset>
						
						<legend>Напишите ваш отзыв:</legend>
						
						<div class="form-group">
							<label class="col-md-4 control-label" for="textinput">Ваше имя:</label>  
							<div class="col-md-4">
								<input id="commentinput_name_id${obj.id}" name="textinput" type="text" class="form-control input-md">
							</div>
						</div>
						
						<div class="form-group">
							<label class="col-md-4 control-label" for="textinput">Ваш род занятий:</label>  
							<div class="col-md-4">
								<input id="commentinput_occupation_id${obj.id}" name="textinput" type="text" class="form-control input-md">									
							</div>
						</div>
						
						<div class="form-group">
							<label class="col-md-4 control-label" for="textarea">Ваш отзыв:</label>
							<div class="col-md-4">                     
								<textarea class="form-control_textarea" id="commentinput_text_id${obj.id}" name="textarea"></textarea>
							</div>
						</div>
						<span>Ваша оценка:</span>
						<div class="rating-area" id="commentinput_rating_id${obj.id}">
							<input type="radio" id="star-5_id${obj.id}" name="rating_id${obj.id}" value="5">
							<label for="star-5_id${obj.id}" title="Оценка «5»"></label>	
							<input type="radio" id="star-4_id${obj.id}" name="rating_id${obj.id}" value="4">
							<label for="star-4_id${obj.id}" title="Оценка «4»"></label>
							<input type="radio" id="star-3_id${obj.id}" name="rating_id${obj.id}" value="3">
							<label for="star-3_id${obj.id}" title="Оценка «3»"></label>
							<input type="radio" id="star-2_id${obj.id}" name="rating_id${obj.id}" value="2">
							<label for="star-2_id${obj.id}" title="Оценка «2»"></label>
							<input type="radio" id="star-1_id${obj.id}" name="rating_id${obj.id}" value="1">
							<label for="star-1_id${obj.id}" title="Оценка «1»"></label>
						</div>

						<button type="button" class="commentAddBtn" onclick="addComment(${obj.id})">Добавить отзыв</button>
						
						</fieldset>
						</form>
					</div>
				</div>
			</div>
			`;
		} 
        const html = `
		<ul class="films-container">${htmlCatalog}</ul>
		`;
		ROOT_CATALOG.innerHTML = html;
	}
	else alert("Вы не выбрали ни один фильтр");
}

function cancelFilters() {
	document.getElementById("dropdown-date").style.display = "none";
	var ele = document.getElementsByName("radio-date");
   	for(var i=0;i<ele.length;i++) ele[i].checked = false;

	document.getElementById("dropdown-genre").style.display = "none";
	var ele = document.getElementsByName("radio-genre");
	for(var i=0;i<ele.length;i++) ele[i].checked = false;

	document.getElementById("dropdown-country").style.display = "none";
	var ele = document.getElementsByName("radio-country");
	for(var i=0;i<ele.length;i++) ele[i].checked = false;

	document.getElementById("dropdown").style.display = "none";
	document.getElementById("dropbtn").style.display = "block";

    filmsPage.render()
}