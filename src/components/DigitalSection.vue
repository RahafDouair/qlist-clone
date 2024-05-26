<template lang="">
    <div class="digital-section">
        <div class="container digital py-4">
        <div class="sections flex-wrap d-flex justify-content-space-around">
        <div class="section-img">
        <img src="../assets/pexels-andrea-piacquadio-3784317.png" class="girl-img" width="300px">
        <img src="../assets/Rectangle-7.png" width="230px">
        </div>
        <div class="section-list my-3">
        <h2>Your Digital reach your business</h2>
        <div class="first-sect d-flex justify-space-between">
        <div class="box-sect">
            <fa icon="dollar" class="bg-light" ></fa>

        </div>
        <div class="text">
        <h6>successfully Business
        </h6>
        <p>Some quick example text to build on the card title and mak</p>
        </div>
         </div>
        <div class="second-sect d-flex justify-space-between">
            <div class="box-sect">
        <fa icon="users" fade ></fa>
        </div>
            <div class="text">
        <h6>Wider Reach
        </h6>
        <p>Some quick example text to build on the card title and mak</p>
        </div>
        </div>
        <div class="third-sect d-flex justify-space-between">
            <div class="box-sect">
                <fa icon="message" beat ></fa>

        </div>
            <div class="text">
        <h6>Up-To-date
        </h6>
        <p>Some quick example text to build on the card title and mak.</p>
        </div>
        </div>

        </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style >
.first-sect ,.second-sect ,.third-sect{
    display:flex;
    justify-content:space-around;
    margin-top:40px
}
    .digital{
        background:#fff;
    }
    .sections{
        justify-content: space-around;
    }
    .girl-img{
        position:absolute
    }
    .box-sect{
    background: darkgrey;
    height: 42px;
    padding: 9px 6px;
    border-radius: 5px;
    width: 34px;
    }
    
</style>