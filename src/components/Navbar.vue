<template lang="">
    <div>
        <nav class="navbar navbar-expand-lg ">
 <div class ="container">

    <a class="navbar-brand" href="#">
<img src="@/assets/logo.png" alt="">
    </a>

 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse mx-5" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto mx-5">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Procces</a>
      </li>
       <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    
    <li class="nav-item">
        <a class="nav-link" href="#">Testmonials</a>
      </li>
    </ul>
    <div  class="buttons d-flex mx-5">
        <button type="button" class="btn ">Login </button>
<button type="button" class="btn btn-custom">Get Started</button>
</div>



  </div>
 </div>
</nav>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .btn-custom{
        background-color:#a883ee !important;
        color:white;
        width: 157px;
    }
    .nav-link{
        font-weight:bold;
    }
    .active{
        color:#a883ee;
    }
</style>