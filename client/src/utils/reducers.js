import { UPDATE_USERDATA} from './actions'


export const reducer = (state, action) =>{
 switch (action.type){
	case UPDATE_USERDATA: 
		return {
			...state,
			userData: action.payload
		}
		default:
			return state
 }
}