import { incrementAction, multiplicarAction } from "./contador/contador.action";
import { contadorReducer } from "./contador/contador.reducer";
import { Action, Reducer } from "./ngrx-fake/ngrx";

//El Store : Veamos al store como el almacenamiento del estado actual de la aplicación
class Store<T> {    
    //private state: T;
    constructor(private reducer:Reducer<T>, private state:T){}   
    
    //el getState retorna el nuevo estado
    getState(){
        return this.state;
    }   

    //El dispatch ejecuta las acciones del reduce, por lo tanto recibe una acción
    dispatch(action:Action){
        //mi nuevo estado tomara el valor de la acción que el reduce ejecute
        this.state = this.reducer(this.state, action)

    }
}

//Mi Store : recibe el reduce (toda la funcion) y un estado anterior
const store = new Store(contadorReducer, 5) 
//hacemos uso del getState para poder obtener el nuevo estado
console.log(store.getState()); //aqui estado anterior : 5 por defecto ya que no le estoy pasando ninguna accion
store.dispatch(incrementAction)//aqui estado incrementado : 6
console.log(store.getState());
store.dispatch(multiplicarAction)//aqui estado multiplicado : 6
console.log(store.getState());
