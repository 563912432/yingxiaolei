<template>
  <div class="szFooter">
    <div class="f-title">
      <span>本课程版权所有人为<span>“哼哼成长”</span><span class="space">盗用必究</span></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'szFooter'
}
</script>
<style scoped>
  .szFooter {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    height: 40px;
    font-size: 12px;
    background-color: #038384;
    z-index: 1;
  }
  .szFooter .f-title{
    flex: 1;
    text-align: center;
    padding: 5px;
  }
</style>
