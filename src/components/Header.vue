<template>
    <div class="header">
        <nav class="header__nav">
            <div class="navbar-container">
                <button @click="showSidebar" class="menu-btn" type="button" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="text-primary-color bi bi-list"></i>
                </button>
                <h3 class="name">Javier Bryan</h3>
                    
                <div class="navbar-nav navlinks">
                    <a class="nav-link" :class="{'active':activeLink==''}" aria-current="page" href="/">Home</a>
                    <a class="nav-link" :class="{'active':activeLink=='#about'}" href="#about">About</a>
                    <a class="nav-link" :class="{'active':activeLink=='#contact'}" href="#contact">Contact</a>
                    <a class="nav-link" :class="{'active':activeLink=='#portfolio'}" href="#portfolio">Portfolio</a>
                    <a class="nav-link" href="./Javier Bryan- Resume 2022.pdf" target="_blank">Resume</a>
                </div>

                <div id="theme-toggle">
                    <button class="theme-toggler" @click="toggleTheme">
                        <span :class="{'selected':!darkTheme}">
                            <i class="bi bi-sun-fill"></i>
                        </span>
                        <span :class="{'selected':darkTheme}">
                            <i class="bi bi-moon-stars-fill"></i>
                        </span>
                    </button>
                </div>

                <a class="navbar-brand logo" href="/">
                    <img src="../assets/logo.png" alt="personal-logo" class="d-inline-block align-text-top profile-pic">
                </a>
            </div>
        </nav>
        <div @click.stop="closeSidebar" v-if="isSidebarShowing" class="sidebar-backdrop">
            <div @click.stop class="navbar-nav sidebar">
                <div class="sidebar__logo">
                    <img src="../assets/logo.png" alt="personal-logo" class="d-inline-block align-text-top">
                </div>
                <a class="nav-link" @click.stop="closeSidebar" :class="{'active':activeLink==''}" aria-current="page" href="/"><i class="bi bi-house"></i>Home</a>
                <a class="nav-link" @click.stop="closeSidebar" :class="{'active':activeLink=='#about'}" href="#about"><i class="bi bi-file-earmark-person"></i>About</a>
                <a class="nav-link" @click.stop="closeSidebar" :class="{'active':activeLink=='#contact'}" href="#contact"><i class="bi bi-phone"></i>Contact</a>
                <a class="nav-link" @click.stop="closeSidebar" :class="{'active':activeLink=='#portfolio'}" href="#portfolio"><i class="bi bi-collection"></i>Portfolio</a>
                <a class="nav-link" @click.stop="closeSidebar" href="./Javier Bryan- Resume 2022.pdf" target="_blank"><i class="bi bi-terminal"></i>Resume</a>
                <p class="sidebar__footer">Javier Bryan | 2021</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isSidebarShowing: false,
            darkTheme:false
        }
    },
    mounted(){
        const storedTheme = localStorage.getItem('dark-theme');
        if (storedTheme){
            this.darkTheme = storedTheme === "true";
        }
        else {
            this.darkTheme = matchMedia('(prefers-color-scheme: dark)').matches;
        }

        this.$emit('themeChanged', this.darkTheme);
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
        },
        toggleTheme(){
            if(this.darkTheme){
                localStorage.setItem('dark-theme', false);
                this.darkTheme = false;
            }
            else{
                localStorage.setItem('dark-theme', true);
                this.darkTheme = true;
            }
            this.$emit('themeChanged', this.darkTheme);
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
    position: fixed;
    z-index: 1;
    top: 0;
    width: 100vw;
}

.header__nav {
    background-color: var(--primary-bg-color);
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
    background-color: var(--primary-bg-color);
}

.name{
    color: var(--primary-color);
    margin: 0;
    font-size: 1em;
    font-weight: bold;
}

.logo {
    margin-right: 0;
}

.navlinks {
    flex-direction: row;
    gap: 16px;
    display: none;
}

.nav-link{
    font-size: 14px;
}

a.nav-link {
    color: var(--secondary-color);
}

a.active {
    color: var(--primary-color);
    font-weight: bold;
}

a:hover{
    color: var(--main-color);
}

.theme-toggler {
    border: none;
    border-radius: 16px;
    cursor: pointer;

    color: var(--primary-color);
    background-color: rgb(168, 167, 167);

    display: flex;
    align-items: center;
    padding: 0.2em;
}

.theme-toggler span{
    padding-inline:0.3em;
    transition: all 0.2s ease-in-out;
}

.theme-toggler span:first-child{
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
}

.theme-toggler span:nth-child(2){
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
}

.theme-toggler span.selected{
    border-radius: 12px;
    background-color: rgb(99, 98, 98);
    padding-inline:0.5em;
    color: var(--main-color);
}

.sidebar-backdrop{
    height: 100vh;
    width: 100vw;
    background: #0000007f;
}

.sidebar {
    display: flex;
    width: 230px;
    min-height: calc(100vh - 70px);
    -webkit-animation: slide-in 0.4s ease-out;
    -moz-animation: slide-in 0.4s ease-out;
    animation: slide-in 0.4s ease-out;
    border-bottom-right-radius: 16px;
    background-color: var(--primary-bg-color);
    color: var(--primary-color);
}

@media screen and (min-width:600px) {
    .menu-btn {
        display: none;
    }

    .sidebar-backdrop {
        display: none;
    }

    .navbar-container{
        justify-content: start;
    }

    .logo {
        order: 1;
    }

    .name{
        order: 2;
        font-size: 1.2em;
    }

    .navlinks{
        order: 3;
        display: inherit;
        margin-left: 2em;
        flex: 1;
    }

    #theme-toggle {
        order: 4;
        padding-inline: 32px;
    }
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
    color: var(--secondary-color);
    transition: all 0.3s ease-in-out;
}

.sidebar__logo > img{
    width: 120px;
    height: 120px;
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
    color: var(--primary-color);
    font-size: 10px;
}

</style>