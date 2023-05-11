<template>
    <div id="home" class="container homeContainer">
        <div class="row">
            <div data-aos="fade-right" class="col-lg-6 col-md-12 col-sm-12 homeImage">
                <img src="../assets/DariusPhoto.png" alt="" class="vert-move">
            </div>
            <div data-aos="fade-left" class="col-lg-6 col-md-12 col-sm-12 homeContent">
                <h2>Hello, It's Me</h2>
                <h1>Darius Coman</h1>
                <h2>
                    I'm a 
                    <span style="color: #01eeff;" href="" class="typewrite" data-period="2000" data-type='[ "Software Developer", "Front-end Developer", "Back-end Developer", "Mobile Developer" ]'>
                        <span class="wrap"></span>
                    </span>
                </h2>
                <div class="icons">
                    <div class="icon"><a class="ico" href="https://www.linkedin.com/in/darius-sebastian-coman/" target="_blank">
                        <i class="fa-brands fa-linkedin-in"></i></a></div>
                    <div class="icon"><a class="ico" href="https://github.com/Darius104?tab=repositories" target="_blank">
                        <i class="fa-brands fa-github"></i></a></div>
                </div>
                <p v-for="(el, index) in elements" :key="index">
                    {{el.home}}
                </p>
                <a style="text-decoration: none; text-align: center;"  href="/Darius-Coman-CV.pdf" download>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    CV Download
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name : "HomeContent",
    props: {
        elements: Array
    },
    methods: {
    }
}

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};
</script>

<style scoped>
.icons{
    color: #01eeff;
    margin: 50px 0;
}
.icon {
    margin-right: 25px;
    display: inline-block;
    cursor: pointer;
}
.ico{
    padding: 10px;
    font-size: 20px;
    border-radius: 30%;
}
.homeContainer{
    padding-top: 100px;
    min-height: 100vh;
    display: flex;
    align-items: center;
}
.homeContainer h1{
    font-size: 50px;
}
.homeContainer h2{
    font-size: 25px;
    display: inline-block;
}
.homeContainer p{
    margin-bottom: 50px;
    font-size: 20px;
}
.homeImage{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
}
.homeContent{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
img{
    max-width: 70%;
    width: 100%;
    border-radius: 30%;
    filter: brightness(120%);
    filter: contrast(120%);
    filter: drop-shadow(10px 10px 10px#01eeff);
}
img.vert-move {
    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
img.vert-move {
    -webkit-animation: mover 1s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}
a {
    position: relative;
    padding: 1em 1.8em;
    outline: none;
    border: 1px solid #01eeff;
    background: #212121;
    color: #01eeff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 15px;
    overflow: hidden;
    transition: 0.2s;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    width: 200px;
}

a:hover {
    box-shadow: 0 0 10px #01eeff, 0 0 25px #01eeff, 0 0 50px #01eeff;
}

a span {
    position: absolute;
}

a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #01eeff);
}

a:hover span:nth-child(1) {
    left: 100%;
    transition: 0.7s;
}

a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #01eeff);
}

a:hover span:nth-child(3) {
    right: 100%;
    transition: 0.7s;
    transition-delay: 0.35s;
}

a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #01eeff);
}

a:hover span:nth-child(2) {
    top: 100%;
    transition: 0.7s;
    transition-delay: 0.17s;
}

a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #01eeff);
}

a:hover span:nth-child(4) {
    bottom: 100%;
    transition: 0.7s;
    transition-delay: 0.52s;
}

a:active {
    background: #01eeff;
    background: linear-gradient(to top right, #01eeff, #01eeff);
    color: #bfbfbf;
    box-shadow: 0 0 8px #01eeff, 0 0 8px #01eeff, 0 0 8px #01eeff;
    transition: 0.1s;
}

a:active span:nth-child(1) 
span:nth-child(2) 
span:nth-child(2) 
span:nth-child(2) {
    transition: none;
    transition-delay: none;
}
</style>