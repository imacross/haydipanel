<template>
  <div class="gelen">
    <Menu></Menu>
    <div class="secim">
      <button @click="secim=0" class="btn btn-primary">Karadeniz XL</button>
      <button @click="secim=1" class="btn btn-primary">Karadeniz Classic</button>
    </div>
    <template v-if="secim == 0">
      <h3 class="text-center mt-4">Karadeniz XL Gelen Rezervasyonlar</h3>
      <RezervasyonXL/>
    </template>
    <template v-if="secim == 1">
    <h3 class="text-center mt-4" >Karadeniz Classic Gelen Rezervasyonlar</h3>

      <RezervasyonClass/>
    </template>
  </div>
</template>
<script>
import Menu from "./Menu";
import RezervasyonXL from "./RezervasyonXL";
import RezervasyonClass from "./RezervasyonClass";
export default {
  data() {
    return {
      secim: 0
    };
  },
  components: {
    Menu,
    RezervasyonXL,
    RezervasyonClass
  }
};
</script>


<style lang="scss" scoped>
.secim {
  max-width: 300px;
  margin: 20px auto;

}
</style>
