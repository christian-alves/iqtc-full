<template>    
        <div id="contact" class="container mtcontact myespecial">
          <section class="get-in-touch">
            <h1 align="center" class="mbcontact bigger">ESCREVA PARA NÓS</h1>
           <form id="contactform" action="mailer.php" class="contact-form row">
             <div class="col-12 col-md-6">
              <div class="form-field  x-100">
                 <input id="nome" class="input-text js-input" type="text" name=nome required>
                 <label class="label" for="name">Nome</label>
              </div>
              <div class="form-field x-100">
                 <input id="email" class="input-text js-input" type="email" name=email required>
                 <label class="label" for="email">E-mail</label>
              </div>
              <div class="form-field x-100">
                 <input id="assunto" class="input-text js-input" type="text" name=assunto required>
                 <label class="label" for="email">Assunto</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-field x-100">
                 <textarea style="resize:none; height:110px" id="mensagem" class="input-text js-input" type="text" name=mensagem required></textarea>
                 <label class="label2" for="message">Mensagem</label>
              </div>
              <div class="form-field x-100 align-center mbsubmit">
                 <input id="submitbtn" class="submit-btn" type="submit" value="enviar >">
                 <i id="loadingcircle" class="d-none fa-2x fas fa-circle-notch"></i>
              </div>
              <div id="callback" class="x-100 align-center">
                  
               </div>
            </div>
           </form>
          </section>
        </div>
</template>


<style scoped>


@import url('https://fonts.googleapis.com/css?family=Roboto:400,900&display=swap');
.align-center {
  text-align: center;

}

.mbcontact{
  margin-bottom:50px;
}

.mtcontact{
  margin-top:300px!important;
}

@media (max-width:765px){


  .myespecial{
    margin-top:0px!important;
    margin-bottom:0px!important;

  }


  
}

@media(max-width:760px){
  .mtcontact{
    margin-top:50px!important;
  }

  #contact{
    height:500px;
  }

  .bgcontact{
    background:#20292c;
  }
  
}

html {
  height: 100%;
}

body {
  height: 100%;
  position: relative;
}

.row {
  margin: -20px 0;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
.row .col {
  padding: 0 20px;
  float: left;
  box-sizing: border-box;
}
.row .col.x-50 {
  width: 50%;
}
.row .col.x-100 {
  width: 100%;
}

.content-wrapper {
  min-height: 100%;
  position: relative;
}

.get-in-touch {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
}
.get-in-touch .title {
  text-align: center;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 36px;
  line-height: 48px;
  padding-bottom: 48px;
}

.contact-form .form-field {
  position: relative;
  margin: 32px 0;
}
.contact-form .input-text {
  display: block;
  width: 100%;
  height: 40px;
  border-width: 0 0 2px 0;
  border-color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
}
.contact-form .input-text:focus {
  outline: none;
}
.contact-form .input-text:focus + .label, .contact-form .input-text.not-empty + .label {
  -webkit-transform: translateY(-15px);
          transform: translateY(-15px);
}

.contact-form .input-text:focus + .label2, .contact-form .input-text.not-empty + .label2 {
  -webkit-transform: translateY(-15px);
          transform: translateY(-15px);
}
.contact-form .label {
  position: absolute;
  left: 20px;
  bottom: 25px;
  font-family: 'Roboto', serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: black;
  cursor: text;
  transition: -webkit-transform .2s ease-in-out;
  transition: transform .2s ease-in-out;
  transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;
}

.contact-form .label2 {
  position: absolute;
  left: 20px;
  bottom: 100px!important;
  font-family: 'Roboto', serif;
  font-size: 18px;
  line-height: 26px;
  font-weight: 400;
  color: black;
  cursor: text;
  transition: -webkit-transform .2s ease-in-out;
  transition: transform .2s ease-in-out;
  transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;
}
.contact-form .submit-btn {
  display: inline-block;
  background-color: white;
  color: black;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 15px;
  padding: 8px 16px;
  border: 1px solid black;
  cursor: pointer;
}

.bigger{
  font-size:30px;
  font-weight:bold;
}

.note {
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  text-align: center;
  font-family: 'Roboto', serif;
  font-size: 16px;
  line-height: 21px;
}
.note .link {
  color: black;
  text-decoration: none;
}
.note .link:hover {
  text-decoration: underline;
}


@media(min-width:765px){
  
  .mbsubmit{
    margin-top:50px!important;
  }


  .contact-form .label2 {
    position: absolute;
    left: 20px;
    bottom: 100px;
    font-family: 'Roboto', serif;
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    color: black;
    cursor: text;
    transition: -webkit-transform .2s ease-in-out;
    transition: transform .2s ease-in-out;
    transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;
  }

  .contact-form .input-text:focus + .label2, .contact-form .input-text.not-empty + .label2 {
    -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
  }

  .align-center {
    text-align: right;
  
  }

}


</style>