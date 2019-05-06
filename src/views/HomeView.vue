<template lang="html">
  <div if="character-view">
    <CharacterList v-if="characters" :characters="characters"/>
  </div>
</template>

<script>
import CharacterList from '@/components/CharacterList';

export default {
  components: {CharacterList},
  data(){
    return {
      characters: [],
      selectedCharacter: null
    };
  },
  mounted(){
    fetch('https://rickandmortyapi.com/api/character/')
    .then(response => response.json())
    .then(charData => this.characters = charData.results);
  }
}
</script>

<style lang="css" scoped>
</style>
