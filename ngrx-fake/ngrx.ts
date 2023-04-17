//Interfaces 
    //- Action: Tienen 2 propiedades,type y payload (este ultimo es opcional)
    // Reducer :Es una función que recibe 2 argumentos 
export interface Action {
    type: string; //El tipo siempre es obligatorio
    payload?:any; //El payload es opcional
}

//Es una función que recibe 2 argumentos
//<T>, quiere decir que retornara un valor generico
export interface Reducer<T>{
    (state:T,action:Action):T 
}