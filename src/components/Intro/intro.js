import React from "react";
import btnImg from "../../assets/hireme.png";
import './intro.css';
import bg from "../../assets/555.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">I'm <span className="introName">Addton</span><br /> Web developer</span> 
        <p className="introPara">I am a skilled web developer with exprience in creating<br/>Examples of web developer skills</p>
        <Link><button className="btn"><img src={btnImg}  alt="Hire Me"/> Hire me</button></Link>
        
      </div>
      
      <img src={bg} alt="Profile" className="bg"/>

    </section>
  );
}

export default Intro;
