
import { Helmet } from 'react-helmet-async';
import Container from '../../component/Container';


const BootCamp = () => {
    return (
        <div>
            <Helmet>
                <title>SEFreelancers' | Bootcamp</title>
            </Helmet>
            <Container>
                <h1 className=''>This is Bootcamp page</h1>
                <h1 className=''>All Boot-camps aree Added Here</h1>
            </Container>
        </div>
    );
};

export default BootCamp;