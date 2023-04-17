//Contador: este ser nuestro directorio estaran las acciones, que es la información
        //que necesita nuestro reducer para saber que va a ejecutar.
//Recuerdas : Action Es la unica fuente de información que se envía por interacciones de usuario o programa

  // - incrementar, decrementar, multiplicar, dividir
  // - Exportamos nuestras acciones 

import {Action} from '../ngrx-fake/ngrx';
//Acción que enviare.
export const incrementAction: Action = {
    type: 'INCREMENTAR'
}
export const decrementAction: Action = {
    type: 'DECREMENTAR'
}

export const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload : 2
}
//Usar el reducer


export const dividirAction: Action = {
    type: 'DIVIDIR',
    payload : 2
}

export const resetAction: Action = {
    type: 'RESET',
}
