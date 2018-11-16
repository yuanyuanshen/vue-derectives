// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'highlight.js/styles/github.css'

Vue.config.productionTip = false

var hljs = require("highlight.js")
hljs.initHighlightingOnLoad()

Vue.directive('img', {
  inserted: function (el, binding) {
    let color = Math.floor(Math.random() * 1000000);
    el.style.backgroundColor = '#' + color;

    var img = new Image();
    img.src = binding.value
    img.onload = function () {
      el.style.backgroundImage = 'url(' + binding.value + ')'
    }
  }
})

Vue.directive('highlight', function (el) {
  hljs.highlightBlock(el);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
