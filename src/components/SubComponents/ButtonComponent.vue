<template>
<a>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {{ title }}
</a>
</template>

<script>
export default {
    props: [
        'title',
    ]
}
</script>

<style scoped>
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
    transition-delay: 0.6s;
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