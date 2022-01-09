<template>
    <div class="header">
        <nav class="navbar-dark bg-dark">
            <div class="navbar-container">
                <button @click="showSidebar" class="menu-btn bg-dark" type="button" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="text-white bi bi-list"></i>
                </button>
                <h3 class="name">Javier Bryan</h3>
                <a class="navbar-brand logo" href="/">
                    <img src="../assets/logo.png" alt="personal-logo" class="d-inline-block align-text-top profile-pic">
                </a>
        
                <div class="navbar-nav navlinks">
                    <a class="nav-link" :class="{'active':activeLink==''}" aria-current="page" href="/">Home</a>
                    <a class="nav-link" :class="{'active':activeLink=='#about'}" href="#about">About</a>
                    <a class="nav-link" :class="{'active':activeLink=='#contact'}" href="#contact">Contact</a>
                    <a class="nav-link" :class="{'active':activeLink=='#portfolio'}" href="#portfolio">Portfolio</a>
                    <a class="nav-link" href="./Javier Bryan- Resume 2021.pdf" target="_blank">Resume</a>
                </div>
            </div>
        </nav>
        <div @click="closeSidebar" v-if="isSidebarShowing" class="sidebar-backdrop">
            <div @click.stop class="navbar-nav sidebar bg-dark">
                <div class="sidebar__logo">
                    <img src="../assets/logo.png" alt="personal-logo" class="d-inline-block align-text-top">
                </div>
                <a class="nav-link" :class="{'active':activeLink==''}" aria-current="page" href="/"><i class="bi bi-house"></i>Home</a>
                <a class="nav-link" :class="{'active':activeLink=='#about'}" href="#about"><i class="bi bi-file-earmark-person"></i>About</a>
                <a class="nav-link" :class="{'active':activeLink=='#contact'}" href="#contact"><i class="bi bi-phone"></i>Contact</a>
                <a class="nav-link" :class="{'active':activeLink=='#portfolio'}" href="#portfolio"><i class="bi bi-collection"></i>Portfolio</a>
                <a class="nav-link" href="./Javier Bryan- Resume 2021.pdf" target="_blank"><i class="bi bi-terminal"></i>Resume</a>
                <p class="sidebar__footer">Javier Bryan | 2021</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isSidebarShowing: false
        }
    },
    computed:{
        activeLink(){
            return this.$route.hash;
        }
    },
    methods:{
        showSidebar(){
            this.isSidebarShowing = true
        },
        closeSidebar(){
            this.isSidebarShowing = false;
        }
    }
}
</script>

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

.header{
    position: relative;
}

.navbar-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    padding: 0.7em 1em;
}

.menu-btn{
    border: 1px solid #777;
    border-radius: 8px;
    padding-inline: 0.7em;
}

.name{
    color: white;
    margin: 0;
    font-size: 1em;
}

.logo {
    margin-right: 0;
}

.navlinks {
    flex-direction: row;
    gap: 16px;
    display: none;
}

@media screen and (min-width:600px) {
    .menu-btn {
        display: none;
    }

    .navbar-container{
        flex-direction: row-reverse;
        justify-content: start;
    }

    .logo {
        order: 1;
    }

    .name{
        order: 1;
        font-size: 1.2em;
    }

    .navlinks{
        display: inherit;
        margin-left: 2em;
    }
}

.sidebar-backdrop{
    position: fixed;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    top: 0;
    background: #0000007f;
}

.sidebar {
    display: flex;
    width: 230px;
    height: 100vh;
    animation: slide-in 0.4s ease-out;
}

@keyframes slide-in {
    0% {
        transform: translateX(-240px);
    }
    100% {
        transform: translateX(0px);
    }
}

.sidebar a {
    color: white;
}

.sidebar__logo > img{
    width: 200px;
    height: 200px;
}

.sidebar>.nav-link{
    display: flex;
    width: 100%;
    gap: 16px;
    box-sizing: border-box;
    padding-left: 2.5em;
}

.sidebar__footer{
    margin-top: auto;
    color: white;
    font-size: 12px;
}

</style>