import React from "react";
import "./Internship.css";
import YAZAKI from "../../assets/yazaki.jpg";
import STEG from "../../assets/steg.jpg";
import CQD from "../../assets/CQ&D.png";
import cpfmi from "../../assets/cpfmi.jpg";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";



const Internship = () => {
  return (
    <section id="internship">
      <h5> What I have</h5>
      <h2>Experience</h2>

      <div className="container exp__container">
        <div className="card-container">
          <span className="pro">Dec 2020 - Aout 2022 </span>
          <img className="round" src={CQD} alt="user" />
          <h3>C&QD PRESTATIONS Tunisia </h3>
          <h6>Quality Control Supervisor</h6>
          <p>
            <AiFillCheckCircle style={{ color: "green" }} /> Monitors and
            verifies the conformity of vehicle parts manufactured in accordance
            with the company's technical specifications.
          </p>
          <p>
            <AiFillCheckCircle style={{ color: "green" }} /> Return
            non-conforming components to the supplier for further examination.
          </p>
          <p>
            <AiFillCheckCircle style={{ color: "green" }} /> Inventory
            Management.
          </p>
          <div className="skills">
            <h6>Skills</h6>
            <ul>
              <li>Excel</li>
              <li>Problem solving</li>
              <li>Leadership</li>
              <li>Communication</li>
              <li>decision making</li>
              <li>measurements</li>
            </ul>
          </div>
        </div>

        <div className="card-container">
          <span className="pro">jan 2019- juin 2019</span>
          <img className="round" src={cpfmi} alt="user" />
          <h3>CPFMI Tunisia</h3>
          <h6>Engineering internship-end of study project</h6>
          <p>
            {" "}
            <strong>
              {" "}
              <AiFillCheckCircle style={{ color: "green" }} /> Development of
              driver assistance and monitoring system:{" "}
            </strong>
          </p>
          <p>
            {" "}
            <BsCheck /> obstacle detection system
          </p>
          <p>
            {" "}
            <BsCheck /> A system to keep vehicles from skidding on the lane;
          </p>
          <p>
            {" "}
            <BsCheck /> Facial recognition system;
          </p>
          <p>
            {" "}
            <BsCheck /> Drowsiness detection device.{" "}
          </p>
          <div className="skills">
            <h6>Skills</h6>
            <ul>
              <li>Embedded C</li>
              <li>ARDUINO</li>
              <li>Python</li>
              <li>Raspberry Pi</li>
              <li>SQL</li>
              <li>PCB</li>
            </ul>
          </div>
        </div>

        <div className="card-container">
          <span className="pro">July 2018 - August 2018</span>
          <img className="round" src={YAZAKI} alt="user" />
          <h3> YAZAKI GAFSA-Tunisia</h3>
          <h6>Summer internship- Technician</h6>
          <p>
            <AiFillCheckCircle style={{ color: "green" }} />I developed a system
            controlled by a microcontroller that assisted in the assembly of
            electrical cable accessories in accordance with customer
            specifications.
          </p>
      
          <div className="skills">
            <div>
              <h6>Skills</h6>
              <ul>
                <li>stripping</li>
                <li>crimpingt</li>
                <li>test</li>
                <li>Coding</li>
                <li>assembling</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card-container">
          <span className="pro">Feb 2016 - April 2016</span>
          <img
            className="round"
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="user"
          />
          <h3>District STEG Sousse</h3>
          <h6>Graduation end of study Internship</h6>
          <p> <AiFillCheckCircle style={{ color: "green" }}/>
            Construction of a temperature monitoring system in the driving
            system room.
          </p>
          <p>
          <AiFillCheckCircle style={{ color: "green" }}/>
            An alarm device that controls and monitors the operation of the
            room's existing equipments.
          </p>
          <div className="skills">

            <h6>Skills</h6>
            <ul>
              <li>PCB design</li>
              <li>Microcontroller</li>
              <li>Electronics Design</li>
              <li>Problem Solving</li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
