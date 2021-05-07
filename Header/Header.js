class Header {
    handlerOpenFilmographyPage(){
        filmographypage.render();
    }

    handlerOpenAdderPage(){
        ROOT_ADDER.style.display = "block";
    }

    render(count) {
        const html = `
                <div class="header-container">
                    <div class="header-logo"><img src="images/logo.png"/></div>
                    <div class="header-name"><a href="index.html">Онлайн-кинотеатр</a></div>
                    <div class="header-adder" onclick="headerPage.handlerOpenAdderPage();">Добавить фильм</div>
                    <div class="header-counter" onclick="headerPage.handlerOpenFilmographyPage();">
                    <img src="images/clapperboard.png"/>
                    ${count}
                    </div>
                </div>     
        `;

        ROOT_HEADER.innerHTML = html;

         
    }
}

const headerPage = new Header();

const filmsstore = localStorageUtil.getFilms();
headerPage.render(filmsstore.length);