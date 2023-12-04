<script>
export default{
    name:"Header",

};
</script>

<template>
    <header>
        <div class="container">
            <div class="first_card">
                <h2>Создание приложений с нуля</h2>
                <div class="data_text">
                    <span class="date">12 Sep 2023</span>
                    <span class="separator"> | </span>
                    <span class="tools">Xcode, Swift, SwiftUI</span>
                </div>
                <p> Мои навыки включают в себя использование инструментов Xcode, языка программирования Swift и фреймворка SwiftUI для создания современных и интуитивно понятных мобильных приложений. </p>
            </div>
            <div class="second_card">
                <h2>Создание веб-приложений</h2>
                <div class="data_text">
                    <span class="date">05 Oct 2023</span>
                    <span class="separator"> | </span>
                    <span class="tools">JavaScript, Vue</span>
                </div>
                <p>В дополнение к этим навыкам, я также разбираюсь в разработке фронтенда с использованием Vue.js. Создание динамичных интерфейсов с использованием современных подходов в разработке веб-приложений.</p>
            </div>
        </div>
    </header>
</template>

<style scoped>
header{
    background: #EDF7FA;
    width: auto;
    height: 396px;
    margin: auto;
}

.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 40vh;
}

.first_card{
    width: 458px;
    height: 295px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(187, 225, 250, 0.25);
    margin: 25px;
    text-align: left;
}

.second_card{
    width: 458px;
    height: 295px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(187, 225, 250, 0.25);
    margin: 25px;
}


.first_card h2{
    color: var(--Dark-Color, #21243D);
    font-family:Arial, Helvetica, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    line-height: 30px;
    width: 250px; 
    padding: 15px;
}

.first_card p{
    color: var(--Dark-Color, #21243D);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    padding: 10px;
    width: 360px; 
}

.data_text{
    display: flex;
}

.date,
.separator,
.tools {
  margin: 0 12px; /* Отступы между элементами */
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


.second_card h2{
    color: var(--Dark-Color, #21243D);
    font-family:Arial, Helvetica, sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    line-height: 30px;
    width: 200px; 
    padding: 15px;
}

.second_card p{
    color: var(--Dark-Color, #21243D);
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    padding: 10px;
    width: 360px; 
}

@media (max-width: 998px){

header{
    width: auto;
    height: 690px;
}

}

@media (max-width: 768px){

    header{
        width: auto;
        height: 690px;
    }
    
}

@media (max-width: 568px){

header{
    width: auto;
    height: 690px;
}
    .container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 40vh;
    }

    .first_card{
    width: 360px;
    height: 295px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 10px 0px rgba(187, 225, 250, 0.25);
    margin: 25px;
    text-align: left;
    }

    .second_card{
        width: 360px;
        height: 295px;
        flex-shrink: 0;
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 4px 10px 0px rgba(187, 225, 250, 0.25);
        margin: 25px;
    }
    .second_card p{
        width: 300px; 
        padding: 5px;
    }
}
</style>