class Filmography {

    handelClear(){
        ROOT_FILMOGRAPHY.innerHTML = '';
    }

    render(){
        let outtext = 'Ваш список фильмов пуст';
        const filmsstore = localStorageUtil.getFilms();
		let htmlCatalog = '';
        
        for (let i = 0; i <  filmsstore.length; i++){
            outtext='Ваши фильмы:'
            for (let key in localStorage) {
                let obj = JSON.parse(localStorage.getItem(key));
                if (key.startsWith("id") && obj.id == filmsstore[i]){
                    htmlCatalog += `
                    <table class="filmography-element">
                    <tr>
                        <td rowspan="3" width="30%" align="center">
                            <img class="films-element__img" src="${obj.png}"/>
                        </td>
                        <td colspan="2" align="center">
                            <span class="films-element__name">${obj.name}</span>
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
                    </table>	
                    `;
                }
            }
        }



        // CATALOG.forEach(({id, name, img, producer, age, budget})=> {
        //     if (filmsstore.indexOf(id) !== -1){
        //         htmlCatalog += `
        //             <tr>
        //                 <td class="filmography-element__name">${name}</td>
        //                 <td class="filmography-element__producer">${producer}</td>
        //             </tr>
        //         `
        //     }
        // });

        const html = `
            <div id="filmography-container" class="filmography-container">
                <div class="filmography_header">
                    <span class="filmography_paragraph">${outtext}</span>
                    <div class="filmography__close" onclick="filmographypage.handelClear();"></div>
                </div>    
                ${htmlCatalog}
            </div>
        `;
        ROOT_FILMOGRAPHY.innerHTML = html;
        document.getElementById("filmography-container").style.display = "block";
    }

}

const filmographypage = new Filmography();
