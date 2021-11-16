<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Observer msg="Instangram" img_path="insta_logo.png" observer_name="Instangram" />
      </div>
      <div class="col">
        <Observer msg="Facebook" img_path="face_logo.png" observer_name="Facebook" />
      </div>
      <div class="col">
        <Observer msg="Twitter" img_path="twitter_logo.png" observer_name="Twitter" />
      </div>
    </div>
    <div class = "row">
      <div class = "col"></div>
      <div class = "col">
        <button class="btn btn-danger" style="width:200px;heigth:200px;margin-top:20px;"> NOTIFY REGISTERED OBSERVERS</button>
      </div>
    </div>
  </div>
</template>

<script>
import Observer from './components/Observer.vue'
import {NotificationSystem} from './scripts/observer-pattern.js'
export default {
  name: 'App',
  components: {
    Observer
  }
  ,
  data()
  {
    return {
      notification_system : new NotificationSystem(),
      }
  }
}

</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
