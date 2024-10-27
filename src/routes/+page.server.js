export const actions = {
	default: async ({ fetch, cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const response = await fetch("http://localhost:8080/api/v1/auth/login", {
			method: "POST",
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const cookie = response.headers.getSetCookie();
		cookies.set('authToken', cookie[0].replace("authToken=", ""), { path: '/' });

		return { success: true };
	}
}