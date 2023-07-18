/**
* Template Name: iPortfolio - v3.6.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
// import { Swiper, SwiperSlide } from 'swiper/react';

import Aos from "aos";
import Swiper from "swiper";


(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
      })
    }
  

  
    /**
     * Skills animation
     */
    // let skilsContent = select('.skills-content');
    // if (skilsContent) {
    //   new Waypoint({
    //     element: skilsContent,
    //     offset: '80%',
    //     handler: function(direction) {
    //       let progress = select('.progress .progress-bar', true);
    //       progress.forEach((el) => {
    //         el.style.width = el.getAttribute('aria-valuenow') + '%'
    //       });
    //     }
    //   })
    // }
  
    /**
     * Testimonials slider
     */
  
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
  
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      Aos.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })
    });
  
  })()