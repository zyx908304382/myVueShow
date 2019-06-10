<template>
  <div>
    <div class="head">
        <span>vue demo</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {

      }
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .head {
      background-color: #3C3F41;
      border-bottom: 1px solid #E3E3E3;
      height: 60px;
  }

  .head > span:nth-child(1) {
      display: inline-block;
      height: 100%;
      line-height: 60px;
      margin-left: 25px;
      font-size: 30px;
      color: #FFFFFF;
  }
</style>
