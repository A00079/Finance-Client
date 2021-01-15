<template>
  <div>
    <secondary-nav />
    <primary-nav/>
  </div>
</template>
<script>
import { PrimaryNav, SecondaryNav } from "./components";

export default {
  name: "Navbar",
  components: {
    PrimaryNav,
    SecondaryNav,
  },
};
</script>
<style scoped></style>
