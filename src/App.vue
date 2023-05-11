<template>
  <div id="app">
    <Header />
    <HomeContent :elements="homeData"/>
    <AboutContent :elements="aboutData"/>
    <ServicesContent :elements="servicesData"/>
    <PortfolioContent :elements="portfoliosData"/>
    <ContactContent />
    <a href="#home">
      <div class="back">
        <i class="fa-solid fa-arrow-up"></i>
      </div>
    </a>
  </div>
</template>

<script>
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  
  import Header from './components/Header.vue';
  import HomeContent from './components/HomeContent.vue';
  import AboutContent from './components/AboutContent.vue'
  import ServicesContent from './components/ServicesContent.vue';
  import PortfolioContent from './components/PortfolioContent.vue';
  import ContactContent from './components/ContactContent.vue';

  import delive from '@/assets/DeliveRoo.png';
  import phone from '@/assets/mobileProject2.png';
  import avada from '@/assets/avadafitness.png';


  export default {
      name: "App",
      components: {
        Header,
        HomeContent,
        AboutContent,
        ServicesContent,
        PortfolioContent,
        ContactContent,
      },

      data: function() {
        return {
          homeData: [
            {
              home: "I'm a Software developer 'Web and Mobile' and I love what I do, I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work for the company.",
            }
          ],
          aboutData: [
            {
              title: "About",
              separateText: "Me",
              subTitle: "Software Developer",
              content: "I recently moved to Belgium and i would like to integrate my self in to this country, so these are some words that can describe me: I am a Software Developer with a good track record in designing websites and mobile applications also networking and managing databases. I have good technical skills and as well as good interpersonal skills, enabling me to interact with some clients. I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion in life is using my technical know-how to benefit other people and organizations."
            }
          ],
          servicesData: [
            {
              title: 'Front-End Developer',
              content: "Front-End Developer with the knowledge of the following programming languages: HTML, CSS, JavaScript, Vue.js. Knowledge of the general code base and reusable code components. Work experience building single-page application using interface frameworks such as Vue and a little bit of ReactJS. Solid understanding of package and dependency management, git workflows and OOP programming"
            },
            {
              title: 'Back-End Developer',
              content: "Back-End Developer with the knowledge of the following programming languages: PHP, SQL, MySql, FireBase, NodeJs, Laravel. Knowledge of the latest web development trends and technology. Knowledge of APIs, debugging techniques. Should pay attention to the website's security and efficiency. Have to collaborate with the front-end development team to achieve goals"
            },
            {
              title: 'Mobile Software Developer',
              content: "Mobile Software Developer with the knowledge of the following programming languages: Dart and Flutter framework. Experience with profiling and debugging mobile applications, Familiarity with the JSON format, Understanding mobile app design guidelines on each platform and being aware of their differences. Ensuring the best performance and user experience of the application"
            }
          ],
          portfoliosData: [
            {
              url: "https://www.linkedin.com/feed/update/urn:li:activity:7026901966672805888/",
              image: delive,
              content: "DeliveBoo is a replica of the Deliveroo website, the technologies used for this project are the following; html, css, Bootstrap, JavaScript with the help of Vue.js framework, php with the help of Laravel framework, sql with phpMyAdmin tool management. ",
              subContent: "Click and take a look"
            },
            {
              url: "https://www.linkedin.com/feed/update/urn:li:activity:7026219420389679105/",
              image: phone,
              content: "For the project management we used gitlab working on multiple branches, the project was developed both remotely and onsite. To view the code that I made 'front-end side' you can go to github where I created a repository called Flutter-app.",
              subContent: "Click and take a look"
            },
            {
              url: "https://github.com/Darius104/proj-html-vuejs",
              image: avada,
              content: "Avada Fitness project implemented using HTML, CSS and Vue.js ",
              subContent: "Click and take a look"
            }
          ]
        }
      },
      methods: {

      }
  }
</script>

<style>
body{
  color: white;
  position: relative;
}
.back{
  height: 60px;
  width: 60px;
  background-color: #1f232d;
  position: absolute;
  bottom: 120px;
  right: 50px;
  position: fixed;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: aqua;
}
.back:hover{
  box-shadow: 1px 1px 4px 1px rgba(0, 255, 255, 1);
}
@media only screen and (max-width: 992px){
    .back{
      display: none;
    }
}

</style>
