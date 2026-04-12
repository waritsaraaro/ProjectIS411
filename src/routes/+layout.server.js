export const load = ({ cookies }) => {
    const userData = cookies.get('user_data');

    if (userData) {
        try {
            return {
                user: JSON.parse(userData)
            };
        } catch (e) {
            return { user: null };
        }
    }
    return { user: null };
};