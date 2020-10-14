<template>
  <div class="about-container">
    <div class="row b-name text-left">
      <div class="col a-name-col">{{ $t("about.title") }}</div>
    </div>
    <div class="row">
      <div class="col a-desc-col"> {{ $t("about.desc")}}</div>
    </div>
    <div class="row">
      <div class="col a-how-row"> {{$t("about.how")}} </div>
    </div>
    <div class="row">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div class="row">
          <div class="col">
            <img class="a-how-pic img-fluid" :src="'/static/about/01.png'" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="a-step-tit">
              {{$t("about.step1Tit")}}
            </div>
          </div>
        </div>
<!--        <div class="row">-->
<!--          <div class="col">-->
<!--            <div class="a-step-txt">-->
<!--              {{$t("about.step1Txt")}}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div class="row">
          <div class="col">
            <img class="a-how-pic img-fluid" :src="'/static/about/02.png'" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="a-step-tit">
              {{$t("about.step2Tit")}}
            </div>
          </div>
        </div>
<!--        <div class="row">-->
<!--          <div class="col">-->
<!--            <div class="a-step-txt">-->
<!--              {{$t("about.step2Txt")}}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
        <div class="row">
          <div class="col">
            <img class="a-how-pic img-fluid" :src="'/static/about/03.png'" alt="">
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div class="a-step-tit">
              {{$t("about.step3Tit")}}
            </div>
          </div>
        </div>
<!--        <div class="row">-->
<!--          <div class="col">-->
<!--            <div class="a-step-txt">-->
<!--              {{$t("about.step3Txt")}}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .about-container {
    height: 100%;
    position: relative;

    padding-top: 120px;
    padding-bottom: 120px;

    .a-name-col {
      max-width: 600px;
      font-size: 42px;
    }
    .a-desc-col {
      max-width: 720px;
      font-size: 20px;
      margin-top: 48px;
    }

    .a-how-row {
      margin-top: 48px;
      font-size: 28px;
    }
    .a-how-pic {
      margin-top: 24px;
      width: 100%;
      height: auto;
    }
    .a-step-tit {
      margin-top: 24px;
      font-size: 18px;
      min-height: 56px;
    }
    .a-step-txt {
      margin-top: 18px;
      font-size: 15px;
    }
  }
</style>
