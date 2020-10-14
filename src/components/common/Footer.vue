<template>
  <div class="footer-background">
    <div class="row">
      <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 footer-col">
        <div class="row">
          <div class="col text-center">
            <img class="footer-logo" :src="'/static/logo/top-nav-logo.png'" alt="">
          </div>
        </div>
      </div>
      <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 footer-col">
<!--        <div class="row">-->
<!--          <div class="col">{{$t("footer.about")}}</div>-->
<!--          <div class="col">{{$t("footer.docs")}}</div>-->
<!--          <div class="col">{{$t("footer.github")}}</div>-->
<!--          <div class="col">{{$t("footer.medium")}}</div>-->
<!--          <div class="col">{{$t("footer.twitter")}}</div>-->
<!--          <div class="col">{{$t("footer.discord")}}</div>-->
<!--        </div>-->
        <div class="row">
          <div class="col text-center">
            <a
              class="mr-sm-2 sns-navbar-txt scroll-bottom"
              href="https://t.me/Skyrimprotocol" target="_blank"
            >{{ $t("navbar.telegram") }}</a
            >
          </div>
          <div class="col text-center">
            <a
              class="mr-sm-2 sns-navbar-txt scroll-bottom"
              href="https://open.kakao.com/o/geb7pRmb" target="_blank"
            >{{ $t("navbar.kakaotalk") }}</a
            >
          </div>
          <div class="col text-center">
            <a
              class="mr-sm-2 sns-navbar-txt scroll-bottom"
              href="https://twitter.com/skyrimnet" target="_blank"
            >{{ $t("navbar.twitter") }}</a
            >
          </div>
          <div class="col text-center">
            <a
              class="mr-sm-2 sns-navbar-txt scroll-bottom"
              href="https://medium.com/@skyrimnetworkSNS" target="_blank"
            >{{ $t("navbar.medium") }}</a
            >
          </div>
          <div class="col text-center">
            <a
              class="mr-sm-2 sns-navbar-txt scroll-bottom"
              href="https://uniswap.info/token/0x8e3c8e2de3cced6250b4ec129a82af4d2d3cbc5f" target="_blank"
            >{{ $t("navbar.uniswap") }}</a
            >
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 footer-col">
        <div class="row">
          <div class="col text-center">
            {{$t("footer.copyRight")}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import $ from "jquery";

	export default {
		name: "Footer",
		methods: {
			scrollTo(targetId) {
				let $target = $("#" + targetId)
				$(window).scrollTop($target.offset().top)
			},
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.footer-background {
  color: white;
  padding: 60px 0;

  .footer-logo {
    height: 32px;
  }
  .footer-col {
    margin: 24px 0;
  }

  .sns-navbar-txt {
    font-size:17px;
    font-weight:300;
    color:white;
  }
}
</style>
