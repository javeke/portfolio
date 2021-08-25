<template>
  <main>
    <section class="greeting">
      <p class="main-greeting">Hi!<span class="emoji">🙂</span> I'm</p>
      <p class="main-name"> Javier Bryan</p>
      <p><a class="link-warning" href="#portfolio">Checkout my portfolio<span class="animated-left text-warning"> <i class="bi bi-chevron-double-right animated-left-arrow"></i> <i class="bi bi-chevron-double-right animated-left-arrow delay1"></i></span></a> </p>
    </section>
    <section id="about" class="description">
      <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
      <div class="container description-container">
        <div class="row">
          <div class="col">
            <div class="intro-container"><h3 class="intro">About</h3></div>
          </div>
        </div>
        <div class="row description-row justify-content-center">
          <div class="col-lg-6 col-sm-12 image-col">
            <img data-aos="zoom-in" data-aos-easing="ease-in-out-back" data-aos-duration="2500"  src="../assets/profile.jpg" alt="body-picture" class="body-picture">
          </div>
          <div class="col-lg-6 col-sm-12 description-col">
            <div data-aos="zoom-in" data-aos-easing="ease-in-out-back" data-aos-duration="2500" class="description-col-container">
              <p>An aspiring robotics engineer and software developer.👨‍💻</p>
              <p>I am a Chancellorite🦁 and Manchester United⚽ fan who has a passion for computer systems development. I believe in bringing our
                most creative and imaginative thoughts into reality as I do believe knowledge is an omnipotent tool when placed in the right hands.
                I try my best to learn something new everday as I do not believe it's possible to learn it all at once.
              </p>
              <!-- <p><a class="resume-link" href="#">Check out my resume</a></p> -->
              <p id="contact" class="mt-5">Contact me here!</p>
              <div class="contacts">
                <p><span>Email <i class="bi bi-mailbox"></i></span> : <a class="link-warning" href="mailto: javierbryan11@gmail.com">javierbryan11@gmail.com</a> </p>
                <p><span>Telegram <i class="bi bi-telegram"></i></span> : <a class="link-warning" href="https://t.me/javiii_don"> @javiii_don</a></p>
              </div>
              <div class="social-icons">
                <button type="button" class="btn btn-warning btn-sm"> <a class="text-dark" href="https://www.github.com/javeke"> <i class="bi-github"></i> </a></button>
                <button type="button" class="btn btn-warning btn-sm"> <a class="text-dark" href="https://www.instagram.com/javiertjbryan"> <i class="bi bi-instagram"> </i></a> </button>
                <button type="button" class="btn btn-warning btn-sm"> <a class="text-dark" href="https://www.twitter.com/javiii_don"> <i class="bi bi-twitter"> </i></a> </button>
                <button type="button" class="btn btn-warning btn-sm"> <a class="text-dark" href="https://www.linkedin.com/in/javier-bryan-b06510131"> <i class="bi bi-linkedin"> </i></a> </button>
                <button type="button" class="btn btn-warning btn-sm"> <a class="text-dark" href="https://www.facebook.com/javierbryan22"> <i class="bi bi-facebook"> </i></a> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="services-heading">
      <h5 data-aos="slide-left" data-aos-easing="ease-in-sine" class="what-i-do">What I do</h5>
      <h3 data-aos="slide-right" data-aos-easing="ease-in-sine" class="text-warning">My services</h3>
    </section>
    <section class="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-self-start">
            <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1500" data-aos-easing="ease-out-back" class="card bg-transparent text-warning mb-5">
              <div class="card-header">
                <i class="bi bi-cpu"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Embedded Systems </h5>
                <p class="card-text">Arduino Programming</p>
                <p class="card-text">AVR Microcontroller Programming</p>
                <p class="card-text">IoT Device Design and Prototyping</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-self-start">
            <div data-aos="zoom-out" data-aos-duration="1500" data-aos-easing="ease-out-back" class="card bg-transparent text-warning mb-5">
              <div class="card-header">
                <i class="bi bi-code-slash"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Frontend Development </h5>
                <p class="card-text">Flutter Apps Development </p>
                <p class="card-text">VueJs Development</p>
                <p class="card-text">ReactJS Development</p>
                <p class="card-text">Swing and AWT Development</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-self-start">
            <div data-aos="zoom-out" data-aos-duration="1500" data-aos-easing="ease-out-back" class="card bg-transparent text-warning mb-5">
              <div class="card-header">
                <i class="bi bi-server"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Backend Development </h5>
                <p class="card-text">Node + ExpressJs Development</p>
                <p class="card-text">Flask Development</p>
                <p class="card-text">MySQL Database</p>
                <p class="card-text">MongoDB</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-self-start">
            <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1500" data-aos-easing="ease-out-back" class="card bg-transparent text-warning mb-5">
              <div class="card-header">
                <i class="bi bi-tools"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Tools & Technologies </h5>
                <p class="card-text">Docker Containerizing</p>
                <p class="card-text">AutoCad Mechanical</p>
                <p class="card-text">Jupyter Notebook</p>
                <p class="card-text">Git VCS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PortfolioHeader/>
    <Portfolio/>
    <!-- <section class="contact">

    </section> -->
  </main>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue';
