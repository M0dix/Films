class Header {
    handlerOpenFilmographyPage(){
        filmographypage.render();
    }

    render(count) {
        const html = `
                <div class="header-container">
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