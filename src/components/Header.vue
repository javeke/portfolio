<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="../assets/logo.png" alt="personal-logo" class="d-inline-block align-text-top profile-pic">
                Javier Bryan
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    <a class="nav-link" href="#about">About me</a>
                    <a class="nav-link" href="#contact">Contact</a>
                    <a class="nav-link" href="#portfolio">Portfolio</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>

.profile-pic{
    width: 25px;
    height: 25px;
    animation: spin 5s infinite linear;
}

@keyframes spin {
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
}

</style>