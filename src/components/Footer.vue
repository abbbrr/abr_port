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
        <div class="links">
          <div v-for="(link, index) in linkMe" :key="index" class="link">
            <a :href="link.link"><img :src="`/${link.img}`" alt="git"></a>
          </div>
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
    text-align: center;
    height: 100px; /* Adjust the height as needed */
    /* margin: 30px; */
    padding: 20px 0;
    margin-top: 150px;
  }
  footer p{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal; 
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .links{
    display: flex;
    justify-content: center;
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
      margin-left: 20px;
    }
    .container {
      text-align: center;
      display: flex;
      flex-wrap: nowrap;
      margin-left: 30px;
    }
    .link{
      display: flex;
      flex-direction: row;
    }
  }
</style>