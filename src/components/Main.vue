<script>

export default {
    name: "Main",
    data(){
        return{
           imagePath: 'men.PNG',
           burgerButton: 'menu.PNG',
        }
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="first_container">
                <div class="first_text">
                    <h1>Привет, я Рауан, <br> iOS и Front-end разработчик.</h1>
                </div>
                <div class="second_text">
                   <p>Стремясь к качественным решениям и инновационным проектам, я с увлечением занимаюсь созданием удивительных пользовательских интерфейсов и функциональности.</p>
                </div>
            </div>
            <div class="second_container">
                <img :src="`${imagePath}`"  alt="Vue logo" class="men_image">
            </div>
        </div>
    </main>
</template>

<style scoped>
main{
   margin: 40px; 
}

.container{
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    /* align-items: center; */
    margin: 25px;
}

.first_container{
    width: 522px;
    height: 66px;
    flex-shrink: 0;
}

.second_container{
    margin-top: 20px;
    width: 243px;
    height: 243px;
    flex-shrink: 0;
}

.second_container img{
  width: 300px;
  height: 290px; 
}


.first_text h1{
    color: var(--Dark-Color, #21243D);
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 35px;
    font-style: normal;
    font-weight: 700;
    line-height: 58px; /* 136.364% */
}

.second_text p{
    color: var(--Dark-Color, #21243D);
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 150px;
}

.burger_button{
    width: 30px;
    height: 30px;
    flex-shrink: 0;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column; /* Переключение на вертикальное расположение для узких экранов */
    margin: 20px;
    align-items: center;
  }
  .second_container {
    order: -1; /* This will move the second container (image) to the top */
    margin-bottom: 30px;
  }
  .second_container img{
    width: 350px;
    height: 260px; 
  }
  .men_image {
    max-width: 100%; /* Ensure the image doesn't exceed its parent container */
    height: auto; /* Maintain the image's aspect ratio */
  }
  .first_container{
    text-align: center;
    width: 340px; 
  }
  .first_text h1{
    color: var(--Dark-Color, #21243D);
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 125% */
  }
  .second_text p{
    color: var(--Dark-Color, #21243D);
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 390;
    line-height: normal;
  }

}
</style>