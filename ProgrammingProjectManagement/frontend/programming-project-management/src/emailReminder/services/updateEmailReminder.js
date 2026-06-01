import axios from 'axios'
import tokenManager from '@/commons/utils/token'
import environment from '@/commons/utils/environment'

const updateEmailReminder = (data = {}) => {
	const { getToken } = tokenManager();
	const token = getToken();

	return axios.post(`${environment.rootApi}/call/emailreminder/update`, data,
	{
		params: { token },
		headers: {
			'Authorization': token,
		}
	})
}

export default updateEmailReminder
