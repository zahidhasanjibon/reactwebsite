import imgpath from '../images/service.svg';
import Common from './Common';

const About = () => (
    <Common head="Welcome to About Page" photo={imgpath} visit="/contact" btnName="contact now" />
);

export default About;
