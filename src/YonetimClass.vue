<template>
  <div class="yonetimClass">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <ul class="list-group">
            <li @click="onClick(i)"  v-for="(item,i) in veri2" class="list-group-item" 
            :class="{yayinda : !veri2[i].yayin}">
              <button @click="sil(i)" class="btn btn-sm btn-danger">X</button>
              <strong>{{veri2[i].haftaId}}</strong></br>
              Gün:<span class="gun">{{veri2[i].baslangic}} - {{veri2[i].bitis}}</span> <br>
              <!-- Ay :<span class="ay">{{veri2[i].ay}}</span>  <br> -->
              <span class="fiyat">{{parseInt(veri2[i].fiyat) +  parseInt(veri2[i].ofiyat)}}₺</span>
            </li>
          </ul>
          {{z}}
          <button @click="yeni" class="btn btn-primary mt-4">Yeni Ekle</button>
        </div>
        <div class="col-md-6">
          <form @submit.prevent="gonder">
            <div  class="form-group">
              <label for="haftaId">HaftaID</label>
              <input class="form-control" v-model="veri2[z].haftaId" type="text" name="haftaId" id="haftaId">
            </div>
            <!-- <div class="form-group">
              <label for="ay">Ay</label>
              <input class="form-control" v-model="veri2[z].ay" type="text" name="ay" id="ay">
            </div> -->
            <div class="form-group">
              <label for="baslangic">Başlangıç Günü</label>
              <input class="form-control" v-model="veri2[z].baslangic" type="text" name="baslangic" id="baslangic">
            </div>
            <div class="form-group">
              <label for="bitis">Bitiş Günü</label>
              <input class="form-control" v-model="veri2[z].bitis" type="text" name="bitis" id="bitis">
            </div>
            <div class="form-group">
              <label for="kont">Kontenjan</label>
              <input class="form-control"  v-model="veri2[z].kont" type="text" name="kont" id="kont">
            </div>
            <div class="form-group">
              <label for="mevcut">Doluluk</label>
              <input class="form-control"  v-model="veri2[z].mevcut" type="text" name="mevcut" id="mevcut">
            </div>
            <div class="form-group">
              <label for="fiyat">Paket Fiyatı</label>
              <input class="form-control"  v-model="veri2[z].fiyat" type="text" name="fiyat" id="fiyat">
            </div>
            <div class="form-group">
              <label for="ofiyat">Oda Fiyatı</label>
              <input class="form-control"  v-model="veri2[z].ofiyat" type="text" name="ofiyat" id="ofiyat">
            </div>
            <div class="form-group">
              <label for="yayin">Yayın</label>
              <input class="form-control"  v-model="veri2[z].yayin" type="checkbox" name="yayin" id="yayin">
            </div>

            <button class="btn btn-info kaydet">KAYDET</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return{
      veri2:[
        {
          haftaId:0,

        }
      ],
      z:0,
    }
  },
  methods:{
    onClick(i){
      this.z = i;
      
    },
    test(){
      axios.post("https://haydi-f2bca.firebaseio.com/veri2.json",{item:"cagdas"});
    },
    gonder(){
      axios.put("https://haydi-f2bca.firebaseio.com/veri2.json",{karadenizcl:this.veri2})
      .then(r => {
        alert("Başarılı Şekilde eklendi");
      }).catch(e => {
        console.log(e);
        alert("Başarısız!!!")
      })
    },
    yeni(){
      this.veri2.push({})
      this.z = i;
    },
    sil(i){
      this.veri2.splice(i,1);
      axios.put("https://haydi-f2bca.firebaseio.com/veri2.json",{karadenicl:this.veri2})
      .then(r => {
        alert("Başarılı Şekilde silindi lütfen sayfayı yenileyin!");
      }).catch(e => {
        console.log(e);
        alert("Başarısız!!!")
      })
    }
  },
  created(){
    axios.get("https://haydi-f2bca.firebaseio.com/veri2.json")
    .then(r => {
      this.veri2 = r.data.karadenizcl;
    })
  }
};
</script>

<style lang="scss" scoped>
.yayinda{
  background-color: #DDD;
}
.ay{
  color:Red;
}
.kaydet{
  min-width:200px;
  display:block;
  margin:30px auto;
}
.gun{
  color:blue;
}
.fiyat{
  color: orangered;
}
</style>
