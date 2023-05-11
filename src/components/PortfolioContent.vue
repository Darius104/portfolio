<template>
    <div id="portfolio" class="container">
        <div class="forthContainer">
                <!-- DEMO 2-->
            <div class="py-5">
                <h3 data-aos="zoom-in-down" class="font-weight-bold mb-0" style="text-align: center; color: #01eeff; font-weight: bold;">Portfolio</h3>
                <div class="row">
                    <!-- DEMO 2 Item-->
                    <div data-aos="zoom-in" v-for="(el, index) in elements" :key="index" class="serviceCard col-lg-4 col-mb-6 col-sm-12">
                        <a :href="el.url" target="_blank">
                            <div class="hover hover-2 text-white rounded">
                                <div class="image-container">
                                    <img :src="el.image" :alt="el.subContent">
                                </div>
                                <div class="hover-overlay"></div>
                                <div class="hover-2-content px-5 py-4">
                                    <h3 class="hover-2-title text-uppercase font-weight-bold mb-0"> <span class="font-weight-light"></span></h3>
                                    <p class="hover-2-description text-uppercase mb-0">{{ el.content }}<span style="color: #01eeff;">{{ el.subContent }}</span></p>
                                </div>
                            </div>
                        </a>
                    </div>   
                </div>
                <h2 data-aos="zoom-in-up" style="text-align: center; margin-top: 50px; color: white; font-weight: bold;">Many others such as <span style="color: #01eeff">Netflix</span> or <span style="color: #01eeff">WhatsApp</span> repilicas on my <span style="color:aqua"><a href="https://github.com/Darius104?tab=repositories" target="_blank">GitHub</a></span> profile...</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "PortfolioContent",
    props: {
        elements: Array
    }
}
</script>

<style scoped>
.forthContainer{
    padding-top: 100px;
    min-height: 100vh;
    width: 100%;
    color: black;
}
.serviceCard{
    margin-top: 50px;
}
.image-container{
    height: 50px;
    width: 50%;
}
img{
    height: 100%;
    max-width: 100%;
    object-fit: cover;
}
.hover {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    padding-bottom: 60%;
}

.hover-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 90;
    transition: all 0.4s;
}

.hover img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
}

.hover-content {
    position: relative;
    z-index: 99;
}
/* DEMO 2 ============================== */
.hover-2 .hover-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
}

.hover-2-title {
    position: absolute;
    top: 50%;
    left: 0;
    text-align: center;
    width: 100%;
    z-index: 99;
    transition: all 0.3s;
}

.hover-2-description {
    width: 100%;
    position: absolute;
    bottom: 0;
    opacity: 0;
    left: 0;
    text-align: center;
    z-index: 99;
    transition: all 0.3s;
}

.hover-2:hover .hover-2-title {
    transform: translateY(-1.5rem);
}

.hover-2:hover .hover-2-description {
    bottom: 0.5rem;
    opacity: 1;
}

.hover-2:hover .hover-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6));
}
</style>