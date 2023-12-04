<script>
export default{
    name:"Projects",
    data(){
        return{
            projects: [
                {
                    name: "Stream Wave",
                    imageSrc: '/src/assets/app1.jpg',
                    year: 2023,
                    text: "Курсовая Работа",
                    textValue: "StreamWave - это многофункциональное приложение для прослушивания подкастов и просмотра видеоконтента. Пользователи могут наслаждаться подкастами различных жанров и создавать персонализированные списки воспроизведения.",
                    clickable: true,
                },
                {
                    name: "Geo City",
                    imageSrc: '/src/assets/app2.png',
                    year: 2023,
                    text: "Пэт Проект",
                    textValue: "GeoCity - это удобное приложение, позволяющее пользователям исследовать рестораны и аттракционы в различных городах мира.С помощью функции поиска пользователи могут легко находить интересные места, оценивать и оставлять отзывы.",
                    clickable: true,
                },
                {
                    name: "Train Local",
                    imageSrc: '/src/assets/app3.jpg',
                    year: 2023,
                    text: "В разработке..",
                    textValue: "",
                    clickable: false,
                }
            ]
        }
    }
};
</script>

<template>
    <main>
        <h3>Избранные работы</h3>
        <div v-for="(project, index) in projects" :key="index" class="container">
            <router-link  v-if="project.clickable" :to="{ name: 'project-page', params: { id: index + 1 } }" class="container-link">
                <div class="first_block">
                    <img :src="project.imageSrc" alt="Project">
                </div>
                <div class="second_block">
                    <h1>{{ project.name }}</h1>
                    <div class="colection">
                        <div class="circle">
                            <span class="date">{{ project.year }}</span>
                        </div>
                        <p>{{ project.text }}</p>
                    </div>
                    <p class="coment_text">{{ project.textValue }}</p>
                </div>
            </router-link>
            <div v-else class="container-link not-clickable">
                <div class="first_block">
                <img :src="project.imageSrc" alt="Project">
                </div>
                <div class="second_block">
                <h1>{{ project.name }}</h1>
                <div class="colection">
                    <div class="circle">
                    <span class="date">{{ project.year }}</span>
                    </div>
                    <p>{{ project.text }}</p>
                </div>
                <p class="coment_text">{{ project.textValue }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
    main{
        margin-left: 150px;
         margin-right: 150px;
    }

    main h3{
        color: var(--Dark-Color, #21243D);
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 22px;
        font-style: normal;
        font-weight: 200;
        line-height: 60px; /* 272.727% */
    }

    .container{
        display: flex;
        flex-wrap: wrap;
        /* flex-direction: row; */
        border-bottom: 1px solid #E0E0E0; /* Add this line to create a line under the container */
        margin-bottom: 40px;
    }

    .container-link{
        display: flex;
        flex-direction: row;
        text-decoration: none;
    }

    .first_block{
        flex: 0 ;
        text-align: right;
        margin: 20px;
    }

    .first_block img {
        width: 280px;
        height: 210px; 
        border-radius: 6px;
    }
    .circle {
        width: 62px;
        height: 25px;
        flex-shrink: 0;
        border-radius: 16px;
        background: #142850;
        margin-right: 10px;
        padding-top: 3px;
    }
    .circle span{
        color: #FFF;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        padding: 10px;
    }

    .colection{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .second_block{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 550px;
        margin-bottom: 14px;
    }

    .second_block h1{
        font-family: Arial, Helvetica, sans-serif;
        color: #142850;
    }

    .second_block p {
        color: var(--Dark-Color, #21243D);
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    @media (max-width: 768px){
        main{
            margin-left: 0px;
            margin-right: 0px;
        }

        main h3{
            text-align: center;
        }
        .container{
            /* display: flex;
            flex-direction: column; */
            align-items: center;
            text-align: left;
            width: 450px;
            margin: 0 auto;
            margin-bottom: 120px;
        }

        .container-link{
            display: flex;
            flex-direction: column;
            text-decoration: none;
        }
        .first_block{
            text-align: left;
            margin: 0px;
        }
        .second_block{
            width: 450px;
        }

        .first_block img{
            width: 450px;
            height: 330px; 
        }
        .coment_text{
            margin-bottom: 15px;
        }
    }

    @media (max-width: 998px){
        
        main{
            margin-left: 0px;
            margin-right: 0px;
        }

        main h3{
            text-align: center;
        }
        .container{
            /* display: flex;
            flex-direction: column; */
            align-items: center;
            text-align: left;
            width: 450px;
            margin: 0 auto;
            margin-bottom: 50px;
        }
        .first_block{
            text-align: left;
            margin: 0px;
        }
        .second_block{
            width: 450px;
        }

        .first_block img{
            width: 450px;
            height: 330px; 
        }
        .coment_text{
            margin-bottom: 15px;
        }
    }
</style>