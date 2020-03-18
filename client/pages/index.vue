<template>
<div>
  <div id="carouselnav" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselnav" data-slide-to="0" class="active"></li>
      <li data-target="#carouselnav" data-slide-to="1"></li>
      <li data-target="#carouselnav" data-slide-to="2"></li>
      <li data-target="#carouselnav" data-slide-to="3"></li>
      <li data-target="#carouselnav" data-slide-to="4"></li>
    </ol>
    <div class="carousel-inner h-100">
      <div class="carousel-item active">
        <img class="d-block w-100 img-fluid" src="https://cdn.pixabay.com/photo/2018/08/01/19/35/wolf-3577956_960_720.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 img-fluid" src="https://cdn.pixabay.com/photo/2018/08/01/19/35/wolf-3577956_960_720.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 img-fluid" src="https://cdn.pixabay.com/photo/2018/08/01/19/35/wolf-3577956_960_720.jpg" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 img-fluid" src="https://cdn.pixabay.com/photo/2018/08/01/19/35/wolf-3577956_960_720.jpg" alt="Third slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100 img-fluid" src="https://cdn.pixabay.com/photo/2018/08/01/19/35/wolf-3577956_960_720.jpg" alt="Third slide">
      </div>
    </div>
  </div>
    <div id="interestarea">
      <div class="container">
          <h1>ESCOLHA SUA ÁREA DE INTERESSE</h1>
          <ul>
            <li><a href="#">COACHING</a></li>
            <li><a href="#">AUTOMOTIVA</a></li>
            <li><a href="#">NR - NORMAS REGULAMENTADORAS</a></li>
            <li><a href="#">LOGÍSTICA</a></li>
            <li><a href="#">OUTROS</a></li>
            <li><a href="#">INDUSTRIAL</a></li>
            <li><a href="#">EDUCAÇÃO</a></li>
            <li><a href="#">CULINÁRIA</a></li>
            <li><a href="#">BELEZA E ESTÉTICA</a></li>
            <li><a href="#">CONSULTORIA CIVIL</a></li>
            <li><a href="#">ADMINISTRATIVO</a></li>
            <li><a href="#">CONSULTORIA</a></li>
            <li><a href="#">INFORMÁTICA</a></li>
          </ul>

        <form v-on:submit="ok" class="form-inline w-100 justify-content-center my-2 mt-md-5">
          <input v-model="input" class="form-control w-50" type="search" placeholder="Qual certificado você procura?" aria-label="Search">
          <nuxt-link :to="{name: 'course', params:{search: input}}">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">pesquisar</button>
          </nuxt-link>
        </form>

      </div>
  </div>
  <div id="highlights">
    <div class="d-flex text-center">
        <div class="col-12 col-md-4 highlight1">
          <div class="highlighttext">
            <h3>CARPINTEIRO</h3>
            <button>Saiba +</button>
          </div>
        </div>
        <div class="col-12 col-md-4 highlight2">
          <div class="highlighttext">
            <h3>MESTRE DE OBRA</h3>
            <button>Saiba +</button>
          </div>
        </div>
        <div class="col-12 col-md-4 highlight3">
          <div class="highlighttext">
            <h3>AÇOUGUEIRO</h3>
            <button>Saiba +</button>
          </div>
        </div>
    </div>
  </div>
  <div id="courses">
    <div class="my-5">
      <h1 class="text-center">CERTIFICADOS POR COMPETÊNCIA PROFISSIONAL</h1>
      <div class="container-fluid">
        <ul>
          <li v-bind:key="course.id" v-for="course in courses">
            <nuxt-link :to="{name: 'course-id', params:{id: course.id}}">
              <div class="card">
                <img class="card-img-top" src="https://adobeindd.com/view/publications/d2d65db4-7e38-4d51-bcef-bb0fa523979f/1/publication-web-resources/image/66.jpg" alt="Card image cap">
                <div class="card-body">
                  <p>{{course.category}}</p>
                  <h5>{{course.course}}</h5>
                  <p>{{course.hours}} Horas</p>
                  <p>R${{course.price}}</p>
                </div>
                <button type="submit" class="w-100 cardbtn">QUERO SABER MAIS</button>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <Faq/>

        <div class="support d-flex text-center justify-content-center align-items-center">
          <div class="container d-block-flex">
              <h1 class="text-white bigger">SUPORTE</h1>
              <p class="my-4">Prezamos por um suporte rápido e que transmita
              clareza. Estamos sempre inovando e melhorando<br> nosso
              Autos Dealer para melhor atender vocês de forma que
              se sinta confortável
              </p>
              <h3 class="text-white big">(019) 3396 - 3130 | (019) 9.9303 - 1652</h3>
          </div>        
        </div>
  <Contact/>

          <div class="prefooter py-10 text-white">
            <div class="container-fluid col-12 d-block d-md-flex text-center">
                <div class="col-12 col-md-4">
                    <p>Certificado reconhecido</p>
                    <img class="py-3" src="https://adobeindd.com/view/publications/d2d65db4-7e38-4d51-bcef-bb0fa523979f/1/publication-web-resources/image/certificado_selo.png">
                    <p>Certificado reconhecido em<br> todo território nacional</p>
                </div>
                <div class="col-12 col-md-4 pmobile">
                    <img src="https://adobeindd.com/view/publications/d2d65db4-7e38-4d51-bcef-bb0fa523979f/1/publication-web-resources/image/355.jpg">
                    <p class="py-3">R. Crescêncio da Silveira Pupo, 75 - 1o. andar - Sala 102 - Vila Cassaro, <br>
                    Itatiba-SP, CEP 13255-300
                    </p>
                    <p>Fone: +55 11 4534-1824</p>
                    <p>E-mail: contato@acelera.xyz</p>
                </div>
                <div class="col-12 col-md-4">
                    <p>SSL Certificado</p>
                    <img class="py-3" src="data:image/png;base64,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">
                    <p>Site seguro</p>
                </div>
            </div>
        </div>
