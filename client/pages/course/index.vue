  <template>
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
  </template>
  <script>
    import Json from '../../assets/courses.json'

    export default {
        data(){
            return{
                courses:Json.Courses,
            }
        },

        computed: {
            filteredList() {
            return this.postList.filter(post => {
                return post.title.toLowerCase().includes(this.search.toLowerCase())
            })
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

.cardbtn{
  background-color:#13411F;
  padding:10px 20px;
  outline:0;
  border:0;
  border-radius:200px;
  color:white;
}

  </style>