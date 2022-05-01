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
    color: var(--primary-color);
    padding: 0px 8px;
    position: relative;
}

@media screen and (max-width:600px) {
  .checkout{
    background-image: var(--primary-bg-image);;
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
</style>