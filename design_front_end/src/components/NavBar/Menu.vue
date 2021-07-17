<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">首页</el-menu-item>
  <el-submenu index="2">
    <template slot="title">菜单</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
    <el-menu-item index="3" @click="gomotorcycles">赛车&活动</el-menu-item>
    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">个性化服务</a></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    gomotorcycles(){
      // this.$router.replace("/motorcycles")
      location.href = "/motorcycles"
    }
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>