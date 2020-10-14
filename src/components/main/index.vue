<template>
  <div class="container-fluid">
    <banner id="sns-banner"></banner>
    <about id="sns-about"></about>
<!--    <build-for id="sns-about-type"></build-for>-->
    <finance id="sns-finance"></finance>
    <want id="sns-want"></want>
  </div>
</template>

<script>
import Banner from "./Banner";
import About from "./About";
import BuildFor from "./BuildFor";
import Finance from "./Finance";
import Want from "./WantToKnow";

export default {
  components: {Banner, About, BuildFor, Finance, Want }
};
</script>
