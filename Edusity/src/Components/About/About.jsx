import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ( {setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
          Edusity is an innovative online learning platform that provides a
          diverse range of educational resources, courses, and tools to learners
          worldwide. With a focus on accessibility, interactivity, and quality
          instruction, Edusity aims to empower individuals of all ages and
          backgrounds to achieve their learning goals and unlock their full
          potential.
        </p>
        <p>
          Edusity offers a comprehensive catalog of courses covering a wide
          array of subjects, including academic disciplines, professional
          development, vocational training, personal enrichment, and more. From
          language courses and coding bootcamps to business management seminars
          and creative arts workshops, learners can find courses tailored to
          their interests and aspirations.
        </p>
        <p>
          Through interactive multimedia content, live virtual classrooms,
          discussion forums, and hands-on activities, learners can immerse
          themselves in the learning process and interact with instructors and
          peers in real-time.
        </p>
      </div>
    </div>
  );
};

export default About;
