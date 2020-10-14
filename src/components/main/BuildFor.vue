<template>
  <div class="build-for-container" style="background-image:url('/static/build-for/bf-bg.png')">
    <div class="row">
      <div class="bf-name"> {{$t("buildFor.name")}}</div>
    </div>

    <div class="row d-flex justify-content-around">
      <div class="col col-sm-12 bf-col1">
        <div class="row">
          <div class="col">
            <div class="bf-desc-tit"> {{$t("buildFor.descTit1")}} </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="bf-desc-txt"> {{$t("buildFor.descTxt1")}} </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="bf-lm1"> {{$t("buildFor.learnMore")}} </div>
          </div>
        </div>
      </div>
      <div class="col col-sm-12 bf-col2">
        <div class="row">
          <div class="col">
            <div class="bf-desc-tit"> {{$t("buildFor.descTit2")}} </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="bf-desc-txt"> {{$t("buildFor.descTxt2")}} </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="bf-lm2"> {{$t("buildFor.learnMore")}} </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row d-flex justify-content-around">
      <div class="col col-sm-12 bf-col2">
        <div class="row">
          <div class="col">
            <div class="bf-desc-tit"> {{$t("buildFor.descTit3")}} </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="bf-desc-txt"> {{$t("buildFor.descTxt3")}} </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="bf-lm2"> {{$t("buildFor.learnMore")}} </div>
          </div>
        </div>
      </div>
      <div class="col col-sm-12 bf-col2">
        <div class="row">
          <div class="col">
            <div class="bf-desc-tit"> {{$t("buildFor.descTit4")}} </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="bf-desc-txt"> {{$t("buildFor.descTxt4")}} </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="bf-lm2"> {{$t("buildFor.learnMore")}} </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "BuildFor"
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .build-for-container {
    width: 100%;
    background: no-repeat center top;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    padding: 120px 0;
    position: relative;

    .bf-name {
      padding-left: 10%;
      font-size: 28px;
    }

    .bf-col1 {
      margin: 36px 0;
      padding: 36px;
      max-width: 500px;
      min-height: 400px;
      border: solid 2px #fff !important;
    }
    .bf-col2 {
      margin: 36px 0;
      padding: 36px;
      max-width: 500px;
      min-height: 400px;
      background-color: white;
      color: black;
    }

    .bf-desc-tit {
      font-size: 24px;
      width: 60%;
      min-height: 72px;
    }
    .bf-desc-txt {
      margin-top: 36px;
      margin-bottom: 128px;
      font-size: 18px;
      width: 80%;
      min-height: 144px;
    }
    .bf-lm1,
    .bf-lm2 {
      position: absolute;
      bottom: 36px;
      left: 15px;
      font-size: 18px;
      text-decoration: underline;
    }
    .bf-lm2 {
      color: red;
    }
  }
</style>
