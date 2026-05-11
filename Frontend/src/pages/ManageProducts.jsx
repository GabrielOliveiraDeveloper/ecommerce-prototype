import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const ManageProducts = () => {
    const location = useLocation();
    const user = location.state?.user;
    const shopID = location.state?.shopID;
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/products/shop/${shopID}`, {
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });
                console.log('Products fetched successfully:', response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        if (user && shopID) {
            fetchProducts();
        }
    }, [user, shopID]);

    return (
        <div>

        </div>
    )
}

export default ManageProducts;