<template>

<div class="container py-5">
    <div class="col-12 d-flex align-items-center">
        <div class="col-6">
            <img class="img-fluid w-100" src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg">
        </div>
        <div class="col-6">
            <p>Curso: {{found.course}}</p>
            <p>Preço: {{found.price}}</p>
            <p>Carga Horária: {{found.hours}}</p>
            <p>Categoria: {{found.category}}</p>
            <p>Descrição: <br>{{found.description}}</p>
            <button type="submit" class="btn w-100 cardbtn">COMPRAR</button>
        </div>
    </div>
</div>


</template>


<script>

import Json from '../../assets/courses.json'

export default {
    data(){
        return{
            array:Json.Courses,
            found:[],
            
        }
    },

    mounted(){
        this.found=this.array.find(item => item.id==this.$route.params.id)
        console.log(this.found)
    }
}
</script>
<style>
.cardbtn{
  background-color:#13411F;
  padding:10px 20px;
  outline:0;
  border:0;
  border-radius:200px;
  color:white;
}

</style>
