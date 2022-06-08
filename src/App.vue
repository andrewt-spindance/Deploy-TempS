<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="head">
       <!-- <img src="./assets/spindance.png" width="60" height="75"> -->
      <img src="./assets/2018.jpg" height="75">
       <h1 class = "title"> TempS </h1> 
        
      </div>
      <h3>Track Office Temperatures and Book Meetings All in One Place</h3>
      <hr>
      <nav>
        <RouterLink to="/">Page One</RouterLink>
        <RouterLink to="/page2">Page Two</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView class="comp"/>
</template>

<style>
@import '@/assets/base.css';
@import url('http://fonts.cdnfonts.com/css/akrobat');

#app {
  font-family: "Open Sans",Helvetica,Arial,sans-serif;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem;
  text-align: center;
  align-content: center;
  font-weight: normal;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.head {
  background-color: white;
  display:flex;
  align-items:center;
  justify-content:center;
}

.head img{
  padding-left: 10px;
  padding-bottom: 20px;
}

h1.title{
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  text-align: center;
  color: #AA1E28;
  font-family: "Akrobat",Helvetica,Arial,sans-serif;
}

h3, RouterLink {
  font-family: "Open Sans",Helvetica,Arial,sans-serif;
  font-size: 14px;
    font-weight: 700;
    color: #58595B;
    line-height: 1.3;
    text-transform: uppercase;
}

hr{
  margin-top: 5px;
  color: #AA1E28;
}

table.details{
  text-align: center;
  place-content: center;
  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: #AA1E28;
  transition: 0.4s;
}


.subhead, .details .subhead {
  font-family: "Akrobat",Helvetica,Arial,sans-serif;
  font-size: 50px;
  color: #58595B;
}
nav {
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;

}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display:contents;
    text-align: center;
    place-items: center;
    place-content: center;
  }

  #app {
    display:contents;
    padding: 0 2rem;
    place-items: center;
    place-content: center;
    text-align: center;
  }

  nav {
    text-align: center;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}

header.wrapper{
  place-items: center;
    place-content: center;
    text-align: center;
}



</style>