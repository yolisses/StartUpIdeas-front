export const isAuthenticated = () => {};
// !!localStorage.getItem('token');
export const retrieveToken = () => {};
// 'Bearer ' + localStorage.getItem('token');
export const retrieveId = () => {};
// localStorage.getItem('id');
export const retrieveName = () => {};
// localStorage.getItem('name');
export const storeUserData = ({ token, id, name }) => {};
// {
// 	localStorage.setItem('id', id);
// 	localStorage.setItem('name', name);
// 	localStorage.setItem('token', token);
// 	console.log('guardado: ', localStorage.getItem('token'));
// 	console.log('guardado: ', localStorage.getItem('id'));
// };
export const deleteToken = () => {};
//  localStorage.removeItem('token');
