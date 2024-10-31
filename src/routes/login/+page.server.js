export const actions = {
    default: async ({ fetch, request }) => {
        console.log(`register initiated`);

        const data = await request.formData();
        const username = data.get('username');
        const rollno = data.get('rollno');
        const uuid = data.get('uuid');
        const email = data.get('email');
        const password = data.get('password');
        const userType = data.get('role');

        try {
            const response = await fetch(
                "http://129.154.255.30:8081/api/v1/auth/register",
                {
                    method: "POST",
                    body: JSON.stringify({
                        name: username,
                        rollNumber: rollno,
                        email: email,
                        specialId: uuid,
                        password: password,
                        userType: userType.toLowerCase(),
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );

            console.log(`register status: ${response.status}`);

            if (response.status == 201) {
                return { success: true };
            } else {
                return { success: false };
            }
        } catch (error) {
            return { success: false };
        }
    }
}