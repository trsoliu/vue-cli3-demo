<style lang="scss" scoped>
@import "./systemMessage.scss";
</style>
<template>
	<div class="systemMessage" v-if="status">
		<!--<template v-if="!!mg">-->
		<Icon type="ios-alert" size="20" />{{msg}}
		<!--</template>-->
	</div>
</template>
<script>
export default {
  props: {
    msg: {
      type: String,
      default: "当前网络不可用，请检查你的网络设置"
    }
  },
  data() {
    return {
      status: false
    };
  },
  created() {
    let t = this;
    window.ononline = function() {
      t.status = false;
    };
    window.onoffline = function() {
      t.status = true;
    };
  }
};
</script>
