<template>
  <div>
    <b-table striped hover :items="items" :fields="fields" @row-clicked="tableClicked"></b-table>
  </div>
</template>

<script>
import data from '@/data'

//Default 정렬
let items = data.Content.sort((o1, o2) => o2.content_id - o1.content_id)
items = items.map(d => {
  let userArr = data.User.filter(user => user.user_id === d.user_id);
  let user = userArr.length === 1 ? userArr[0] : null;
  return {...d, user}
})

console.log(items);

export default {
  name: "BoardTable",
  data() {
    return {
      fields: [
        {
          key: 'content_id',
          label: "글번호",
          sortable: true
        },
        {
          key: 'title',
          label: "제목",
          sortable: false
        },
        {
          key: 'user.name',
          label: "작성자",
          sortable: true
        },
        {
          key: 'created_at',
          label: '작성일',
          sortable: true,
          // Variant applies to the whole column, including the header and footer
          variant: 'danger'
        }
      ],
      items
    }
  },
  methods: {
    tableClicked(item, click, e) {
      console.log(item, click, e);
      this.$router.push('/board/' + item.content_id)

    }
  }
}
</script>

<style scoped>

</style>