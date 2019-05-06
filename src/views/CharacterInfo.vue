<template lang="html">
  <div class="character-info" v-if="character">
    <Header :text="character.name"/>
    <img :src="character.image" width="300px" height="300px"/>
    <p>Status: {{character.status}}</p>
    <p>Species: {{character.species}}</p>
    <p>Type(if known): {{character.type}}</p>
    <p>Gender: {{character.gender}}</p>
    <p>Origin Planet: {{character.origin.name}}</p>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {Header},
  props: ['character'],
    mounted(){
      if(!this.character) this.$router.push({name: 'characters'});

}
}
</script>

<style lang="css" scoped>
</style>
