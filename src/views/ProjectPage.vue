<script>
import projects from '../projects'
import Footer from '../components/Footer.vue';

export default {
    components:{
        Footer,
    },
    data() {
        return {
        project: null,
        };
    },
    created(){
        const projectId = this.$route.params.id;
        this.project = projects[projectId - 1];
    },
    methods:{
        navigateToHome() {
          this.$router.push('/');
        },
    }
};
</script>

<template>
 <div>
    <div class="navbar-brand">
        <router-link to="/" class="navbar-brand" @click="navigateToHome"><h2>abbbrr</h2></router-link>
    </div>
    <div class="container">
        <h1>{{ project.name }}</h1>
        <div class="center-content">
            <div class="image-grid">
                <div v-for="(image, index) in project.imageSrc" :key="index" class="image-item">
                     <img :src="`/${image}`"  alt="Project Image">
                </div>
            </div>
        </div>
        <p>{{ project.textValue }}</p>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.navbar-brand{
  color: #000;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  text-decoration: none;
  margin: 10px;
  margin-left: 20px;
}

.center-content {
  display: flex;
  justify-content: center; /* Центрируем содержимое по горизонтали */
  align-items: center; /* Центрируем содержимое по вертикали */
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 30em); 
  gap: 16px; 
}

.image-item {
  width: 100%;
  margin-bottom: 16px; 
}
.image-item img{
    width: 430px;
    height: 480px;
    border-radius: 10px;
}

.container{
    text-align: center;
    align-items: center;
    justify-content: center;
}
.container h1{
    font-family: Arial, Helvetica, sans-serif;
    color: #142850;
    font-size:xx-large;
}
.container p{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    max-width: 900px; 
    margin: 0 auto; 
    margin-top: 30px;
}
@media screen and (max-width: 768px) {
  .image-grid {
    grid-template-columns: repeat(1, 1fr); 
  }

  .container p {
    margin-left: 0; 
    max-width: 500px; 
    margin: 0 auto; 
    font-size:medium;
  }
}
</style>