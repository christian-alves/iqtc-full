<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-nav">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">HOME <span class="sr-only">(Página atual)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">SOBRE</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">LEGALIZAÇÃO</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              CERTIFICADO POR COMPETÊNCIA
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <nuxt-link to="/course"> <a class="dropdown-item" href="#">DIPLOMA TÉCNICO POR COMPETÊNCIA</a> </nuxt-link>
              <a class="dropdown-item" href="#">CERTIFICADO VÁLIDO NOS ESTADOS UNIDOS</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              PLANO
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Ação</a>
              <a class="dropdown-item" href="#">Outra ação</a>
              <a class="dropdown-item" href="#">Algo mais aqui</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              MATERIAL
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">Ação</a>
              <a class="dropdown-item" href="#">Outra ação</a>
              <a class="dropdown-item" href="#">Algo mais aqui</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#contact">CONTATO</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
.bg-nav{
  background-color:#434341;
  padding:20px 0;
}


ul li a{
    font-weight:bold;
}
</style>
