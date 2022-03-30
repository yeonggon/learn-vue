<template>
  <div>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
import data from '@/data'

export default {
  name: "BoardTable",
  data() {
    return {
      items: data.Content
    }
  }
}
</script>

<style scoped>

</style>