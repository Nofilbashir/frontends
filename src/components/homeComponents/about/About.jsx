import "./About.css"
const About = () => {
  return (
    <div className="about">
        <div className="aboutContainer1">
            <h2>
                Main Features
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit optio debitis a adipisci iste asperiores reiciendis
                ad blanditiis ipsa tempore! Animi in pariatur ullam beatae, nesciunt architecto dolorum totam tempora.
            </p>
        </div>
        <div className="aboutContainer2">
            <div className="aboutCard">
                <img src={require("../../../assets/Icon.png")} alt="icon"/>
                <h3>Working time 24/7</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, error vel iure impedit voluptate quaerat.</p>
            </div>
            <div className="aboutCard">
                <img src={require("../../../assets/Icon-1.png")} alt="icon"/>
                <h3>Working time 24/7</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, error vel iure impedit voluptate quaerat.</p>
            </div>            <div className="aboutCard">
                <img src={require("../../../assets/Icon-2.png")} alt="icon"/>
                <h3>Working time 24/7</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, error vel iure impedit voluptate quaerat.</p>
            </div>
        </div>
    </div>
  )
}

export default About