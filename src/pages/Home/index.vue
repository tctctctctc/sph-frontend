<template>
  <!-- 商品分类 -->
  <product-classification :fixedDisplay="true" />
</template>

<script>
import ProductClassification from "@/components/ProductClassification/index.vue";

export default {
  name: "HomeVue",
  components: {
    ProductClassification,
  },
};
</script>