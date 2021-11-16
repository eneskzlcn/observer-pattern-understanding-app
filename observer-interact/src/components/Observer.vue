<template>
    <div class="card" style="width: 18rem;margin-left:20px;">
    <img :src="require('../assets/'+img_path )" class="card-img-top" alt="..." id = "a" style="margin-top:20px;">
    <div class="card-body">
      <h5 class="card-title">{{msg}}</h5>
      <p class="card-text" id="notification_text">My notification info</p>
      <a v-bind:href=img_path class="btn btn-primary" @click="subscribe">Subscribe</a>
    </div>
</div>


</template>

<script>
import { FacebookObserver, InstangramObserver, TwitterObserver } from '../scripts/observer-pattern';
export default {
  name: 'Observer',
  props: {
    msg: String,
    img_path: String,
    observer_name: String,
  },
  methods:{
    subcribe(){
      //this.$parent.data.notification_system.register_observer(this.observer);
    },
    createObserver(name)
    {
      var element_id = 'notification_text';
      switch(name)
      {
        case 'Instangram':
          return new InstangramObserver(element_id);
        
        case 'Facebook':
          return new FacebookObserver(element_id);
        
        case 'Twitter':
          return new TwitterObserver(element_id);

      }
    }
  },
  data()
  {
    return {
      observer: null,
    }
  },
  mounted()
  {
    this.observer = this.createObserver(this.observer_name);
    console.log(this.observer);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
