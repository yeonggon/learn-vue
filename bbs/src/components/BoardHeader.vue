<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info"> <!-- sm, md, lg, xl -->
      <b-navbar-brand href="#">
        Vue.js로 게시판 만들기
      </b-navbar-brand>

      <b-collapse is-nav id="nav-collapse">
        <b-navbar-nav>
          <b-nav-item to="/">공지사항</b-nav-item>
          <b-nav-item to="/board">자유게시판</b-nav-item>
          <b-nav-item href="#">구인구직</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>