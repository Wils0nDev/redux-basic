//Aqui ya hacemos uso del Store de redux
import {Store,legacy_createStore as createStore} from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementAction } from './contador/contador.action';

const store : Store = createStore(contadorReducer);
//suscribiendome al cambios del store, esto nos sirve para que redux ejecute 
//internamente todas las acciones enviadas en el dispatch
store.subscribe(()=>{
    //me suscribo y con el getState retorno mi nuevo estado.
    console.log('Subs:', store.getState());
})
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(incrementAction);

