<template>
  <div class="hello">
    <div class="btn">
      <img src="../assets/btn.png" alt="">
      <div class="pinyin" @click="toPinyin"></div>
      <div class="shang" @click="toShang"></div>
      <div class="xia" @click="toXia"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {}
  },
  methods: {
    toPinyin () {
      this.$router.push({path: '/fx'})
    },
    toShang () {
      this.$router.push({path: '/fx1'})
    },
    toXia () {
      this.$router.push({path: '/fx2'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    flex: 1;
    background: url('../assets/sy.png');
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hello .btn {
    position: relative;
    width: 50%;
    height: auto;
  }

  .hello .btn img {
    width: 100%;
    height: 100%;
    z-index: 5;
  }

  .hello .btn .pinyin {
    position: absolute;
    top: 0;
    width: 100%;
    height: 25%;
    background: transparent;
    border-radius: 25px;
    z-index: 10;
  }
  .hello .btn .shang{
    position: absolute;
    top: 35%;
    width: 100%;
    height: 25%;
    background: transparent;
    border-radius: 25px;
    z-index: 10;
  }
  .hello .btn .xia{
    position: absolute;
    top: 70%;
    width: 100%;
    height: 25%;
    background: transparent;
    border-radius: 25px;
    z-index: 10;
  }
</style>
