const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
    city: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    codeP: /^\d{5}$/, // 5 numeros.
    asunto: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
}

const campos = {
	nombre: false,
	apellido: false,
	email: false,
	phone: false,
	city: false,
    codeP: false,
    asunto: false
}


const validarFormulario = (e) => {
    switch (e.target.name) {
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre');

        break;
        case 'apellido':
            validarCampo(expresiones.apellido, e.target, 'apellido');

        break;
        case 'email':
             validarCampo(expresiones.email, e.target, 'email');

        break;
        case 'phone':
             validarCampo(expresiones.phone, e.target, 'phone');

        break;
        case 'city':
             validarCampo(expresiones.city, e.target, 'city');

        break;
        case 'codeP':
             validarCampo(expresiones.codeP, e.target, 'codeP');

        break;
        case 'asunto':
             validarCampo(expresiones.asunto, e.target, 'asunto');

        break;

    }
    
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('form__group-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('form__group-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('form__group-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('form__group-correcto');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}




inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});



//formulario.addEventListener('submit', (e) => {
	//e.preventDefault();

	//const terminos = document.getElementById('terminos');
	//if(campos.nombre && campos.apellido && campos.email && campos.phone && campos.codeP && terminos.checked ){
		//formulario.reset();

		//document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		//setTimeout(() => {
		//	document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
	//	}, 5000);

	//	document.querySelectorAll('.form__group-correcto').forEach((icono) => {
	///		icono.classList.remove('form__group-correcto');
	//	});
	//} else {
	//	document.getElementById('formulario__mensaje').classList.add//('formulario__mensaje-activo');
	//}
//});