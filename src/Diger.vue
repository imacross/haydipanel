<template>
  <div class="diger">
    <Menu></Menu>
    <div class="formC">
      <form @submit.prevent="kaydet">
        <div class="form-group">
          <input v-model="doluluk.xlDoluluk" type="text" class="form-control" placeholder="XL Karadeniz doluluk">
        </div>
        <div class="form-group">
          <input v-model="doluluk.clDoluluk" type="text" class="form-control" placeholder="Klasik Karadeniz doluluk">
        </div>
        <button class="btn btn-danger">Kaydet</button>
      </form>
      {{doluluk}}
    </div>
  </div>
</template>

<script>
import Menu from "./Menu";
import axios from "axios";
export default {
  components: {
    Menu
  },
  data() {
    return {
      doluluk: {
        xlDoluluk: null,
        clDoluluk: null
      }
    };
  },
  methods: {
    kaydet() {
      axios.post("https://haydi-f2bca.firebaseio.com/doluluk.json",{doluluk:this.doluluk})
      .then(r => {
        console.log(r);
      })
    }
  },
  computed() {
    //axios
    //.get("https://haydi-f2bca.firebaseio.com/sikayet.json")
    //.then(response => {
    //  let data = response.data;
    //  for (let key in data) {
    //    console.log(data[key].sikayet);
    //    this.sikayet.push(data[key].sikayet);
    //  }
    //});
  }
};
</script>

<style lang="scss" scoped>
.formC {
  max-width: 300px;
  margin: 40px auto;
}
</style>
