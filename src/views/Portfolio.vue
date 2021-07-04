<template>
    <main>
        <section class="checkout">
            <h5>Portfolio</h5>
            <h3>Checkout a few of my projects</h3>
        </section>
        <section class="works">
            <div class="container">
                <div class="row mb-5">
                    <div data-aos="fade-left" data-aos-easing="ease-in-out-back" class="col-md-6 col-sm-12 img-col d-flex justify-content-center">
                        <img src="../assets/rmps.png" alt="Placeholder for now">
                    </div>  
                    <div data-aos="fade-right" data-aos-easing="ease-in-out-back" class="col-md-6 col-sm-12 d-flex justify-content-center">
                        <div class="shake-card card text-warning">
                            <div class="card-header">Embedded Systems</div>
                            <div class="card-body">
                                <h5 class="card-title">Remote Patient Monitoring System</h5>
                                <p class="card-text">
                                    I worked on an embedded systems project with the aim that the device should be able to monitor the heart rate, temperate and position of a critically ill patient.
                                </p>
                                <div class="card-btn-group">
                                    <a href="https://github.com/javeke/raza-rmps" class="link-warning"> <!-- class="btn btn-warning btn-sm" -->
                                        View Source Code
                                    </a>
                                    <a href="https://raza-rpms.herokuapp.com/" class="link-warning"> <!-- class="btn btn-warning btn-sm" -->
                                        View project
                                    </a>
                                    <a href="http://jamaica-star.com/article/news/20200429/uwi-student-develops-healthcare-gadget" class="link-warning"> <!-- class="btn btn-warning btn-sm" -->
                                        Read news article
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div data-aos="zoom-in" data-aos-easing="ease-in-out-back" class="col-md-6 col-sm-12 img-col d-flex justify-content-center">
                        <img src="../assets/quito-black.jpg" alt="Placeholder for now">
                    </div>  
                    <div data-aos="zoom-in" data-aos-easing="ease-in-out-back" class="col-md-6 col-sm-12 d-flex justify-content-center">
                        <div class="shake-card card text-warning">
                            <div class="card-header">Mobile App Development</div>
                            <div class="card-body">
                                <h5 class="card-title">Quito Project (Talawa)</h5>
                                <p class="card-text">
                                    I contributed to an open source project management and scheduling app for churches owned by the Palisadoes Foundation for their annual Calico Challenge. 
                                </p>
                                <div class="card-btn-group">
                                    <a href="https://github.com/PalisadoesFoundation/talawa/tree/master" class="link-warning"> <!-- class="btn btn-warning btn-sm" -->
                                        View project
                                    </a>
                                    <a href="https://www.youtube.com/watch?v=gi54H3sGYic&ab_channel=ThePalisadoesFoundation" class="link-warning"> <!-- class="btn btn-warning btn-sm" -->
                                        View Demo Video
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div data-aos="zoom-in-up" data-aos-easing="ease-in-out-back" class="col-md-6 col-sm-12 img-col d-flex justify-content-center">
                        <img src="../assets/jami.jpg" alt="Placeholder for now">
                    </div>  
                    <div data-aos="zoom-in-up" data-aos-easing="ease-in-out-back" class="col-md-6 col-sm-12 d-flex justify-content-center">
                        <div class="shake-card card text-warning">
                            <div class="card-header">Mobile App Development</div>
                            <div class="card-body">
                                <h5 class="card-title">JAMi Project</h5>
                                <p class="card-text">
                                    I collaborated with a few friends and worked on a mobile app that would be able to allow users to post, report and track criminal activies they encoutered.
                                </p>
                                <div class="card-btn-group">
                                    <a href="https://github.com/javeke/jami" class="link-warning"> <!-- class="btn btn-warning btn-sm" -->
                                        View project
                                    </a>
                                    <a href="https://devpost.com/software/jami" class="link-warning"> <!-- class="btn btn-warning btn-sm" -->
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
section{
  min-height: 100vh;
}

.checkout{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0px 8px;
}

@media screen and (max-width:600px) {
  .checkout{
    background-image: url('../assets/background2.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.checkout h3{
    font-size: 64px;
    font-weight: bold;

    background-color: #fbb034;
    background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 74%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}


.checkout h5{
    text-transform: uppercase;
    font-size: 24px;
    opacity: 0.5;
    letter-spacing: 4px;
}

@media screen and (max-width:600px) {
  .checkout h5{
    font-size: 1em;
  }
  .checkout h3{
    font-size: 2em;
  }
}



@media screen and (max-width:400px) {
  .checkout h5{
    font-size: 0.8em;
  }
  .checkout h3{
    font-size: 1.5em;
  }
}

.works{
    color: #ffc107;
    padding: 16px 8px;
}


@media screen and (max-width: 600px) {
  .works{
    background-color: #212529;
    background-position: center;
    background-size: cover;
  }
}

.works .img-col{
    padding: 16px auto;
}

.works img{
    max-width: 400px;
    width: 80%;
    height: auto;
    border-radius: 6px; 
}

.works .card{
    border: none;
    width: 80%;
    background-color: #212529b6;
    background-image: linear-gradient(315deg, #17191ab6 0%, #212529b6 74%);
    padding: 12px;
    text-align: left;
}

.works .card .card-body{
    display: flex;
    flex-direction: column;
}

.works .card .card-header{
    font-weight: bold;
}

.works .card .card-title{
    font-size: 1.1em;
    font-weight: 600;
}

.works .card .card-subtitle{
    font-size: 0.8em;
}

.works .card .card-text{
    font-size: 1em;
}

.works .card-btn-group{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: auto 0;
}

/* animations */

.shake-card a:hover{
    animation: shake 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-out;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  20% { transform: translate(-1px, -2px) rotate(-1deg); }
  40% { transform: translate(2px, 1px) rotate(2deg);}
  60% { transform: translate(-2px, -2px) rotate(-2deg);}
  80% { transform: translate(1px, 2px) rotate(0deg);}
  100% { transform: translate(2px, -1px) rotate(1deg);}
}

</style>