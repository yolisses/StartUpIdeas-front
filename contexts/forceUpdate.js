import { createContext, useContext, useState } from 'react';

const ForceUpdateContext = createContext({});

export function ForceUpdateProvider(props) {
	const [value, setValue] = useState(0);

	function forceUpdate() {
		setValue(value + 1);
		console.log('force update');
	}

	return (
		<ForceUpdateContext.Provider value={{ value, forceUpdate }}>
			{props.children}
		</ForceUpdateContext.Provider>
	);
}

export function useForceUpdate() {
	return useContext(ForceUpdateContext);
}
