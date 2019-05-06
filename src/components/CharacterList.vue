<template lang="html">
<div class="character-list">
  <CharacterListItem v-for="character in characters" :character="character"/>
</div>
</template>

<script>
import CharacterListItem from '@/components/CharacterListItem.vue'

export default {
  props: ['characters'],
  components: {CharacterListItem}
}
</script>

<style lang="css" scoped>
.character-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 500px;
  overflow: auto;
  border: solid 3px grey;
  background-image: url("https://images.alphacoders.com/876/thumb-1920-876589.jpg");
  background-size: cover;
  background-position: center;
  font-weight: bold;
  font-family: helvetica, 'sans-serif';
  font-size: 24px;
}
</style>