</div>

</template>

<script>
import Faq from '~/components/Faq.vue'
import Contact from '~/components/Contact.vue'
import Json from '~/assets/courses.json'

export default {

  data(){
    return{
      courses:Json.Courses,
      input:''
    }
  },


  components: {
    Faq,
    Contact,
  },




}
</script>

<style>

#carouselnav{
  height:600px!important;
}

#carouselnav 

.carousel-indicators li{
  border-radius:50%;
  background-color:transparent;
  border:2px solid white;
  height:15px;
  width:15px;
}

.carousel-indicators .active{
  background-color:white!important;
}

#interestarea{
  margin:80px 0;
}

#interestarea h1{
  margin:40px 50px;
}

#interestarea ul{
  list-style:none;
  display:flex;
  flex-wrap:wrap;
  text-align:center;
  justify-content:center;
}

#interestarea ul li a{
  text-decoration:none;
  color:black;
  margin: 5px 5px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius:200px;
  justify-content:center;
  text-align:center;
  display:flex;
}

#interestarea form{
  width:100%!important;
}

#interestarea form input{
  border-right:0;
  border-radius:0;
  box-shadow:none;
}
#interestarea form button{
  border-left:0;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius:0;
  border-top-left-radius:0;
  box-shadow:none;
  border-color:#444342;
  background-color:#444342;
  color:white;
}

#highlights .highlighttext button{
  padding: 0 30px;
  background-color:#FBD300;
  border-radius:200px;
  border-color: #FBD300;
  height:40px;
  box-shadow:none!important;
  outline:0;
}


.highlight1, .highlight2, .highlight3{
  min-height:300px;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
}
.highlight1{
  background-image:url('https://adobeindd.com/view/publications/d2d65db4-7e38-4d51-bcef-bb0fa523979f/1/publication-web-resources/image/66.jpg')
}
.highlight2{
  background-image:url('https://adobeindd.com/view/publications/d2d65db4-7e38-4d51-bcef-bb0fa523979f/1/publication-web-resources/image/66.jpg')
}
.highlight3{
  background-image:url('https://adobeindd.com/view/publications/d2d65db4-7e38-4d51-bcef-bb0fa523979f/1/publication-web-resources/image/66.jpg')
}

#courses ul{
  list-style:none;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}

#courses ul li{
  margin: 20px 20px;
}
#courses ul li .card{
  width:15rem;
  border:0;
}

.cardbtn{
  background-color:#13411F;
  padding:10px 20px;
  outline:0;
  border:0;
  border-radius:200px;
  color:white;
}

.support{
    background-color:#FBD400;
    height:300px;
    
}

@media(max-width:768px){
.support{
    padding-top:20px;
    padding-bottom:20px;
    height:auto;
}
}

.prefooter{
    background-color:#BDBDBB;
    height:auto;
}

.py-10{
    padding-top:100px;
    padding-bottom:100px;
}

@media(max-width:768px){
    .pmobile{
        padding-top:40px;
        padding-bottom:40px;
    }
}


</style>
