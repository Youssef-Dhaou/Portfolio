import React from "react";
import "./testimonials.css";
import cCertif from "../../assets/cCertif.PNG";
import certifGomycode from "../../assets/certifGomycode.PNG";
import englishCertif from "../../assets/englishCertif.jpg";
import pythonCertif from "../../assets/pythonCertif.jpg";
import cPlusCertif from "../../assets/cPlusCertif.PNG";

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const Testimonials = () => {



  const data = [{
    avatar:certifGomycode, 
    name: "GoMyCode HackerSpace Gafsa", 
    review:`Full-Stack Js Development`
  },

 { avatar:pythonCertif, 
    name: "Udemy", 
    review:`The python programming A-Z definitive diploma in 2021`
  },

  {avatar:cCertif, 
    name: "University Of California SANTA CRUZ", 
    review:`C for Everyone: Programming Fundamentals`
  },

  {  avatar:cPlusCertif, 
  name: "SoloLearn", 
  review:`C++ Full course Certificate`
},
{  avatar:englishCertif, 
  name: "Udemy", 
  review:`English Grammar Certificate`
},]
  return (
    <section id="certification">
      <h5>Look at my achivements</h5>
      <h2>Certifications</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
  >
      { data.map(({avatar, name, review}, index)=>{  
        return(

          <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="Avatar One" />
          </div>
          <h5 className="client__name">{name}</h5>
            <small className="client__review">
             {review}
            </small>
        </SwiperSlide>
        )
      })}

      
      </Swiper>
    </section>
  );
};

export default Testimonials;
