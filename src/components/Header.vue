<template>
    <header class="header">
        <div class="logo">
            <h2 style="color: white ">Portfolio</h2>
        </div>
        <div class="navigation">
            <input type="checkbox"
            class="toggle-menu">
            <div class="hamburger"></div>
            <ul class="menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
        </div>
    </header>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    name: "Header",
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background-color: #272c36;
}
header{
    position: relative;
    position: fixed;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1f232d;
    padding: 0 25px;
    transition: 0.3s;
    z-index: 100;
}
.navigation{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menu{
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    z-index: 1;
    transition: 0.5s;
    margin-bottom: 0;
}
.menu li{
    list-style-type: none;
}
.menu li a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 40px 25px;
    font-size: 18px;
    line-height: 1;
    transition: 0.3s;
    font-weight: bold;
}
.menu li a:hover{
    box-shadow: 0 -5px 0px #01eeff inset,
    500px 0 0 rgba(255, 255, 255, 0.03) inset;
    padding: 35px 25px 45px, 25px;
    color: #01eeff;
}
.hamburger{
    position: relative;
    width: 30px;
    height: 4px;
    background-color: #fff;
    border-radius: 10px;
    cursor: pointer;
    z-index: 2;
    transition: 0.3s;
}
.hamburger:before,
.hamburger:after{
    content: "";
    position: absolute;
    height: 4px;
    right: 0;
    background-color: #fff;
    border-radius: 10px;
    transition: 0.3s;
}
.hamburger:before{
    top: -10px;
    width: 20px;
}
.hamburger:after{
    top: 10px;
    width: 25px;
}
.toggle-menu{
    position: absolute;
    width: 30px;
    height: 100px;
    z-index: 3;
    cursor: pointer;
    opacity: 0;
}
.hamburger,
.toggle-menu{
    display: none;
}
.navigation input:checked ~ .hamburger{
    background-color: transparent;
}
.navigation input:checked ~ .hamburger:before{
    top: 0;
    transform: rotate(-45deg);
    width: 30px;
}
.navigation input:checked ~ .hamburger:after{
    top: 0;
    transform: rotate(45deg);
    width: 30px;
}
.navigation input:checked ~ .menu{
    right: 0;
    box-shadow: -20px 0 40px rgba(0, 0, 0, 0.3);
}
@media screen and (max-width: 992px){
    .hamburger,
    .toggle-menu{
        display: block;
    }
    .header{
        padding: 10px 20px;
    }
    .menu{
        justify-content: start;
        flex-direction: column;
        align-items: center;
        position: fixed;
        top: 0;
        right: -300px;
        background-color: #1f232d;
        width: 300px;
        height: 100%;
        padding-top: 65px;
    }
    .menu li{
        width: 100%;
    }
    .menu li a,
    .menu li a:hover{
        padding: 30px;
        font-size: 24px;
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.01) inset;
    }
    ul{
        padding-left: 0;
    }
}

</style>