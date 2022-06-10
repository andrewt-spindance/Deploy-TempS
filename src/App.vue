<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<!-- <RouterLink to="/page2">Page Two</RouterLink> -->
<template>
 <head>
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <header>
    <div class="header">
      <div id="menu">
        <input type="checkbox" id="active">
        <label for="active" class="menu-btn"><span></span></label>
        <label for="active" class="close"></label>
        <div class="wrapper">
          <ul>
          <!-- <li class="menu-line">001 </li><hr> -->
          <li class="menu-item"><a href="#">Home</a></li>
          <!-- <li class="menu-line">002 </li><hr> -->
          <li class="menu-item"><a href="#">Current TempS</a></li>
          <!-- <li class="menu-line">003 </li><hr> -->
          <li class="menu-item"><a href="#">Calendar</a></li>
          </ul>
        </div>
      </div>
      
      <div class="head">
        <img id="logo" src="./assets/2018.jpg" height="75">
        <h1 class = "title"> TempS </h1> 
      </div>
    </div>
  </header>

  <RouterView class="comp"/>
</template>


<style>
@import '@/assets/base.css';
@import url('http://fonts.cdnfonts.com/css/akrobat');

 body{
  padding: 1rem;
}

 #app{
  font-family: "Open Sans",Helvetica,Arial,sans-serif;
  max-width: 1280px;
}

.head {
  display: flex;
  font-family: "Akrobat",Helvetica,Arial,sans-serif;
  margin-left:70px;
}

#logo{
  width: 30px;
  height: 25px;
  margin-top: 13px;
}

.wrapper{
  position: fixed;
  top: 0;
  left: -100%;
  /* right: -100%; */
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, #450a0c, #aa1e28);
  transition: all 0.6s ease-in-out;
  z-index: 3;
}

#active:checked ~ .wrapper{
  left: 0;
  /* right:0; */
}

.menu-btn{
  position: absolute;
  z-index: 4;
  /* right: 20px; */
  left: 20px;
  top: 00px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin-top: 23px
}

.menu-btn span,
.menu-btn:before,
.menu-btn:after{
	content: "";
	position: absolute;
	top: calc(50% - 1px);
	left: 30%;
	width: 40%;
	border-bottom: 2px solid #000;
	transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.menu-btn:before{
  transform: translateY(-8px);
}

.menu-btn:after{
  transform: translateY(8px);
}

.close {
	z-index: 1;
	width: 100%;
	height: 100%;
	pointer-events: none;
	transition: background .6s;
}

/* closing animation */
#active:checked + .menu-btn span {
	transform: scaleX(0);
}

#active:checked + .menu-btn:before {
	transform: rotate(45deg);
  border-color: #fff;
}

#active:checked + .menu-btn:after {
	transform: rotate(-45deg);
  border-color: #fff;
}

.menu-line{
  color: white;
}

.wrapper ul{
  position: absolute;
  top: 60%;
  left: 14%;
  height: 80%;
  transform: translate(-50%, -50%);
  list-style: none;
  /* text-align: center; */
}

.wrapper ul li{
  height: 20%;
  margin: 30px 0;
}

.wrapper ul li a{
  text-decoration: none;
  font-size: 30px;
  font-weight: 500;
  padding: 5px 30px;
  color: #fff;
  border-radius: 50px;
  /* position: absolute; */
  line-height: 50px;
  margin: 5px 30px;
  opacity: 0;
  transition: all 0.3s ease;
  transition: transform .6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.wrapper ul li a:after{
  position: absolute;
  content: "";
  background: #fff;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 50px;
  transform: scaleY(0);
  z-index: -1;
  transition: transform 0.3s ease;
}

.wrapper ul li a:hover:after{
  transform: scaleY(1);
}

.wrapper ul li a:hover{
  color: #e81a1a;
}

input[type="checkbox"]{
  display: none;
}

.content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  text-align: center;
  width: 100%;
  color: #202020;
}

.content .title{
  font-size: 40px;
  font-weight: 700;
}

.content p{
  font-size: 35px;
  font-weight: 600;
}

#active:checked ~ .wrapper ul li a{
  opacity: 1;
}

.wrapper ul li a{
  transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translateX(100px);
}

#active:checked ~ .wrapper ul li a{
	transform: none;
	transition-timing-function: ease, cubic-bezier(.1,1.3,.3,1); /* easeOutBackを緩めた感じ */
  transition-delay: .6s;
  transform: translateX(-100px);
}

#topline {
  text-align: left;
  margin-top: 20px;
  /* margin-left: 30px; */
  font-size: 14px;
  font-weight: 700;
  color: #58595B;
  line-height: 1.3;
  text-transform: uppercase;
}

.container{
  width: 100%;
  height: 100%;
  position: relative;
  margin: 20px;
}

.circles{
  position: absolute;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  z-index: 2;
  width: 100%;
  height: 100%;
}

.flip-card {
  border-radius: 50%;
  background-color: transparent;
  width: 220px;
  height: 220px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
  font-family: "Akrobat",Helvetica,Arial,sans-serif;
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 50%;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: white;
  border: solid 12px rgba(209, 211, 212, .5);
  color: black;
}

.flip-card-inner .text, .flip-card-back .text{
  margin-top: 55px;
  font-size: calc(1.375rem + 1.5vw);
}

/* Style the back side */
.flip-card-back {
  background-color: #AA1E28;
  color: white;
  border: solid 12px rgb(209, 211, 212);
  transform: rotateY(180deg);
}

.background {
  background-color: #AA1E28;
  z-index: 1;
  width: 50%;
  height: 400px;
  position: absolute;
  top: -50px;
  right: 0px;
}

@media (max-width: 770px){
  .circle, .flip-card {
    height: 175px;
    width: 175px;
  }
  .flip-card-inner .text, .flip-card-back .text{
    /* margin-top: 25px; */
    font-size: 30px;
  }
  .flip-card-back .text .room{
    font-size: 25px;
  }
  .flip-card-back .text{
    font-size: 20px;
  }
}
@media(max-width: 550px){
  .circle, .flip-card {
    height: 150px;
    width: 150px;
  }
  .flip-card-inner .text, .flip-card-back .text{
    margin-top: 15px;
  }
  .flip-card-back .text#test{
    font: 12px;
  }
}
</style>
