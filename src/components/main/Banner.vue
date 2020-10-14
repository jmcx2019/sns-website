<template>
  <div class="banner-container" style="background-image:url('/static/banner/bg.png')">
    <div class="row b-name text-left">
      <div class="col b-name-col">{{ $t("banner.name1") }}</div>
    </div>
    <div class="row b-name text-left">
      <div class="col b-name-col">{{ $t("banner.name2") }}</div>
    </div>
<!--    <div class="row b-desc1 text-left">-->
<!--      <div class="col">{{ $t("banner.desc1") }} </div>-->
<!--    </div>-->
<!--    <div class="row b-desc2 text-left">-->
<!--      <div class="col">{{ $t("banner.desc2") }}</div>-->
<!--    </div>-->

    <div class="row b-get-info">
      <div class="col">{{ $t("banner.getInfo") }}</div>
    </div>
    <div class="row b-get-info-submit">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <input type="text" class="form-control input-get-info" id="usr">
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <input type="submit" class="btn btn-info btn-get-info" value="Submit">
      </div>
      <div class="col-xl-4 col-lg-4"></div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.banner-container {
  width: 100%;
  background: no-repeat center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  padding-top: 120px;
  padding-bottom: 120px;

  .b-name {
    font-size: 42px;
    font-weight: 800;
    color: rgba(255, 255, 255, 1);
  }
  .b-name-col {
    max-width: 80%;
  }

  .b-desc1,
  .b-desc2 {
    font-size: 18px;
    color: rgba(255, 255, 255, 1);
  }
  .b-desc1{
    margin-top: 12px !important;
  }
  .b-desc2{
    margin-top: 8px !important;
  }
  .b-get-info {
    margin-top: 72px !important;
  }
  .input-get-info {
    margin-top: 15px;
  }
  .btn-get-info {
    background-color: #ed5851;
    width: 120px;
    margin-top: 15px;
  }
}
</style>
