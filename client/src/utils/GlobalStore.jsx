import { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		test: 'Hello World',
		pets: [],
	});
	return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
	return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
