let miobjeto = {
    nombre: 'Alberto',
    apellidos:  'Terrazas',
    sitio:  'www.intergasdelnorte.com'
}

let objeto_string = JSON.stringify(miobjeto);

localStorage.setItem("persona", objeto_string);