<template>
    <div id="services" class="container">
        <div class="row thirdContent">
            <div class="row personal-container">
                <h2 data-aos="zoom-in" data-aos-delay="100" id="servicesH2">Services</h2>
                <div data-aos="zoom-in" data-aos-delay="100" v-for="(el, index) in elements" :key="index" class="col-lg-3 col-md-12 personal-card card1">
                    <h2>{{ el.title }}</h2>
                    <h2 v-if="index == 0" style="color: #01eeff;"><i class="fa-solid fa-pencil"></i></h2>
                    <h2 v-if="index == 1" style="color: #01eeff;"><i class="fa-solid fa-code"></i></h2>
                    <h2 v-if="index == 2" style="color: #01eeff;"><i class="fa-solid fa-mobile"></i></h2>
                    <p>{{ el.content }}</p>
                </div>

                <div data-aos="zoom-in" data-aos-delay="100" v-for="(el, index) in elements" :key="index" class="col-md-12 personal-card card2">
                    <h2>{{ el.title }}</h2>
                    <h2 v-if="index == 0" style="color: #01eeff;"><i class="fa-solid fa-pencil"></i></h2>
                    <h2 v-if="index == 1" style="color: #01eeff;"><i class="fa-solid fa-code"></i></h2>
                    <h2 v-if="index == 2" style="color: #01eeff;"><i class="fa-solid fa-mobile"></i></h2>
                    <p>{{ el.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "ServicesContent",
    props:{
        elements: Array
    }
}
</script>

<style scoped>
.thirdContent{
    padding-top: 100px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.personal-container{
    display: flex;
    justify-content: space-around;
}
#servicesH2{
    text-align: center; 
    color: #01eeff; 
    font-weight: bold; 
    margin-bottom: 50px;
    padding: 0;
}
.personal-card{
    background-color: #1f232d;
    border-radius: 20px;
    padding: 30px;
    margin-bottom: 50px;
    text-align: center;
}

.personal-card p{
    text-align: center;
}
@media only screen and (max-width: 1199px) {
  .card1{
    display: none;
  }
  .card2{
    display: block;
  }
}
@media only screen and (min-width: 1200px) {
  .card1{
    display: block;
  }
  .card2{
    display: none;
  }
}
</style>