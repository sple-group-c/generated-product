import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'


const saveBerita = (data = {}) => {
	let body = { ...data, subscription: false };

	const { getToken } = tokenManager();
	const token = getToken();

	return axios.post(`${environment.rootApi}/call/subscription/save`, body,
	{
		params: { token },
		
		headers: {
			'Authorization': token,
			
		}
	})} 

export default saveBerita
