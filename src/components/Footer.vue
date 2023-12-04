<script>
export default{
    name:"Footer",
    data(){
        return{
            linkMe: [
              {
                img: 'github.png',
                link: "https://github.com/abbbrr"
              },
              {
                img: 'insta.png',
                link: "https://www.instagram.com/abbbrr_/"
              },
              {
                img: 'gmail.png',
                link: "ruanablaikz45@gmail.com"
              }
            ]
        }
    }
}
</script>

<template>
    <footer>
       <div class="container">
          <div v-for="(link, index) in linkMe" :key="index" class="link">
            <a :href="link.link"><img :src="`/${link.img}`" alt="git"></a>
          </div>
        </div>
        <p>Copyright ©2023 All rights reserved</p>
    </footer>
</template>

<style scoped>
  footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px; /* Adjust the height as needed */
    margin: 30px;
    margin-top: 150px;
  }
  footer p{
    margin-right: 50px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
  }
  .container {
    text-align: center;
    display: flex;
    flex-wrap: nowrap;
  }
  .link{
    display: flex;
    flex-direction: row;
  }

  .container img {
    width: 50px;
    height: 50px;
    margin-right: 30px;
  }

  @media (max-width: 568px){
    footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px; /* Adjust the height as needed */
    margin: 30px;
    margin-top: 150px;
    margin-left: 15px;
  }
  }
</style>