<template>
    <section id="portfolio" class="works">
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
</template>

<style scoped>
section{
  min-height: 100vh;
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