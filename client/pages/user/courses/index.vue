<template>
  <div id="courses">
    <div class="my-5">
      <div class="container-fluid">
        <div class="container-fluid">
          <h1>Meus Cursos</h1>
        </div>
      </div>
      <div class="container-fluid">
        <ul class="">
          <li v-bind:key="course.id" v-for="course in courses">
            <nuxt-link :to="{name: 'course-id', params:{id: course.id}}">
              <div class="card">
                <img class="card-img-top" src="https://adobeindd.com/view/publications/d2d65db4-7e38-4d51-bcef-bb0fa523979f/1/publication-web-resources/image/66.jpg" alt="Card image cap">
                <div class="card-body">
                  <p>{{course.name}}</p>
                  <p>{{course.category}}</p>
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
    <div class="my-5">
      <div class="container-fluid">
        <div class="container-fluid">
          <h1>Cursos Pendentes</h1>
        </div>
        <ul>
          <li v-bind:key="course.id" v-for="course in courses">
            <nuxt-link :to="{name: 'course-id', params:{id: course.id}}">
              <div class="card">
                <img class="card-img-top" src="https://adobeindd.com/view/publications/d2d65db4-7e38-4d51-bcef-bb0fa523979f/1/publication-web-resources/image/66.jpg" alt="Card image cap">
                <div class="card-body">
                  <p>{{course.name}}</p>
                  <p>{{course.category}}</p>
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
    <div class="my-5">
      <div class="container-fluid">
        <div class="container-fluid">
          <h1>Lista de desejo</h1>
        </div>
        <ul>
          <li v-bind:key="course.id" v-for="course in courses">
            <nuxt-link :to="{name: 'course-id', params:{id: course.id}}">
              <div class="card">
                <img class="card-img-top" src="https://adobeindd.com/view/publications/d2d65db4-7e38-4d51-bcef-bb0fa523979f/1/publication-web-resources/image/66.jpg" alt="Card image cap">
                <div class="card-body">
                  <p>{{course.name}}</p>
                  <p>{{course.category}}</p>
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
</template>

<script>
  import Json from "~/assets/courses.json";
  export default {
    data(){
      return{
        courses:Json.Courses,
        input:''
      }
    }
  }
</script>

<style>
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
</style>
