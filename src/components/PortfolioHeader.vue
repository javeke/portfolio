<template>
    <section class="checkout">
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

</style>