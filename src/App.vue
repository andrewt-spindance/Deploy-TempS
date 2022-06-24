<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <header>
    <div class="header">
      <div id="menu">
        <input type="checkbox" id="active" />
        <label for="active" class="menu-btn"><span></span></label>
        <label for="active" class="close"></label>
        <div class="wrapper">
          <ul>
            <li class="menu-item"><a href="./">Home</a></li>
            <li class="menu-item"><a href="/ViewAll">Current TempS</a></li>
            <li class="menu-item"><a href="/Calender">Calendar</a></li>
          </ul>
        </div>
      </div>
      <!-- <RouterView class="menu"/> -->
      <div class="top_head">
        <a class="link" href="./">
          <div class="head">
            <img id="logo" src="./assets/2018.jpg" height="75" />
            <h1 class="title">TempS</h1>
          </div>
        </a>
        <button id="login">Login</button>
      </div>
    </div>
  </header>

  <RouterView class="comp" />
</template>

<style>
@import "@/assets/base.css";
@import url("http://fonts.cdnfonts.com/css/akrobat");

/* this rule applies to all */
#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  max-width: 1280px;
  padding: 1rem;
}

.head {
  display: flex;
  font-family: "Akrobat", Helvetica, Arial, sans-serif;
  margin-left: 70px;
  z-index: 5;
}

.top_head {
  display: flex;
  justify-content: space-between;
}

#login {
  font-size: 12px;
  height: 25px;
  margin-top: 12px;
}

#logo {
  width: 30px;
  height: 25px;
  margin-top: 13px;
}

/* These are rules for the menu */
.wrapper {
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

#active:checked ~ .wrapper {
  left: 0;
  /* right:0; */
}

.menu-btn {
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
  margin-top: 23px;
}

.menu-btn span,
.menu-btn:before,
.menu-btn:after {
  content: "";
  position: absolute;
  top: calc(50% - 1px);
  left: 30%;
  width: 40%;
  border-bottom: 2px solid #000;
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.menu-btn:before {
  transform: translateY(-8px);
}

.menu-btn:after {
  transform: translateY(8px);
}

.close {
  z-index: 1;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: background 0.6s;
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

.menu-line {
  color: white;
}

.wrapper ul {
  position: absolute;
  top: 60%;
  left: 14%;
  height: 80%;
  transform: translate(-50%, -50%);
  list-style: none;
  /* text-align: center; */
}

.wrapper ul li {
  height: 20%;
  margin: 30px 0;
}

.wrapper ul li a {
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
  transition: transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.wrapper ul li a:after {
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

.wrapper ul li a:hover:after {
  transform: scaleY(1);
}

.wrapper ul li a:hover {
  color: #aa1e28;
}

input[type="checkbox"] {
  display: none;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  text-align: center;
  width: 100%;
  color: #202020;
}

.content .title {
  font-size: 40px;
  font-weight: 700;
}

.content p {
  font-size: 35px;
  font-weight: 600;
}

#active:checked ~ .wrapper ul li a {
  opacity: 1;
}

.wrapper ul li a {
  transition: opacity 1.2s, transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  transform: translateX(100px);
}

#active:checked ~ .wrapper ul li a {
  transform: none;
  transition-timing-function: ease, cubic-bezier(0.1, 1.3, 0.3, 1);
  transition-delay: 0.6s;
  transform: translateX(-100px);
}

button#login,
button {
  border-radius: 15%;
}

a.link {
  color: black;
  text-decoration: none;
}

a.link:hover {
  color: black;
  text-decoration: none;
}
</style>
