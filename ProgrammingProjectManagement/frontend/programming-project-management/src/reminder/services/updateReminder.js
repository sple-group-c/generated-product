import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const updateReminder = (data = {}) => {
	const { getToken } = tokenManager();
	const token = getToken();

	return axios.post(`${environment.rootApi}/call/reminder/update`, data,
	{
		params: { token },
		headers: {
			'Authorization': token,
		}
	})
}

export default updateReminder
