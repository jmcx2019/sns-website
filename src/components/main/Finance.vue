<template>
  <div class="finance-container">
    <div class="row">
      <div class="col">
        <div class="f-name">
          {{$t("finance.name")}}
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="f-txt">
          {{$t("finance.txt")}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Finance"
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.finance-container {
  width: 100%;
  padding: 120px 0;
  position: relative;

  .f-name {
    font-size: 32px;
  }
  .f-txt {
    margin-top: 36px;
    font-size: 18px;
    width: 60%;
  }
}
</style>
