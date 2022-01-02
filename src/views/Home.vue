<template>
  <main>
    <section class="greeting">
      <!-- <div class="wave-greeting">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div> -->
      <p class="main-greeting">Hi!<span class="emoji">🙂</span> I'm</p>
      <vue-typed-js 
        :backSpeed="50" :showCursor="false"
        :loop="true" :typeSpeed="50" :backDelay="3000"
        :strings="['Javier Bryan','A Software Engineer', 'A Fullstack Developer']">
        <p class="typing main-name"></p>
      </vue-typed-js>
      <p><a style="color: white;" class="checkout-link" href="#portfolio"><span class="animated-down"> <i class="bi bi-chevron-double-down animated-down-arrow"></i> <i class="bi bi-chevron-double-down animated-down-arrow delay1"></i></span></a> </p>
      <!-- <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
    </div> -->
    </section>
    <section id="about" class="description">
      <div class="container description-container">
        <div class="row">
          <div class="col">
            <div class="intro-container mb-2"><h3 class="intro">About</h3></div>
          </div>
        </div>
        <div class="row description-row justify-content-center">
          <div class="col-lg-6 col-sm-12 image-col">
            <img data-aos="zoom-in" data-aos-easing="ease-in-out-back" data-aos-duration="1500"  src="../assets/profile.jpg" alt="body-picture" class="body-picture">
          </div>
          <div class="col-lg-6 col-sm-12 description-col">
            <div data-aos="zoom-in" data-aos-easing="ease-in-out-back" data-aos-duration="1500" class="description-col-container">
              <p>A software developer👨‍💻 and electronics hobbyist.</p>
              <p>I have a passion for computer systems development and mechanical engineering. I believe in bringing our
                most creative and imaginative thoughts into reality as I view knowledge as an omnipotent tool when placed in the right hands.
                I try my best to learn something new everday as I do not believe it's possible to learn it all at once.
              </p>
              <a class="text-white" href="./Javier Bryan- Resume 2021.pdf" target="_blank">Check out my resume</a>
              <p id="contact" class="mt-3">Contact me here!</p>
              <div class="contacts">
                <p><span>Email <i class="bi bi-mailbox"></i></span> : <a class="text-white" href="mailto: javierbryan11@gmail.com">javierbryan11@gmail.com</a> </p>
                <p><span>Telegram <i class="bi bi-telegram"></i></span> : <a class="text-white" href="https://t.me/javiii_don"> @javiii_don</a></p>
              </div>
              <div class="social-icons">
                <button type="button" class="btn text-white btn-sm"> <a class="text-dark" href="https://www.github.com/javeke"> <i class="bi-github"></i> </a></button>
                <button type="button" class="btn text-white btn-sm"> <a class="text-dark" href="https://www.instagram.com/javiertjbryan"> <i class="bi bi-instagram"> </i></a> </button>
                <button type="button" class="btn text-white btn-sm"> <a class="text-dark" href="https://www.twitter.com/javiii_don"> <i class="bi bi-twitter"> </i></a> </button>
                <button type="button" class="btn text-white btn-sm"> <a class="text-dark" href="https://www.linkedin.com/in/javier-bryan-b06510131"> <i class="bi bi-linkedin"> </i></a> </button>
                <button type="button" class="btn text-white btn-sm"> <a class="text-dark" href="https://www.facebook.com/javierbryan22"> <i class="bi bi-facebook"> </i></a> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="services-heading">
      <!-- <div class="wave-top">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div> -->
      <h5 data-aos="slide-left" data-aos-easing="ease-in-sine" class="what-i-do">What I do</h5>
      <h3 data-aos="slide-right" data-aos-easing="ease-in-sine" class="text-white">My services</h3>
      <!-- <div class="wave-2">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div> -->
    </section>
    <section class="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-self-start">
            <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1500" data-aos-easing="ease-out-back" class="card bg-transparent text-white mb-5">
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
            <div data-aos="zoom-out" data-aos-duration="1500" data-aos-easing="ease-out-back" class="card bg-transparent text-white mb-5">
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
            <div data-aos="zoom-out" data-aos-duration="1500" data-aos-easing="ease-out-back" class="card bg-transparent text-white mb-5">
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
            <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="1500" data-aos-easing="ease-out-back" class="card bg-transparent text-white mb-5">
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
  position: relative;
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

.checkout-link{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.animated-down{
  position: relative;
  margin: 10 0px;
}
.animated-down-arrow{
  position: absolute;
  animation: down 1.4s linear infinite;
}

.delay1{
  animation-delay: 0.7s;
}


@keyframes down {
  0% { opacity:0; transform: translateY(-12px); }  
  25% { opacity:1; transform: translateY(-8px); } 
  75% { opacity:1; transform: translateY(8px); }  
  100% { opacity:0; transform: translateY(12px); }
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
    width: calc(145% + 1.3px);
    height: 40px;
}

.wave .shape-fill {
    fill: #212529;
}

.wave-greeting {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave-greeting svg {
    position: relative;
    display: block;
    width: calc(143% + 1.3px);
    height: 79px;
}

.wave-greeting .shape-fill {
    fill: #212529;
}

/** For mobile devices **/
@media (max-width: 767px) {
    .wave svg {
        width: calc(100% + 1.3px);
        height: 70px;
    }
}

.description{
  color: white;
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
  width: 80%;
}

.description .intro-container{
  position: relative;
}

.description .intro-container .intro{
  font-size: 4em;
  text-transform: uppercase;
  letter-spacing: 6px;
  /* color: #d5c2643d; */
  color: white;
  font-weight: bold;
}

.description .social-icons{
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.description .social-icons .btn{
  border-radius: 50%;
}

@media screen and (min-width:800px) {
  .description-col-container{  
    text-align: left;
  }
  .description .social-icons{
    justify-content: flex-start;
  }
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

.wave-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave-top svg {
    position: relative;
    display: block;
    width: calc(105% + 1.3px);
    height: 64px;
}

.wave-top .shape-fill {
    fill: #212529;
}

.wave-2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.wave-2 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 130px;
}

.wave-2 .shape-fill {
    fill: #212529;
}

.services-heading{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
  min-height: fit-content;
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
