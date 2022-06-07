export namespace AuthModel {
	export interface AuthRequestBody {
		username: string;
		password: string;
		confirmPassword?: string;
	}

	export interface LoginResponse {
		status: string;
		accessToken: string;
		refreshToken: string;
	}
}
