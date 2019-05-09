<template>
  <div class="menu">
    <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand" >HaydiKaradenize</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav w-100 justify-content-center ">
      <router-link
      tag="li"
      to="/"
      class="nav-item"
      >
        <a class="nav-link" >Anasayfa </a>
      </router-link>
      <router-link
      tag="li"
      to="/yonet"
      class="nav-item"
      >
        <a class="nav-link" >Yönet </a>
      </router-link>
      <router-link
      tag="li"
      to="/gelen"
      class="nav-item"
      >
        <a class="nav-link" >Gelen Rezervasyonlar </a>
      </router-link>
      <router-link
      tag="li"
      to="/form"
      class="nav-item"
      >
        <a class="nav-link" >Formlar </a>
      </router-link>

      <router-link
      tag="li"
      to="/"
      class="nav-item"
      >
        <a class="nav-link" >Diğer Ayarlar </a>
      </router-link>
      <li class="nav-item">
        <a @click="logout" class="nav-link"> Çıkış Yap</a>
      </li>

    </ul>
  </div>
</nav>
  </div>
</template>
<script>
export default {
  methods:{
    logout(){
     this.$store.dispatch("logout")


}
  }
}
</script>


<style lang="scss" scoped>
.nav-item{
  padding: 0px 20px;
}
h1,h2,h3,p,a{
  color:White !important;
}
a{
  cursor: pointer;
}
.navbar{
  background-color: #c0392b;
}
</style>

