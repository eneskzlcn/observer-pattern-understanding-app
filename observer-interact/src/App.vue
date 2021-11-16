<template>
  <div class="row">
    <Observer msg="Instangram" img_path="insta_logo.png" observer_name="Instangram" />
    <Observer msg="Facebook" img_path="face_logo.png" observer_name="Facebook" />
    <Observer msg="Twitter" img_path="twitter_logo.png" observer_name="Twitter" />
    <button class="btn btn-danger"></button>
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
