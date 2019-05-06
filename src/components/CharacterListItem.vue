<template lang="html">
  <div class="character-list-item">
    <div class="character-list-name">
      <link href="https://fonts.googleapis.com/css?family=Creepster" rel="stylesheet">
      <p>{{character.name}}</p>
    </div>
    <img :src="character.image" width="150px" height="150px"/>
    <router-link :to="{ name: 'charInfo', params: {character} }">Get Schwifty!</router-link>
  </div>
</template>

<script>
export default {
  props: ['character']
}
</script>

<style lang="css" scoped>
.character-list-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
}

.character-list-name {
  color: #97ce4c;
  font-family: 'Creepster', cursive;
  font-size: 48px;
}
</style>
