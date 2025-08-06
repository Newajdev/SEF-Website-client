
import { Helmet } from 'react-helmet-async';
import Container from '../../component/Container';
import SectionHeader from '../../component/SectionHeader';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SEFreelancers' | Home</title>
            </Helmet>
            <SectionHeader></SectionHeader>
            <Container>
                <h1 className=''>This is home page</h1>
                <h1 className=''>All Sections Added Here</h1>
            </Container>
        </div>
    );
};

export default Home;