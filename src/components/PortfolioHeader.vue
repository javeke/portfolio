<template>
    <section class="checkout">
        <!-- <div class="wave-2">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div> -->
        <h5>Portfolio</h5>
        <h3>Checkout a few of my projects</h3>
    </section>
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
    position: relative;
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
    font-size: 56px;
    font-weight: bold;
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
    font-size: 1.8em;
  }
}



@media screen and (max-width:400px) {
  .checkout h5{
    font-size: 0.8em;
  }
  .checkout h3{
    font-size: 1.3em;
  }
}

.wave-2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
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
</style>