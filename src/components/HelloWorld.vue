<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <div v-img="item.url" v-for="(item,index) in list" :key="index" style="height:300px;width:400px;display:inline-block"></div>
    <pre><code v-highlight  class="javascript">
      $(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
      </code></pre>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [{
        url: 'https://goss1.veer.com/creative/vcg/veer/612/veer-124676098.jpg',
      }, {
        url: 'http://t2.hddhhn.com/uploads/tu/201707/521/82.jpg',
      }, {
        url: 'http://t2.hddhhn.com/uploads/tu/201707/200/8.jpg',
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
