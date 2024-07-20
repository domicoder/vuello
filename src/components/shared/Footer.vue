<template>
  <footer dark padless>
    <v-card flat tile color="background-color-base-1" class="text-center">
      <v-card-text>
        <v-btn
          v-for="(socialMedia, index) in socialMediaIcons"
          :key="index"
          icon
          class="white--text mx-4"
          :href="socialMedia.link"
          target="_blank"
        >
          <v-icon size="24px">{{ socialMedia.icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        <div class="pl-5 pr-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          facilis facilis temporibus quod minima enim dolorem vero consequuntur
          quidem ratione dignissimos quam eos cumque, sunt non, cum consectetur!
          Maxime, fuga!
        </div>
      </v-card-text>
      <v-divider class="white--text"></v-divider>
      <v-card-text class="white--text">
        {{ actualYear }} – Made with
        <v-icon size="16px" color="white">mdi-heart</v-icon> in Dominican
        Republic
      </v-card-text>
    </v-card>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => {
    return {
      socialMediaIcons: [
        { link: "https://twitter.com/yandertz", icon: "mdi-twitter" },
        {
          link: "https://www.linkedin.com/in/sanchezyander/",
          icon: "mdi-linkedin",
        },
        { link: "https://github.com/domicoder", icon: "mdi-github" },
      ],
    };
  },
  computed: {
    actualYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
<style lang="scss" scoped>
$color-primary-base: #2f4154;
$color-secondary-base-1: #00ffcf;
$color-secondary-base-2: #24b39a;
$color-secondary-base-3: #26bea4;
$color-secondary-base-4: #fde67d;
$background-btn-color-opaque: rgba(255, 255, 255, 0.3);

.background-color-base-1 {
  background-color: $color-primary-base !important;
  border-color: $color-primary-base !important;
}
</style>
