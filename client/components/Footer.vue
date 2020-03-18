<template>
<div class="footerclass">
  <div class="socialicons text-center d-flex align-items-center justify-content-center">
          <div class="social justify-content-center">           
            <a href="#" class="ic col-12 col-md-4 " :title="instagramTooltip">
              <i class="fa-5x fa fa-instagram"></i>
            </a>
            <a href="#" class="ic pm col-12 col-md-4 " :title="youtubeTooltip">
              <i class="fa-5x fa fa-youtube-play"></i>
            </a>
            <a href="#" class="ic col-12 col-md-4 " :title="facebookTooltip">
              <i class="fa-5x fa fa-facebook"></i>
            </a>
          </div>
  </div>
  <div class="linefooter w-100 d-block d-md-flex container-fluid text-center">
    <div class="col-12 col-md-3 d-flex justify-content-between">
      <a >Termos de uso</a>
      <a >Política de Privacidade</a>
    </div>
    <div class="col-12 col-md-6 d-flex justify-content-center pmobile">
      <a>ICBTC Instituto de Certificação Brasileira do Trabalho por Competência.</a>
    </div>
    <div class="col-12 col-md-3 d-flex justify-content-center justify-content-md-end">
      <p>Desenvolvido por<a> Acelera.xyz</a></p>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'VmFooter',



    data () {
      return {
        youtubeTooltip: 'Follow us on YouTube',
        facebookTooltip: 'Follow us on Facebook',
        instagramTooltip: 'Follow us on Instagram',

      }
    }

}
</script>

<style scoped>

@media(max-width:768px){
.pmobile{
  padding-top:30px;
  padding-bottom:30px;
}
.pm{
  margin-top:50px!important;
}
}

 .footer {
   color: black;
   background-color:#FFFFFF;
 }

.linefooter{
  background-color:#F9F9F9;
  padding-top:30px;
  padding-bottom:30px;
}

 .socialicons{
   height:100%;
   padding-top:60px;
   padding-bottom:60px;
 }

 .ic{
   margin-left:40px;
   margin-right:40px;
   color:#BDBDBD;
 }

 .ic:hover{
   color:#919191;
 }



</style>
