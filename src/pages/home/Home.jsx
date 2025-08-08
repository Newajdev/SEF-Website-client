
import { Helmet } from 'react-helmet-async';
import Container from '../../component/Container';
import SectionHeader from '../../component/SectionHeader';
import Header from './header/Header';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SEFreelancers' | Home</title>
            </Helmet>
            <Header></Header>
            <Container>
                                
            </Container>
        </div>
    );
};

export default Home;