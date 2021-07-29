import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	const setUserData = ({ id, name }) => {
		const copy = { ...user };

		if (id) {
			copy.id = id;
			localStorage.setItem('id', id);
		}
		if (name) {
			copy.name = name;
			localStorage.setItem('name', name);
		}

		setUser(copy);
	};

	const setTokenData = (token) => {
		localStorage.setItem('token', token);
		setToken(token);
	};

	const logout = () => {
		localStorage.removeItem('id');
		localStorage.removeItem('name');
		localStorage.removeItem('token');
		setUser(null);
		setToken(null);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const id = localStorage.getItem('id');
			const name = localStorage.getItem('name');
			const token = localStorage.getItem('token');
			if (id && name && token) {
				setUser({ id, name });
				setToken(token);
			}
		}
	}, []);

	const getToken = () => {
		return 'Bearer ' + token;
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				getToken,
				setUser: setUserData,
				setToken: setTokenData,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export function useUser() {
	return useContext(AuthContext);
}
