import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, fetch }) => {
        const data = await request.formData();
        
        const username = data.get('name');
        const display_name = data.get('display_name');
        const email = data.get('email');
        const phone = data.get('phone'); 
        const password = data.get('password');
        const confirmPassword = data.get('confirmPassword');
        
        if (password !== confirmPassword) {
            return fail(400, { error: 'รหัสผ่านไม่ตรงกัน', name: username, email, phone, display_name });
        }

        try {
         
            const response = await fetch('http://127.0.0.1:8000/customers/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    customer_phone: phone, 
                    password: password,
                    display_name: display_name || username, 
                    avatar: "" 
                })
            });

            if (!response.ok) {
                const result = await response.json();
                return fail(response.status, { error: result.detail || 'สมัครไม่สำเร็จ มีบางอย่างผิดพลาด', name: username, email, phone, display_name });
            }

        } catch (err) {
          
            return fail(500, { error: 'ยังไม่ได้รัน Fastapi หรือ ไม่มีฐานข้อมูลใน DB', name: username, email, phone, display_name });
        }

     
        throw redirect(303, '/signin');
    }
};