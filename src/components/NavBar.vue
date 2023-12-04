<script>
// import { useRouter } from 'vue-router';
// import router from '../router'

export default {
    name: 'NavBar',
    data() {
        return {
            isNavOpen: false,
            isHidden: false,
            imgBurger: "/src/assets/menu.png",
        };
    },
    methods: {
        toggleNav() {
            this.isNavOpen = !this.isNavOpen;
            this.isHidden = !this.isHidden;
        },
        scrollToSection(sectionId) {
            this.$emit('scrollToSection', sectionId);
        },
        navigateToHome() {
          // Используйте метод push из this.$router для программного перехода
          this.$router.push('/');
        },
    },
    // components:{
    //   router
    // }
};
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-brand" @click="navigateToHome"><h2>abbbrr</h2></router-link>
      </div>

      <input type="checkbox" role="button" aria-label="Display the menu" class="menu" @click="toggleNav">

      <div class="navbar-collapse" :class="{ 'show': isNavOpen }">
        <ul class="navbar-nav">
          <li class="nav-item" @click="scrollToSection('blog-section')">
            <a class="nav-link" :class="{ 'show': isNavOpen }">Blog</a>
          </li>
          <li class="nav-item" @click="scrollToSection('works-section')">
            <a class="nav-link" :class="{ 'show': isNavOpen }">Works</a>
          </li>
          <li class="nav-item" @click="scrollToSection('contact-section')">
            <a class="nav-link" :class="{ 'show': isNavOpen }">Contact</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<style scoped>
.navbar-brand{
  text-decoration: none;
}
.navbar-brand h2{
  font-family: Arial, Helvetica, sans-serif;
}
nav{
  scroll-behavior: smooth;
}
.navbar {
  padding: 10px 0;
  justify-content: space-between;
  margin: 10px;
}

.container {
  display: flex;
  justify-content: space-between;
  /* align-items: flex-end; */
  flex-wrap: wrap;
}

.navbar-brand{
  color: #000;
  text-align: right;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
}


.navbar-collapse {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 20px;
  overflow: hidden;
  overflow: hidden;
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
}

.nav-item {
  margin-right: 30px;
  color: #000;
  text-align: right;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 100;
  line-height: normal;
  cursor: pointer;
}
.nav-link {
  text-decoration: none;
  color: #2f353b;
  font-weight: bold;
  transition: color 0.3s;
}
.nav-link:hover {
  color: #FF6464;
}
.burger-icon{
    display: none;
    transition: background-color 0.3s ease;
}
.burger_image {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5em; /* Adjust the size as needed */
}

.menu{
  display: none;
}

@media (max-width: 767px) {
  .container {
    flex-direction: column;
      align-items: flex-end;
  }
  .navbar-nav {
    flex-direction: column;
  }
  .nav-item {
    margin-right: 0;
    margin-bottom: 10px;
  }
  .navbar-collapse {
    align-items: flex-start;
    display: none;
    animation: appearAnimation 1s ease-out forwards;
  }

  @keyframes appearAnimation {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

  .menu {
  --s: 25px; /* control the size */
  --c: black; /* the color */
  display: block;
  height: var(--s);
  aspect-ratio: 1;
  border: none;
  padding: 0;
  border-inline: calc(var(--s)/2) solid #0000;
  box-sizing: content-box;
  --_g1: linear-gradient(var(--c) 20%,#0000 0 80%,var(--c) 0)
         no-repeat content-box border-box;
  --_g2: radial-gradient(circle closest-side at 50% 12.5%,var(--c) 95%,#0000)
         repeat-y content-box border-box;
  background:
    var(--_g2) left  var(--_p,0px) top,
    var(--_g1) left  calc(var(--s)/10 + var(--_p,0px)) top,
    var(--_g2) right var(--_p,0px) top,
    var(--_g1) right calc(var(--s)/10 + var(--_p,0px)) top;
  background-size:
    20% 80%,
    40% 100%;
  position: relative;
  clip-path: inset(0 25%);
  -webkit-mask: linear-gradient(90deg,#0000,#000 25% 75%,#0000);
  cursor: pointer;
  transition:
    background-position .3s var(--_s,.3s),
    clip-path 0s var(--_s,.6s);
  -webkit-appearance:none;
  -moz-appearance:none;
  appearance:none;
  margin-left: auto;
}
.menu:before,
.menu:after {
  content:"";
  position: absolute;
  border-radius: var(--s);
  inset: 40% 0;
  background: var(--c);
  transition: transform .3s calc(.3s - var(--_s,.3s));
}

.menu:checked {
  clip-path: inset(0);
  --_p: calc(-1*var(--s));
  --_s: 0s;
}
.menu:checked:before {
  transform: rotate(45deg);
}
.menu:checked:after {
  transform: rotate(-45deg);
}
.menu:focus-visible {
  clip-path: none;
  -webkit-mask: none;
  border: none;
  outline: 2px solid var(--c);
  outline-offset: 5px;
}
  .navbar-collapse.show {
    display: flex;
    flex-direction: row;
  }
  .nav-link.show{
    font-size: 30px;
  }
}

</style>