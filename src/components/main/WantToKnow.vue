<template>
  <div class="wtk-container" style="background-image:url('/static/want-to-know/bg.png')">
    <div class="row">
      <div class="col">
        <div class="wtk-name">
          {{$t("wantToKnow.name")}}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="wtk-txt">
          {{$t("wantToKnow.txt")}}
          <span class="wtk-contact">{{$t("wantToKnow.contactUs")}}</span>
        </div>
      </div>
    </div>

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
  name: "WantToKnow"
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wtk-container {
  width: 100%;
  background: no-repeat center top;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  padding-top: 120px;
  padding-bottom: 120px;

  .wtk-name {
    font-size: 36px;
  }
  .wtk-txt {
    font-size: 18px;
    margin-top: 36px;
    width: 50%;
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

  .wtk-contact {
    color: red;
  }
}
</style>
