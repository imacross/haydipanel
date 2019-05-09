<template>
  <div class="auth">
    <div class="formC">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="exampleInputEmail1">ID</label>
          <input
            v-model="user.email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="ID"
          >
          <div class="form-group"></div>
          <label for="exampleInputPassword1">Password</label>
          <input
            v-model="user.password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          >
        </div>

        <button class="btn btn-primary m-auto">GİRİŞ YAP</button>
      </form>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("login",{...this.user})
      .then(r =>{
        this.$router.push("/")
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.auth {
  background-color: #2c3e50;
  height: 100vh;
  .formC {
    padding-top: 60px;
    max-width: 400px;
    margin: 0 auto;
    label {
      color: White;
    }
    small {
      color: White;
    }
  }
}
</style>
