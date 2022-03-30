<template>
  <div>
    {{detailId}}
  </div>
</template>

<script>


export default {
  name: "BoardDetail",
  data() {
    let id = this.$route.params.id
    return {
      detailId : id
    }
  }
}
</script>

<style scoped>

</style>