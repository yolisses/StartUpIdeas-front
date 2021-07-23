export const isAuthenticated = () => {
	if (typeof window === 'undefined') return null;
	return !!localStorage.getItem('token');
};

export const retrieveToken = () => {
	if (typeof window === 'undefined') return null;
	return 'Bearer ' + localStorage.getItem('token');
};

export const retrieveId = () => {
	if (typeof window === 'undefined') return null;
	return localStorage.getItem('id');
};

export const retrieveName = () => {
	if (typeof window === 'undefined') return null;
	return localStorage.getItem('name');
};

export const storeUserData = ({ token, id, name }) => {
	// if (typeof window === 'undefined') return null;
	localStorage.setItem('id', id);
	localStorage.setItem('name', name);
	localStorage.setItem('token', token);
	console.log('guardado: ', localStorage.getItem('token'));
	console.log('guardado: ', localStorage.getItem('id'));
};

export const deleteToken = () => {};
//  localStorage.removeItem('token');
