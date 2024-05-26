<template lang="">
    <div class="hero my-5">
        <div  class="container">
      <div class="hero-section d-flex">
        <div class=" text-hero  "> 
       <h1>BRING YOUR STATIC MENU CONTACT TO LIFE</h1>
       <p>Qlist provides a digital menu suite.Convert your service menus , items lists,dishes and beverages,brochures and many more into abeautiful and reaslistic digital menu , an interactive online menu and more</p>
       </div>
       <!-- <div class="img-hero col-md-3"> 
       <img class="image-hero"src="../assets/Group-93.png" width="100%">
       </div> -->
       <div class="img-hero">
       <!-- <img class="image-hero"src="../assets/Group-93.png" > -->
    </div>
      </div>
        </div>
    
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
 .hero{
    background-image: url('/src/assets/Group-93.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top right;
    background-size: 25%;
 }
 @media (max-width: 768px) {
  .hero {
    background: none;
  }
}
    .text-hero{
        /* display: flex; */
        width: 600px !important;
    margin-top: 8%;
    }
    .image-hero{
        margin-left: 250px;
    width: 350px;
    }
    .hero-section{
        display: flex;
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
    }
    @media (max-width: 768px) {
  .image-hero {
    display: none;
  }
}
</style>