<template>
  <main>
    <section class="greeting">
      <p class="main-greeting">Hi!<span class="emoji">🙂</span> I'm</p>
      <vue-typed-js 
        :backSpeed="50" :showCursor="false"
        :loop="true" :typeSpeed="50" :backDelay="3000"
        :strings="['Javier Bryan','A Software Engineer', 'A Fullstack Developer']">
        <p class="typing main-name"></p>
      </vue-typed-js>
      <p><a style="color: var(--primary-color);" class="checkout-link" href="#portfolio"><span class="animated-down"> <i class="bi bi-chevron-double-down animated-down-arrow"></i> <i class="bi bi-chevron-double-down animated-down-arrow delay1"></i></span></a> </p>
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
            <img data-aos="zoom-in" data-aos-easing="ease-in-out-back" data-aos-duration="500"  src="../assets/logo/profile.jpg" alt="body-picture" class="body-picture">
          </div>
          <div class="col-lg-6 col-sm-12 description-col">
            <div data-aos="zoom-in" data-aos-easing="ease-in-out-back" data-aos-duration="500" class="description-col-container">
              <p>A software developer👨‍💻 and electronics hobbyist.</p>
              <p id="contact" >I have a passion for computer systems development and mechanical engineering. I believe in bringing our
                most creative and imaginative thoughts into reality as I view knowledge as an omnipotent tool when placed in the right hands.
                I try my best to learn something new every day as I do not believe it's possible to learn it all at once.
              </p>
              <a class="text-primary-color" href="./Javier Bryan- Resume 2023.pdf" target="_blank">Check out my resume</a>
              <p class="mt-3">Contact me here!</p>
              <div class="contacts">
                <p><span>Email <i class="bi bi-mailbox"></i></span> : <a class="text-primary-color" href="mailto: javierbryan11@gmail.com">javierbryan11@gmail.com</a> </p>
                <p><span>Telegram <i class="bi bi-telegram"></i></span> : <a class="text-primary-color" href="https://t.me/javiii_don"> @javiii_don</a></p>
              </div>
              <div class="social-icons">
                <button type="button" class="btn btn-sm"> <a class="text-primary-color" href="https://www.github.com/javeke"> <i class="bi-github"></i> </a></button>
                <button type="button" class="btn btn-sm"> <a class="text-primary-color" href="https://www.instagram.com/javiertjbryan"> <i class="bi bi-instagram"> </i></a> </button>
                <button type="button" class="btn btn-sm"> <a class="text-primary-color" href="https://www.twitter.com/javiii_don"> <i class="bi bi-twitter"> </i></a> </button>
                <button type="button" class="btn btn-sm"> <a class="text-primary-color" href="https://www.linkedin.com/in/javierbryan"> <i class="bi bi-linkedin"> </i></a> </button>
                <button type="button" class="btn btn-sm"> <a class="text-primary-color" href="https://www.facebook.com/javierbryan22"> <i class="bi bi-facebook"> </i></a> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="services-heading">
      <h5 data-aos="slide-left" data-aos-easing="ease-in-sine" class="what-i-do">What I do</h5>
      <h3 data-aos="slide-right" data-aos-easing="ease-in-sine" class="text-primary-color">My services</h3>
    </section>
    <section class="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-self-start">
            <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="500" data-aos-easing="ease-out-back" class="card bg-transparent text-primary-color mb-5">
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
            <div data-aos="zoom-out" data-aos-duration="500" data-aos-easing="ease-out-back" class="card bg-transparent text-primary-color mb-5">
              <div class="card-header">
                <i class="bi bi-code-slash"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Frontend Development </h5>
                <p class="card-text">Flutter Apps Development </p>
                <p class="card-text">VueJS Development</p>
                <p class="card-text">ReactJS Development</p>
                <p class="card-text">Angular Development</p>
                <p class="card-text">Swing and AWT Development</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-self-start">
            <div data-aos="zoom-out" data-aos-duration="500" data-aos-easing="ease-out-back" class="card bg-transparent text-primary-color mb-5">
              <div class="card-header">
                <i class="bi bi-hdd-stack"></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">Backend Development </h5>
                <p class="card-text">Node + ExpressJs Development</p>
                <p class="card-text">Flask Development</p>
                <p class="card-text">Spring Boot Development</p>
                <p class="card-text">MySQL Database</p>
                <p class="card-text">PostgreSQL Database</p>
                <p class="card-text">MongoDB</p>
                <p class="card-text">SQL Server</p> 
                <p class="card-text">Dotnet</p> 
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-self-start">
            <div data-aos="zoom-out" data-aos-delay="500" data-aos-duration="500" data-aos-easing="ease-out-back" class="card bg-transparent text-primary-color mb-5">
              <div class="card-header">
                <i class="bi bi-gear"></i>
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
    <ProjectsAnimation></ProjectsAnimation>
  </main>
</template>

<script>
import Portfolio from '@/components/Portfolio.vue';
import PortfolioHeader from '@/components/PortfolioHeader.vue';
import Name3DAnimation from '@/components/Name3DAnimation.vue';
import ProjectsAnimation from '@/components/ProjectsAnimation.vue';

export default {
  name: 'Home',
  components:{
    Portfolio,
    PortfolioHeader,
    // Name3DAnimation,
    ProjectsAnimation
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
  color: var(--primary-color);
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


.description{
  color: var(--primary-color);
  position: relative;
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--primary-bg-color);
}

.description .contacts p{
  margin-bottom: 8px;
  word-break: break-all;
}

.description .contacts span{
  color: var(--secondary-color);
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
  color: var(--primary-color);
  font-weight: bold;
}

.description .social-icons{
  margin-top: 16px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.description .social-icons .btn a{
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s;
}

.description .social-icons .btn a:hover {
  border-color: var(--tertiary-color);
  width: 36px;
  height: 36px;
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

.services-heading{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.services-heading .what-i-do{
  color: var(--secondary-color);
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
  background-color: var(--primary-bg-color);
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
    background-image: var(--primary-bg-image);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
