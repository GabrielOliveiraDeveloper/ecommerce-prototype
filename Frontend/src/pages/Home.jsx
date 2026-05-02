import Header from '../components/Header.jsx';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const user = location.state?.user;

    return (
        <div>
            <Header user={user} />
            <section>
            </section>
        </div>
    );
}

export default Home;