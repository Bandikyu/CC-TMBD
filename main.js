import './style.css'
// import getPelis from './modules/getPelis.js'
import {proximo , anterior , pagina , getPelis , loadImg} from "./modules"


const cleanPelis = async (numPag)=> {
  let pagina = document.querySelector("#pagina");
  let datos = await getPelis(numPag);
  return datos.data.results;
}

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Pelis TMDB-CC</h1>
    <br/>
    <h2>Cargando...</h2>
  </div>
`;

async function estructura(num) {
  let arrPelis = await cleanPelis(num);


  return ( () => {document.querySelector('#app').innerHTML =`
    <div class="main"> 
      <h1>Pelis TMDB-CC</h1>
      <div class="galeria">
        ${arrPelis.map((peli) => `
          <div class="portada loadPortada">
            <img src="https://image.tmdb.org/t/p/w200/${peli.poster_path}"/>
            <h3>${peli.title}</h3>
          </div>
        `).join('')
        }
      </div>
      <div class="pag">
        <input id="anterior" type="button" value="Anterior">
        <input id="pagina" type="number" value="1">
        <input id="proximo" type="button" value="Proximo"/>
      </div>
    </div> 
  `
    anterior(document.querySelector("#anterior") , document.querySelector("#pagina"))
    proximo(document.querySelector("#proximo") , document.querySelector("#pagina"))
    pagina(document.querySelector("#pagina") , estructura)
  }) ();

}
(async () => {
  await estructura()
/*   anterior(document.querySelector("#anterior") , document.querySelector("#pagina"))
  proximo(document.querySelector("#proximo") , document.querySelector("#pagina"))
  pagina(document.querySelector("#pagina") , estructura) */
  //loadImg(document.querySelector(".galeria"))
})();

//<img src="https://image.tmdb.org/t/p/w300/${peli.poster_path}" onload="this.parentElement.classList.remove('loadPortada')"/>








//setupCounter(document.querySelector('#counter'))
/*     <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p> */