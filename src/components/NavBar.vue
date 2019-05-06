<template lang="html">
<div class="NavBar">
  <router-link :to="{ name: 'home', params: {} }">Home</router-link>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.NavBar {
display: flex;
flex-direction: row;
list-style: none;
background-color: darkgrey;
height: 50px;
margin: auto;
}
</style>
