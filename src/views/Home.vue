<template>
  <main>
    <section class="greeting">
      <p class="main-greeting">Hello!<span class="emoji">🙂</span> I'm</p>
      <p class="main-name"> Javier Bryan</p>
    </section>
    <section class="description">
      <div class="container description-container">
        <div class="row">
          <div class="col">
            <div class="intro-container fade show"><h3 class="intro">About</h3></div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-6 col-sm-12 image-col">
            <img src="../assets/profile.jpg" alt="body-picture" class="body-picture">
          </div>
          <div class="col-lg-6 col-sm-12 description-col">
            <p>An aspiring robotics engineer and software developer.👨‍💻</p>
            <p>I am a Chancellorite🦁 and Manchester United⚽ fan who has a passion for computer systems development. I believe in bringing our
              most creative and imaginative thoughts into reality as I do believe knowledge is an omnipotent tool when placed in the right hands.
              I try my best to learn something new everday as I do not believe it's possible to learn it all at once.
            </p>
            <!-- <p><a class="resume-link" href="#">Check out my resume</a></p> -->
            <p class="mt-5">Contact me here!</p>
            <div class="contacts">
              <p><span>Email <i class="bi bi-mailbox"></i></span> : <a class="link-warning" href="mailto: javierbryan11@gmail.com">javierbryan11@gmail.com</a> </p>
              <p><span>Telegram <i class="bi bi-telegram"></i></span> : <a class="link-warning" href="https://t.me/javiii_don"> @javiii_don</a></p>
            </div>
            <div class="social-icons btn-group">
              <button type="button" class="btn btn-warning btn-sm"> <a class="text-dark" href="https://www.github.com/javeke"> <i class="bi-github"></i> </a></button>
              <button type="button" class="btn btn-warning btn-sm"> <a class="text-dark" href="https://www.instagram.com/javiertjbryan"> <i class="bi bi-instagram"> </i></a> </button>
              <button type="button" class="btn btn-warning btn-sm"> <a class="text-dark" href="https://www.twitter.com/javiii_don"> <i class="bi bi-twitter"> </i></a> </button>
              <button type="button" class="btn btn-warning btn-sm"> <a class="text-dark" href="https://www.linkedin.com/in/javier-bryan-b06510131"> <i class="bi bi-linkedin"> </i></a> </button>
              <button type="button" class="btn btn-warning btn-sm"> <a class="text-dark" href="https://www.facebook.com/javierbryan22"> <i class="bi bi-facebook"> </i></a> </button>
            </div> 
          </div>
        </div>
      </div>
    </section>
    <section class="services">
      <div class="container">
        <div class="row service-row align-items-center">
          <div class="col">
            <h5 class="what-i-do">What I do</h5>
            <h3 class="text-warning">My services</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-self-start">
            <div class="card bg-transparent text-warning mb-5">
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
            <div class="card bg-transparent text-warning mb-5">
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
            <div class="card bg-transparent text-warning mb-5">
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
            <div class="card bg-transparent text-warning mb-5">
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
  </main>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>

.greeting{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0px 8px;
  min-height: 100vh;
}

section .main-greeting{
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

section .main-name{
  text-transform: uppercase;
  font-size: 64px;
  font-weight: bold;
  letter-spacing: 8px;
}

@media screen and (max-width:600px) {
  section .main-greeting{
    font-size: 1em;
  }
  section .main-name{
    font-size: 2em;
  }
}

.description{
  color: #ffc107;
  position: relative;
  padding: 16px 8px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #212529b6;
  backdrop-filter: blur(4px);
}

.description .contacts p{
  margin-bottom: 8px;
}

.description .contacts span{
  color: #adb5bd;
}

.description .image-col{
  padding: 16px 0px;
}

.description .body-picture{
  max-width: 400px;
  width: 80%;
  height: auto;
  border-radius: 6px;  
}

.description .intro-container{
  position: relative;
}

.description .intro-container .intro{
  font-size: 6em;
  text-transform: uppercase;
  letter-spacing: 6px;
  color: #d5c2643d;
  font-weight: bold;
}

.description .social-icons{
  margin-top: 16px;
}

@media screen and (max-width:600px) {
  .description .intro-container .intro{
    font-size: 3.5em;
    letter-spacing: 4px;
  }
}

@media screen  and (min-width:1000px){
  .description-col{
    text-align: left;
  }
}

.services{
  padding: 16px 0;
}

.services .service-row{
  min-height: 50vh;
}

.services .what-i-do{
  color: #d5c2646b;
  font-size: 1em;
  text-transform: uppercase;
}

.services h3{
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 2em;
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
</style>
