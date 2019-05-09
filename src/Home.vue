<template>
 <div class="home">
  <Menu></Menu>
   
   <router-link
  tag="div"
  class="gelenRezervasyon"
  to="/gelen"
  >

    <p>Gelen Rezervasyonlar</p>
  </router-link>
  <router-link
  tag="div"
  class="yonet"
  to="/yonet"
  >

    <p>Yönet</p>
  </router-link>
 </div>
</template>
<script>
import Menu from './Menu'

export default {
  components:{
    Menu,
  }
}
</script>


<style lang="scss" scoped>
.home{
  .gelenRezervasyon{
  height:200px;
  width:200px;
  background-color: #2c3e50;
  margin:20px auto;
  margin-top:60px;
  p{
    padding-top:60px;
  }
  }
  .yonet{
    max-width: 200px;
    height: 200px;
    background-color: #16a085;
    margin:20px auto;
    p{
      line-height: 200px;
    }
  }
  p{
    color:#ecf0f1;
    font-size:1.8rem;
    text-align: center;
  }
}
</style>
