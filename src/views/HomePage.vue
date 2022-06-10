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
  
  <body>
    <div class="container">
      <div>
        <div id="topline">
          Top Three Current Temps
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
