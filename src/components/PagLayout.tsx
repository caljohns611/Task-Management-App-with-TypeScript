import { Col, Container } from 'react-bootstrap';
import NavBar from './NavBar';
import NavBarButtons from '../buttons/NavBarButtons';

type PageLayoutProps = {
    children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <Container style={{ textAlign: 'center'}}>
            <Col>
                <NavBar />
            </Col>
            <h1>My App</h1>
            { children }
            <footer>
                <NavBarButtons />
            </footer>
        </Container>
    );
};

export default PageLayout;