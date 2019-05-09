<template>
  <div class="yonet">
    <Menu></Menu>
    <div class="secim">
      <button @click="secim=0" class="btn btn-danger">Karadeniz XL</button>
      <button @click="secim=1" class="btn btn-danger">Karadeniz Classic</button>
    </div>
    <template v-if="secim==0">
      <h3 class="text-center m-4">Karadeniz XL Yönetim</h3>
      <YonetimXL/>
    </template>
    <template v-if="secim==1">
      <h3 class="text-center m-4">Karadeniz Classic Yönetim</h3>
      <YonetimClass/>
    </template>
  </div>
</template>
<script>
import Menu from "./Menu";
import axios from "axios";
import YonetimXL from "./YonetimXL";
import YonetimClass from "./YonetimClass";
export default {
  components: {
    Menu,
    YonetimXL,
    YonetimClass
  },
  data() {
    return {
      secim: 0,
      iletisim:[],
      sikayet:[],
      havale:[]
    };
  },
  created() {

  }
};
</script>


<style lang="scss" scoped>
.yonet {
  .secim {
    max-width: 300px;
    margin: 20px auto;
  }
}
</style>
