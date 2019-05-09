<template>
<div class="mainC">
  
  <router-view> </router-view>
</div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch("initAuth");
  }
}
</script>


<style lang="scss" scoped>
.mainC{
  
  
}
</style>
