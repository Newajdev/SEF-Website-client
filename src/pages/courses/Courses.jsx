
import { Helmet } from 'react-helmet-async';
import Container from '../../component/Container';

const Courses = () => {
    return (
        <div>
            <Helmet>
                <title>SEFreelancers' | Course</title>
            </Helmet>
            <Container>
                <h1 className=''>This is courses page</h1>
                <h1 className=''>All Courses aree Added Here</h1>
            </Container>
        </div>
    );
};

export default Courses;