<template>
  <div class="rezXL">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <ul class="list-group mt-6">
            <li
              v-if="rez.veriShared.paketSecimi == 'Klasik Karadeniz' "
              v-for="(rez,i) in rezXL"
              class="list-group-item av"
              @click="secim = i"
            >
              <span>{{rez.veriShared.haftaId}}</span>
              <p
                class="baslangic text-center"
              >{{rez.veriShared.baslangic}} - {{rez.veriShared.bitis}}</p>
              <p class="fiyat text-center">
                Toplam Fiyat:
                <strong>{{rez.toplamFiyat}}₺</strong>
              </p>
              <p class="kisiSayisi text-center">
                <strong>{{rez.kisiSayisi}}</strong>
              </p>
              <p class="odaSecimi text-center">
                <i>{{rez.secimler.odaText}}</i>
              </p>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
          <div class="detay">
            <div class="header">
              <h5
                class="tarih"
              >{{rezXL[secim].veriShared.baslangic}} - {{rezXL[secim].veriShared.bitis}}</h5>
              <p class="tutar">
                Toplam Tutar:
                <br>
                <span>{{rezXL[secim].toplamFiyat}}₺</span>
              </p>

              <p class="kisiSayisi">{{rezXL[secim].kisiSayisi}}</p>
              <p class="odaSecimi">
                <i>{{rezXL[secim].secimler.odaText}}</i>
              </p>
              <p class="odemeYontemi text-center">
                Ödeme Yöntemi:
                <span v-if="rezXL[secim].odeme.yontem ==0">Online Ödeme</span>
                <span v-if="rezXL[secim].odeme.yontem ==1">Havale</span>
              </p>
              <p class="gonderilme text-center">
                Gönderilme Tarihi:
                <br>
                <span>{{rezXL[secim].gonderilmeTarihi.gun+5}}/{{rezXL[secim].gonderilmeTarihi.ay+1}}/{{rezXL[secim].gonderilmeTarihi.yil}} {{rezXL[secim].gonderilmeTarihi.saat}}.{{rezXL[secim].gonderilmeTarihi.dakika}}.{{rezXL[secim].gonderilmeTarihi.saniye}}</span>
              </p>
            </div>
            <div class="ince">
              <ul class="list-group">
                <li v-for="kisi in rezXL[secim].kisiler" class="list-group-item">
                  <p class="isim">
                    Ad:
                    <strong>{{kisi.kisisel.ad}}</strong>
                  </p>
                  <p class="soyisim">
                    Soyad:
                    <strong>{{kisi.kisisel.soyad}}</strong>
                  </p>
                  <p class="mail">
                    Mail:
                    <strong>{{kisi.kisisel.mail}}</strong>
                  </p>
                  <p class="tel">
                    Telefon:
                    <strong>{{kisi.kisisel.tel}}</strong>
                  </p>
                  <p class="uni">
                    Üniversite:
                    <strong>{{kisi.kisisel.uni}}</strong>
                  </p>
                  <p class="mesaj">
                    Mesaj:
                    <strong>{{kisi.kisisel.mesaj}}</strong>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//axios.post("https://haydi-f2bca.firebaseio.com/kullanici.json", {veri: this.kullanici})
import axios from "axios";
export default {
  data() {
    return {
      rezXL: [],
      secim: 0
    };
  },

  created() {
    axios
      .get("https://haydi-f2bca.firebaseio.com/kullanici.json")
      .then(response => {
        let data = response.data;
        for (let key in data) {
          console.log(data[key].veri);
          this.rezXL.push(data[key].veri);
        }
      });
  }
};
</script>

<style lang="scss" scoped>
.detay {
  margin-top: 10px;
  background-color: #ddd;
  .tarih {
    text-align: center;
    font-size: 1.6rem;
    padding-top: 20px;
  }
  .tutar {
    text-align: center;
    font-size: 1.3rem;
    padding-top: 10px;
    span {
      color: brown;
      font-size: 1.5rem;
    }
  }
  .kisiSayisi {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 500;
  }
  .odaSecimi {
    font-size: 1rem;
    text-align: center;
  }
  .odemeYontemi {
    font-size: 0.8rem;
  }
  .gonderilme {
    font-size: 0.8rem;
  }
  hr {
    border-top: 1px solid red;
  }
}
.av {
  cursor: pointer;
}
</style>
