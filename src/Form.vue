<template>
  <div class="formC">
    <Menu/>
    <div class="secim">
      <button @click="secim=0" class="btn btn-danger">İletişim</button>
      <button @click="secim=1" class="btn btn-danger">Şikayet-Öneri</button>
      <button @click="secim=2" class="btn btn-danger">Havale</button>
    </div>
    <div class="container">
      <div class="icerik">
        <template v-if="secim==0">
          <h3 class="text-center">İletişim Formu</h3>
          <ul class="list-group">
            <li v-for="ilet in iletisim" class="list-group-item">
              <p class="gonderilme"><i>{{ilet.today}}</i></p>
              <p class="ad"><strong>İsim:</strong> {{ilet.isim}}</p>
              <p class="soyad"><strong>Soyisim:</strong> {{ilet.soyisim}}</p>
              <p class="mail"><strong>Mail:</strong> {{ilet.email}}</p>
              <div class="mesajDiv">
                <p class="mesaj"><strong>Mesaj:</strong> {{ilet.mesaj}}</p>
              </div>
              </li>
          </ul>
        </template>
        <template v-if="secim==1">
          <h3 class="text-center">Şikayet-Öneri Formu</h3>
          <ul class="list-group">
            <li v-for="sika in sikayet" class="list-group-item">
              <p class="gonderilme"><i>{{sika.today}}</i></p>
              <p class="ad"><strong>İsim:</strong> {{sika.isim}}</p>
              <p class="soyad"><strong>Soyisim:</strong> {{sika.soyisim}}</p>
              <p class="mail"><strong>Mail:</strong> {{sika.email}}</p>
              <p class="konu"><strong>Konu:</strong> {{sika.secim}}</p>
              <div class="mesajDiv">
                <p class="mesaj"><strong>Mesaj:</strong> {{sika.mesaj}}</p>
              </div>
              </li>
          </ul>
        </template>
        <template v-if="secim==2">
          <h3 class="text-center">Havale Formu</h3>
          <ul class="list-group">
            <li v-for="hav in havale" class="list-group-item">
              <p class="gonderilme"><i>{{hav.today}} </i></p>
              <p class="ad"><strong>İsim:</strong> {{hav.isim}}</p>
              <p class="soyad"><strong>Soyisim:</strong> {{hav.soyisim}}</p>
              <p class="mail"><strong>Mail:</strong> {{hav.mail}}</p>
              <p class="tel"><strong>Telefon:</strong> {{hav.tel}}</p>
              <p class="tutar"><strong>Tutar:</strong> {{hav.tutar}}₺</p>
              <div class="mesajDiv">
                <p class="mesaj"><strong>Mesaj:</strong> {{hav.mesaj}}</p>
              </div>
              </li>
          </ul>
        </template>
      </div>
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
      secim: 0,
      iletisim: [],
      sikayet: [],
      havale: []
    };
  },
  created() {
    axios
      .get("https://haydi-f2bca.firebaseio.com/sikayet.json")
      .then(response => {
        let data = response.data;
        for (let key in data) {
          console.log(data[key].sikayet);
          this.sikayet.push(data[key].sikayet);
        }
      });
    axios
      .get("https://haydi-f2bca.firebaseio.com/havale.json")
      .then(response => {
        let data1 = response.data;
        for (let key in data1) {
          console.log(data1[key].havale);
          this.havale.push(data1[key].havale);
        }
      });
    axios
      .get("https://haydi-f2bca.firebaseio.com/iletisim.json")
      .then(response => {
        let data2 = response.data;
        for (let key in data2) {
          console.log(data2[key].iletisim);
          this.iletisim.push(data2[key].iletisim);
        }
      });
    //axios
    //  .get("https://haydi-f2bca.firebaseio.com/iletisim.json")
    //  .then(response => {
    //    let data = response.data;
    //    for (let key in data) {
    //      console.log(data[key].veri);
    //      this.iletisim.push(data[key].veri);
    //    }
    //  });
    //  axios
    //    .get("https://haydi-f2bca.firebaseio.com/havale.json")
    //    .then(response => {
    //      let data = response.data;
    //      for (let key in data) {
    //        console.log(data[key].veri);
    //        this.havale.push(data[key].veri);
    //      }
    //    });
  }
};
</script>


<style lang="scss" scoped>
.secim {
  max-width: 300px;
  margin: 20px auto;
}
.icerik {
}

.gonderilme{
  font-size:0.9rem;
}
.mesajDiv{
  border:2px solid aqua;
  max-width:600px;
  .mesaj{

  }
}
</style>
