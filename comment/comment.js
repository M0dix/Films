function commentShow(id) {
    let commentblock = document.getElementById(`comment-element_${id}`);
    let commentshowbutton = document.getElementById(`film-element__btn-showcomments_${id}`);
    let commentclosebutton = document.getElementById(`film-element__btn-closecomments_${id}`);
    let commentform = document.getElementById(`comment-form${id}`);
   
    var one = document.getElementById(`films_element ${id}`);
    var two = document.getElementById("two");


    if (commentshowbutton.innerHTML == "Посмотреть отзывы"){

        commentblock.style.display = "block";
        commentshowbutton.innerHTML = "Закрыть отзывы";
        
        setTimeout(function(){
            commentblock.style.height= "400px";
        },30);
        setTimeout(function(){
            commentform.style.opacity = "1";
        },500);
    }
    else if (commentshowbutton.innerHTML == "Закрыть отзывы") {
        commentshowbutton.innerHTML = "Посмотреть отзывы";

        var promise = new Promise(function(resolve, reject) {
            setTimeout(function(){
                commentblock.style.height = "0px";
                commentform.style.opacity = "0";
            },30);
        })
        promise.then(function() {
            console.log("then");
            setTimeout(function(){
            commentblock.style.display = "none";
            },860)
        })
        
    }

    let commentcatalog = '';

	for (let key in localStorage) {
		if (key.startsWith(`commentid${id}`)) {
			let obj = JSON.parse(localStorage.getItem(key));
		    console.log("est");
            commentcatalog += `
            <div class="comment-unit">
                <span class="name">${obj.name}</span>
                <span class="name">${obj.occupation}</span>
                <span class="name">${obj.text}</span>
                <span class="name">${obj.rating}</span>
            </div>
            `

	    }
    }

    document.getElementById(`comments-container${id}`).innerHTML = commentcatalog;
}

function addComment(id) {
    let nametext = document.getElementById(`commentinput_name_id${id}`).value;
    let occupationtext = document.getElementById(`commentinput_occupation_id${id}`).value;
    let commenttext = document.getElementById(`commentinput_text_id${id}`).value;
    let rating = null;

    let rateradios = document.querySelectorAll(`input[name="rating_id${id}"]`);
    for (let i = 0; i < 5; i++) {
        if (rateradios[i].checked) rating = i+1;
    }

    if (nametext == null || nametext == "") { alert("Введите ваше имя"); return; }
    if (occupationtext == null || occupationtext == "") { alert("Введите ваш род деятельности"); return; }
    if (commenttext == null || commenttext  == "") { alert("Введите ваш отзыв"); return; }
    if (rating == null) { alert("Выберите оценку фильма"); return; }
    
    let count = 0;

    for (key in localStorage) {
        if (key.startsWith(`commentid${id}`)) count++; 
    }

    let comment = new CommentClass(nametext, occupationtext, commenttext, rating);
    localStorage.setItem(`commentid${id}_${count}`, JSON.stringify(comment));
	


	filmsPage.render();
}