<template>
  <v-app>
    <Header subtitle="HI!" />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  daa: () => ({
    //
  }),
};
</script>
<style lang="scss">
@mixin button-opaque-1 {
  border-radius: 3px !important;
  border: 0 !important;
  text-decoration: none !important;
  align-items: center !important;
  background-color: $background-btn-color-opaque !important;
  box-shadow: none !important;
  color: #ffffff !important;
  display: flex !important;
  font-weight: bold !important;
  height: $size-default-icons !important;
  line-height: $size-default-icons !important;
  margin: 0 4px 0 0 !important;
  padding: 0 !important;
  white-space: nowrap !important;
  min-width: $size-default-icons !important;
}
</style>
