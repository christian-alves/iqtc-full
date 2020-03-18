<template>
  <div class="container pt-7 pb-5">
    <div class="container-fluid">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Cadastrar</h5>
          <form>
            <div class="form-row">
              <div class="form-group col-12">
              <label for="inputName">Nome Completo</label>
              <input type="text" class="form-control" id="inputName" autofocus required placeholder="Digite seu nome">
            </div>
              <div class="form-group col-md-6">
                <label for="inputRG">RG</label>
                <input class="form-control" required oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="10" id="inputRG" placeholder="Digite seu RG">
              </div>
              <div class="form-group col-md-6">
                <label for="inputCPF">CPF</label>
                <input class="form-control" required oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="11" id="inputCPF" placeholder="Digite seu CPF">
              </div>
            </div>
            <div class="form-group">
              <label for="inputEmail">Email</label>
              <input type="email" required class="form-control" id="inputEmail" placeholder="Digite seu Email">
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputSenha">Senha</label>
                <input type="password" required minlength="6" maxlength="20" class="form-control" v-model="pass1" v-on:keyup="verification" id="inputSenha">
              </div>
              <div class="form-group col-md-6">
                <label for="inputConfSenha" v-if="passmatch == true">Confirmar senha <span class="success text-right"> {{dica}} </span></label>
                <label for="inputConfSenha" v-else>Confirmar senha <span class="red text-right"> {{dica}} </span></label>
                <input type="password" required minlength="6" maxlength="20" class="form-control" v-model="pass2" v-on:keyup="verification" id="inputConfSenha">
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" v-model="checked" id="check">
                <label class="form-check-label" for="gridCheck">
                  Confirmo que li e aceito os
                  <a href="#">Termos de condições</a>
                </label>
              </div>
            </div>
            <button type="submit" class="btn verde" id="confirm" v-if="checked == true && passmatch == true" >Cadastrar</button>
            <button type="submit" class="btn cinza" id="confirm" disabled v-else >Cadastrar</button>
            <div class="text-muted text-right">
              Já possui uma conta?
              <nuxt-link to="/signin">
                Entrar na minha conta
              </nuxt-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        checked: false,
        passmatch: false,
        pass1: '',
        pass2: '',
        dica: '',
      }
    },
    methods:{
      verification(){
        if(this.pass1 && this.pass2){
          if (this.pass1 == this.pass2) {
          this.passmatch = true
          this.dica = "Senhas iguais"
        }
        else {
          this.passmatch = false
          this.dica = "Senhas diferentes"
          }
        }
        else{
          this.passmatch = false
          this.dica = ""
        }
      },
        }
}
</script>

<style scoped>
  .pt-7{
    padding-top: 7rem;
  }
  /*antes de checar a box fica essa cor*/
  .cinza{
    background-color: #dedede;
    color: white;
  }
  /*depois de checar a box fica essa*/
  .verde{
    background-color: #13411f;
    color: white;
  }
  .red{
    color: red;
  }
  .success{
    color: green;
  }

</style>
