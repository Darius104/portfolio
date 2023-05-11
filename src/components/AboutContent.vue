<template>
    <div id="about" class="container secondContent">
        <div class="row">
            <div data-aos="zoom-in" data-aos-delay="100" class="col-lg-6 col-md-12 col-sm-12 aboutImage">
                <!-- Style from HomeContent cuz is not scoped -->
                <img src="../assets/Bitmoji.png" alt="" class="vert-move">
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" class="col-lg-6 col-md-12 col-sm-12 aboutContent">
                <div v-for="(el, index) in elements" :key="index">
                    <h2>{{ el.title }} <span style="color: #01eeff">{{ el.separateText }}</span></h2>
                    <h3>{{ el.subTitle }}</h3>
                    <p>{{ el.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "AboutContent",
    props: {
        elements: Array
    }
}
</script>

<style>
.secondContent{
    padding-top: 100px;
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
}
img{
    width: 100%;
    max-width: 70%;
}
.aboutImage{
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-bottom: 50px; */
    
}
.aboutContent h2{
    font-size: 40px;
    font-weight: bold;
    padding-top: 50px;
}
.aboutContent p {
    font-size: 20px;
    margin-top: 30px;
}
.aboutContent{
    align-items: center;
}
</style>