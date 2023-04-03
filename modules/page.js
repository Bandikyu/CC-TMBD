let numero = 1;

export function proximo(element , pagina) {
    pagina.value = numero;
    element.addEventListener('click', () => {
        numero += 1;
        pagina.value = numero;
        let evento = new Event("change");
        pagina.dispatchEvent(evento);
    })
}

export function anterior(element , pagina) {
    element.addEventListener('click', () => {
        numero -= 1;
        pagina.value = numero;
        let evento = new Event("change");
        pagina.dispatchEvent(evento);
    })
}

export async function pagina(element , estructura) {
    element.addEventListener('change' , async () => {
        const pag = Number(element.value);
        numero = Number(element.value);
        return await estructura(pag)
    })

}
