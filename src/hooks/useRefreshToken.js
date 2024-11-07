import axios from 'axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        // const refreshToken = localStorage.getItem('refreshToken');
        try {
            const response = await axios.post('https://localhost:7231/swagger/api/Auth/refresh', {
                withCredentials: true
            });
            setAuth(prev => {
                console.log(JSON.stringify(prev));
                console.log(response.data.accessToken);
                return { ...prev, accessToken: response.data.accessToken }
            });
            return response.data.accessToken;
        } catch (error) {
            console.error("Failed to refresh token:", error);
            // Handle token refresh failure (e.g., redirect to login)
        }
    }
    return refresh;
};

export default useRefreshToken;