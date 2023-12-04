<script>
import NavBar from '../components/NavBar.vue';
import Main from '../components/Main.vue';
import Header from '../components/Header.vue';
import Projects from '../components/Projects.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    NavBar,
    Main,
    Header,
    Projects,
    Footer
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<template>
  <div class="home">
    <NavBar @scrollToSection="scrollToSection" />
    <Main />
    <br><br><br><br><br><br><br><br>
    <div id="blog-section"><Header /></div>
    <br>
    <div id="works-section"><Projects /></div>
    <div id="contact-section"><Footer /></div>
  </div>
</template>

<style scoped>

</style>
