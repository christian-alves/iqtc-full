<template>
  <div class="container pt-5">
    <div class="container-fluid text-center pt-10">
      <div class="card text-center d-inline-block" style="width:300px;">
        <div class="card-header">
          Logo
        </div>
        <div class="card-body">
          <h5 class="card-title">Login</h5>
          <form class="form-signin card-text">
            <label for="inputEmail" class="sr-only">Email</label>
            <input id="inputEmail" v-model="login_email" type="email" class="form-control" placeholder="Digite seu email" autofocus required>
            <label for="inputSenha" class="sr-only">Senha</label>
            <input id="inputSenha" v-model="login_senha" type="password" class="form-control" placeholder="Digite sua senha" required>
          </form>
          <a href="#" class="w-100 btn verde">Entrar</a>
        </div>
        <div class="card-footer text-muted">
          Não possui uma conta?
          <nuxt-link to="/register">
            Criar conta
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      login_email: '',
      login_senha: ''
    }
  }
}
</script>

<style scoped>
  .form-signin input[type="email"]{
    margin-bottom: 10px;
  }
  .form-signin input[type="password"]{
    margin-bottom: 10px;
  }
  .verde{
    background-color: #13411f;
    color: white;
  }
  .pt-10{
    padding-top: 10rem;
  }
</style>
