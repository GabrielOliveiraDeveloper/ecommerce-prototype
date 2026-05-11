import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ManageShops = () => {
    const location = useLocation();
    const user = location.state?.user;

    const fetchShops = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/shops/owner/${user.userID}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            console.log('Lojas do usuário:', response.data);
        } catch (error) {
            console.error('Erro ao buscar lojas:', error.response ? error.response.data : error.message);
        }

    }

    useEffect(() => {
        if (user) {
            fetchShops();
        }
    }, [user]);
    
    return (
        <div>
                
        </div>
    )
}

export default ManageShops;