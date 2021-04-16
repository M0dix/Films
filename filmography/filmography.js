class Filmography {

    handelClear(){
        ROOT_FILMOGRAPHY.innerHTML = '';
    }

    render(){
        const filmsstore = localStorageUtil.getFilms();
		let htmlCatalog = '';
        
        CATALOG.forEach(({id, name, img, producer, age, budget})=> {
            if (filmsstore.indexOf(id) !== -1){
                htmlCatalog += `
                    <tr>
                        <td class="filmography-element__name">${name}</td>
                        <td class="filmography-element__producer">${producer}</td>
                    </tr>
                `
            }
        });

        const html = `
            <div class="filmography-container">
                <div class="filmography__close" onclick="filmographypage.handelClear();"></div>
                <table>
                    ${htmlCatalog}
                </table>
            </div>
        `;
        ROOT_FILMOGRAPHY.innerHTML = html;
    }

}

const filmographypage = new Filmography();
filmographypage.render();