<template>
  <div class="yonetimXL">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <ul class="list-group">
            <li
              @click="onClick(i)"
              v-for="(item,i) in veri"
              class="list-group-item"
              :class="{yayinda : !veri[i].yayin}"
            >
              <button @click="sil(i)" class="btn btn-sm btn-danger">X</button>
              <strong>{{veri[i].haftaId}}</strong>
              <br>Gün:
              <span class="gun">{{veri[i].baslangic}} - {{veri[i].bitis}}</span>
              <br>
              <!-- Ay :<span class="ay">{{veri[i].ay}}</span>  <br> -->
              <span class="fiyat">{{parseInt(veri[i].fiyat) +  parseInt(veri[i].ofiyat)}}₺</span>
            </li>
          </ul>
          {{z}}
          <button @click="yeni" class="btn btn-primary mt-4">Yeni Ekle</button>
        </div>
        <div class="col-md-6">
          <form @submit.prevent="gonder">
            <div class="form-group">
              <label for="haftaId">HaftaID</label>
              <input
                class="form-control"
                v-model="veri[z].haftaId"
                type="text"
                name="haftaId"
                id="haftaId"
              >
            </div>
            <!-- <div class="form-group">
              <label for="ay">Ay</label>
              <input class="form-control" v-model="veri[z].ay" type="text" name="ay" id="ay">
            </div>-->
            <div class="form-group">
              <label for="baslangic">Başlangıç Günü</label>
              <input
                class="form-control"
                v-model="veri[z].baslangic"
                type="text"
                name="baslangic"
                id="baslangic"
              >
            </div>
            <div class="form-group">
              <label for="bitis">Bitiş Günü</label>
              <input
                class="form-control"
                v-model="veri[z].bitis"
                type="text"
                name="bitis"
                id="bitis"
              >
            </div>
            <div class="form-group">
              <label for="kont">Kontenjan</label>
              <input class="form-control" v-model="veri[z].kont" type="text" name="kont" id="kont">
            </div>
            <div class="form-group">
              <label for="mevcut">Doluluk</label>
              <input
                class="form-control"
                v-model="veri[z].mevcut"
                type="text"
                name="mevcut"
                id="mevcut"
              >
            </div>
            <div class="form-group">
              <label for="fiyat">Fiyat</label>
              <input
                class="form-control"
                v-model="veri[z].fiyat"
                type="text"
                name="fiyat"
                id="fiyat"
              >
            </div>
            <div class="form-group">
              <label for="ofiyat">Oda Fiyatı</label>
              <input
                class="form-control"
                v-model="veri[z].ofiyat"
                type="text"
                name="ofiyat"
                id="ofiyat"
              >
            </div>
            <div class="form-group">
              <label for="yayin">Yayın</label>
              <input
                class="form-control"
                v-model="veri[z].yayin"
                type="checkbox"
                name="yayin"
                id="yayin"
              >
            </div>

            <button class="btn btn-info kaydet">KAYDET</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      veri: [
        {
          haftaId: 0
        }
      ],
      z: 0
    };
  },
  methods: {
    onClick(i) {
      this.z = i;
    },
    test() {
      axios.post("https://haydi-f2bca.firebaseio.com/veri.json", {
        item: "cagdas"
      });
    },
    gonder() {
      axios
        .put("https://haydi-f2bca.firebaseio.com/veri.json", {
          karadenizxl: this.veri
        })
        .then(r => {
          alert("Başarılı Şekilde eklendi");
        })
        .catch(e => {
          console.log(e);
          alert("Başarısız!!!");
        });
    },
    yeni() {
      this.veri.push({});
      this.z = i;
    },
    sil(i) {
      this.veri.splice(i, 1);
      axios
        .put("https://haydi-f2bca.firebaseio.com/veri.json", {
          karadenizxl: this.veri
        })
        .then(r => {
          alert("Başarılı Şekilde silindi lütfen sayfayı yenileyin!");
        })
        .catch(e => {
          console.log(e);
          alert("Başarısız!!!");
        });
    }
  },
  created() {
    axios.get("https://haydi-f2bca.firebaseio.com/veri.json").then(r => {
      this.veri = r.data.karadenizxl;
    });
  }
};
</script>

<style lang="scss" scoped>
.yayinda {
  background-color: #ddd;
}
.ay {
  color: Red;
}
.kaydet {
  min-width: 200px;
  display: block;
  margin: 30px auto;
}
.gun {
  color: blue;
}
.fiyat {
  color: orangered;
}
</style>
