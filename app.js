// Vue.component('click-counter', {
//   template: '#click-counter-template',
//   data () {
//     return {
//       count: 0
//     }
//   }
// }),

Vue.component('plan-picker', {
  template: '#plan-picker-template',
  data() {
    return {
      plans: ['The hacker', 'The curious', 'The Addict', 'The Single']
    }
  }
})
Vue.component('plan', {
  template: '#plan-template',
  props:{
    name: {
      type: String,
      required: true
    }
  }
})

new Vue({
  el: '#app',
})
