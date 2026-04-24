import { redirect } from '@sveltejs/kit';

export const load = ({ cookies }) => {
    const userData = cookies.get('user_data');

    if (!userData) {
        throw redirect(303, '/signin');
    }

    return {
        user: JSON.parse(userData)
    };
};

export const actions = {
    logout: ({ cookies }) => {
       
        cookies.delete('session_token', { path: '/' });
        cookies.delete('user_data', { path: '/' });
        throw redirect(303, '/signin');
    }
};