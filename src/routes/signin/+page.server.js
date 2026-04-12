import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, cookies, fetch }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if (email === 'test@gmail.com' && password === '1234') {
            console.log("Mock Login Success!");
            
            const mockUser = {
                username: "testuser",
                email: "test@gmail.com",
                display_name: "น้องเทส สายวินเทจ",
                customer_phone: "0812345678",
                avatar: "https://i.pinimg.com/736x/21/20/b0/2120b058cb9946e36306778243eadae5.jpg"
            };

            cookies.set('session_token', 'mock-token-12345', {
                path: '/',
                httpOnly: true,
                maxAge: 60 * 60 * 24
            });
            
            cookies.set('user_data', JSON.stringify(mockUser), {
                path: '/',
                maxAge: 60 * 60 * 24
            });

            throw redirect(303, '/profile');
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                return fail(400, { error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง', email });
            }

            const result = await response.json();

            cookies.set('session_token', result.access_token || 'real-token', {
                path: '/',
                httpOnly: true,
                maxAge: 60 * 60 * 24
            });

            cookies.set('user_data', JSON.stringify(result.user || { email, username: email.split('@')[0] }), {
                path: '/',
                maxAge: 60 * 60 * 24
            });

        } catch (err) {
            if (err.status === 303) throw err; 
            return fail(500, { error: 'ติดต่อเซิร์ฟเวอร์ไม่ได้', email });
        }

        throw redirect(303, '/profile');
    }
};