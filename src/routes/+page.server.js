import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ fetch, cookies, request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		const response = await fetch("http://129.154.255.30:8081/api/v1/auth/login", {
			method: "POST",
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		console.log(`Login Response Status: ${response.status}`);

		try {
			const cookie = response.headers.getSetCookie();
			const finalCookie = cookie[0].split(" ")[0].replace("authToken=", "");
			cookies.set('authToken', finalCookie, { path: '/' });

			return { success: true };
		} catch (error) {
			console.error(error);
			throw redirect(301, "/")
		}
	}
}

export async function load({ params, cookies, fetch }) {
	const token = cookies.get('authToken');
	if (token === undefined) {
		return;
	}
	const meInfo = await fetch("http://129.154.255.30:8081/api/v1/auth/me", {
		headers: {
			"Content-Type": "application/json",
			"Authorization": token,
		},
	});

	if (meInfo.status == 401) {
		cookies.delete('authToken', { path: '/' });
		redirect(301, "/");
	}

	const data = await meInfo.json();
	return { data };
}