import PortfolioHeader from '@/components/PortfolioHeader.vue';

export default {
  name: 'Home',
  components:{
    Portfolio,
    PortfolioHeader
  }
}
</script>

<style scoped>

section{
  min-height: 100vh;
}

.greeting{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0px 8px;
}

.greeting .main-greeting{
  text-transform: uppercase;
  font-size: 24px;
  opacity: 0.5;
  letter-spacing: 4px;
  
}

.main-greeting span{
  display: inline-block;
  animation: gyro 2s infinite;
}

@keyframes gyro {
  from{
    transform: rotate3d(0,1,0, 0);
    -ms-transform: rotate3d(0,1,0, 0);
    -webkit-transform: rotate3d(0,1,0, 0);
  }
  to{
    transform: rotate3d(0,1,0,360deg);
    -ms-transform: rotate3d(0,1,0,360deg);
    -webkit-transform: rotate3d(0,1,0,360deg);
  }
}

.greeting .main-name{
  text-transform: uppercase;
  font-size: 64px;
  font-weight: bold;
  animation: stretch 1.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  background-color: #fbb034;
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes stretch {
  from{
    letter-spacing: 4px;
  }
  to {
    letter-spacing: 8px;
  }
}

@media screen and (max-width:600px) {
  .greeting .main-greeting{
    font-size: 1em;
  }
  .greeting .main-name{
    font-size: 2em;
  }
}

@media screen and (max-width:400px) {
  .greeting .main-greeting{
    font-size: 0.8em;
  }
  .greeting .main-name{
    font-size: 1.5em;
  }
}

.animated-left{
  position: relative;
  margin: 0 10px;
}
.animated-left-arrow{
  position: absolute;
  animation: left 1.4s linear infinite;
}

.delay1{
  animation-delay: 0.7s;
}


@keyframes left {
  0% { opacity:0; transform: translateX(-12px); }  
  25% { opacity:1; transform: translateX(-8px); } 
  75% { opacity:1; transform: translateX(8px); }  
  100% { opacity:0; transform: translateX(12px); }
}


.wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.wave svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 101px;
}

.wave .shape-fill {
    fill: #1B1A18;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .wave svg {
        width: calc(100% + 1.3px);
        height: 96px;
    }
}

.description{
  color: #ffc107;
  position: relative;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #212529;
}

.description .contacts p{
  margin-bottom: 8px;
  word-break: break-all;
}

.description .contacts span{
  color: #adb5bd;
}

.description .image-col{
  padding: 16px 12px;
}

.description .body-picture{
  max-width: 400px;
  width: 80%;
  height: auto;
  border-radius: 6px;  
}

.description-col{
  display: flex;
}

.description-col-container{
  margin: 0 auto;
  text-align: left;
  width: 80%;
}

.description .intro-container{
  position: relative;
}

.description .intro-container .intro{
  font-size: 4em;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: #d5c2643d;
  font-weight: bold;
}

.description .social-icons{
  margin-top: 16px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.description .social-icons .btn{
  border-radius: 50%;
}

@media screen and (max-width:600px) {
  .description .intro-container .intro{
    font-size: 2em;
    letter-spacing: 4px;
  }
}

@media screen and (max-width:400px) {
  .description .intro-container .intro{
    font-size: 1.5em;
    letter-spacing: 2px;
  }
}

.services-heading{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.services-heading .what-i-do{
  color: #d5c2646b;
  font-size: 1.5em;
  text-transform: uppercase;
}

.services-heading h3{
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 3em;
}

@media screen and (max-width: 600px) {
  .services-heading .what-i-do{
    font-size: 1em;
  }

  .services-heading h3{
    font-size: 2em;
  }
}

@media screen and (max-width: 400px) {
  .services-heading .what-i-do{
    font-size: 0.8em;
  }

  .services-heading h3{
    font-size: 1.5em;
  }
}

.services{
  padding: 16px 0;
  background-color: #212529;
  min-height: fit-content
}

.services .card{
  border: none;
}

.services .card .card-title{
  font-weight: bold;
}

.services .card .bi{
  font-size: 3em;
}

@media screen and (max-width:600px) {
  .greeting, .services-heading, .contact{
    background-image: url('../assets/background2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
