import './aboutPage.scss'
import photoProfile from '../../resources/photo.jpg'

const About = () => {
    return (
        <div className="tab about">
            <div className="about__header header-tab">
                <h1>About</h1>
            </div>
            <div className="about__body">
                <div className="about__top">
                    <div className="about__image">
                        <img src={photoProfile} alt="" />
                    </div>
                    <div className="about__title">
                        <h1>Junior Frontend Developer</h1>
                        <div className="about__links">
                            <a 
                                className="btn"
                                href="https://github.com/bandoto"
                                target="_blank"
                                rel="noreferrer" 
                                >Github</a>
                            <a 
                                className="btn"
                                href="https://www.linkedin.com/in/vadim-pertsov-484b271b6/"
                                target="_blank"
                                rel="noreferrer" 
                                >LinkedIn</a>
                            <a 
                                className="btn"
                                href="mailto:pepperr228@gmail.com"
                                >Gmail</a>        
                        </div>
                           
                        <div className="about__bio">
                            Hi there, my name is Vadim and I'm a Junior Frontend Developer. 
                            <br /> 
                            <br /> 
                            Now I'm finishing my last year at the institute and trying my hand at website development. 
                            <br />
                            At the moment, I'm looking for a job to improve my skills in this area and learn more and more in the development of sites of varying complexity.
                            <br /> 
                            <br /> 
                            I'm passionate about frontend development and trying to be better than yesterday.
                        </div>
                    </div>
                </div>
             
                <div className="about__education">
                    <h1>Education</h1>
                    <div className="about__university">
                        The National Technical University of Ukraine
                        "Igor Sikorsky Kyiv Polytechnic Institute"
                    </div>
                    <span>Radio Technician</span>
                    <span>2017 – present</span>
                </div>
            </div>
        </div>
    );
};

export default About;