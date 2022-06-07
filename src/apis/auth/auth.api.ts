import { AuthModel } from '@/apis/auth/auth.model';
import axiosClient from '@/apis/axiosClient';

const authApi = {
	register: (body: AuthModel.AuthRequestBody) => {
		return axiosClient.post('/auth/register', body);
	},
	login: (body: AuthModel.AuthRequestBody): Promise<AuthModel.LoginResponse> => {
		return axiosClient.post('/auth/login', body);
	},
};

export default authApi;
