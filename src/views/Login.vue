<script setup lang="ts">
import RoomList from '@/components/RoomTableComp.vue'
import RoomBlock from '@/components/RoomBlockComp.vue'
</script>

<template>
  <!-- <main>
    <h1 class="subhead">Current Office Status</h1>
    <RoomBlock />
    <RoomList />
  </main> -->
  
  <body class="home">
    <div class="container">
      <div id="home_subtxt">
        <div id="topline">
          Top Three Current Temps
        </div>
        <div>
          <nav id="warm_cold_menu">
            <label for="touch"><span>Sort</span></label>               
            <input type="checkbox" id="touch"> 
            <ul class="slide">
              <li class="warmcold"><a href="#">Warm</a></li> 
              <li class="warmcold"><a href="#">Cold</a></li>
            </ul>
          </nav> 
        </div>
      </div>

      
      <div class="circles">
        <div class="circle">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text">
                  <h1 class="room">The Mitten</h1>
                  <h1 class="temp">74°</h1>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text" id="text">
                  <h1 class="room">The Mitten</h1>
                  <h4 class="temp">Temperature: 74°</h4>
                  <h4 class="humid">Humidity: 30%</h4>
                </div>
              </div>
            </div>
          </div>  
        </div>
        <div class="circle">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text">
                  <h1 class="room">Great Lakes</h1>
                  <h1 class="temp">72°</h1>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text">
                  <h1 class="room">The Mitten</h1>
                  <h4 class="temp">Temperature: 72°</h4>
                  <h4 class="humid">Humidity: 20%</h4>
                </div>
              </div>
            </div>
          </div> 
        </div>
        <div class="circle">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="text">
                  <h1>Big Red</h1>
                  <h1>68°</h1>
                </div>
              </div>
              <div class="flip-card-back">
                <div class="text">
                  <h1 class="room">The Mitten</h1>
                  <h4 class="temp">Temperature: 68°</h4>
                  <h4 class="humid">Humidity: 40%</h4>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div class="behind_container">
          <div class="background"></div>
      </div>
    </div>
  
  </body>
</template>
