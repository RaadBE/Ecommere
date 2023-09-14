import React from "react";
// import Navbar from "../common/Navbar";
 import FooterBottom from "../common/FooterBottom";
import "./About.css";
import logo from "../img/leather-image.jpg";

function About() {
  const companyName = "Ash Mademoiselle";
  return (
    <div>
  
      <div className="aboutContainer">
        <img src={logo} alt="Leather" className="aboutImage" />
        <h1>
          Welcome to the <span className="citeName">{companyName}!</span>{" "}
        </h1>
        <p className="about">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim
          sodales ut eu sem integer. Eget mauris pharetra et ultrices neque
          ornare aenean. Leo urna molestie at elementum eu facilisis. Erat velit
          scelerisque in dictum. Integer quis auctor elit sed vulputate mi sit
          amet mauris. Sed turpis tincidunt id aliquet risus feugiat in ante
          metus. Euismod lacinia at quis risus. Eget dolor morbi non arcu risus
          quis varius quam. Mi in nulla posuere sollicitudin aliquam. Feugiat
          pretium nibh ipsum consequat nisl. Rhoncus dolor purus non enim
          praesent elementum facilisis. Elit ut aliquam purus sit amet luctus.
          Amet venenatis urna cursus eget nunc scelerisque viverra. Feugiat in
          ante metus dictum at. Et malesuada fames ac turpis egestas. Diam ut
          venenatis tellus in metus vulputate eu. In est ante in nibh. Viverra
          accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Enim
          praesent elementum facilisis leo vel fringilla est ullamcorper eget.{" "}
        </p>
        <p className="about">
          Aenean et tortor at risus viverra adipiscing at in. Elementum sagittis
          vitae et leo duis ut diam quam. Turpis egestas integer eget aliquet
          nibh praesent. Aliquam sem et tortor consequat id porta nibh. At
          consectetur lorem donec massa. Purus faucibus ornare suspendisse sed
          nisi. Fames ac turpis egestas sed tempus urna et pharetra pharetra.
          Tincidunt praesent semper feugiat nibh sed. Porttitor massa id neque
          aliquam vestibulum morbi blandit cursus. A scelerisque purus semper
          eget. Tellus cras adipiscing enim eu turpis egestas. Gravida in
          fermentum et sollicitudin ac orci phasellus. Scelerisque viverra
          mauris in aliquam sem fringilla ut. Lorem ipsum dolor sit amet
          consectetur adipiscing elit ut aliquam. Turpis nunc eget lorem dolor
          sed viverra. Imperdiet massa tincidunt nunc pulvinar sapien et ligula.
          Elementum integer enim neque volutpat ac tincidunt vitae. Erat
          pellentesque adipiscing commodo elit at.
        </p>
      </div>
      <FooterBottom />
    </div>
  );
}

export default About;
