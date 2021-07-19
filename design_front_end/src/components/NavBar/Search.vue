<template>
  <div id="root">
    <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
        @select="handleSelect"
    >
    </el-autocomplete>
    <div id="cli">
<!--      <router-link :to="this.path">-->
        <el-button type="primary" icon="el-icon-search" @click="searchGo">搜索</el-button>
<!--      </router-link>-->
    </div>
  </div>


</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      restaurants: [],
      state: '',
      timeout:  null,
    };
  },
  methods: {
    searchGo(){
      if (this.state === ''){
        this.$message({
          type:"warning",
          message:"请输入查询关键字：如 911"
        })
        this.path = "/index"
      }
      else {
        axios.get(this.API.API_SEARCH + this.state).then(res => {
          this.$store.commit("changesearchResult",res.data)
          this.$store.commit("changesearchname",this.state)
          // console.log(res.data)
          // for (let i = 0; i < res.data.length; i++) {
          //   console.log(res.data[i].object.carimage)
          // }
        })
        // this.path = 'search/' + this.state
        this.$router.push("/search")
      }
    },
    loadAll() {
      return [
        { "value": "911", "address": "北京市朝阳区" },
        { "value": "Taycan", "address": "上海市长宁区淞虹路661号" },
        { "value": "Macan", "address": "北京市朝阳区" },
        { "value": "Cayenne", "address": "Cayenne的过人之处" },
        { "value": "718", "address": "设计哲学" },
        { "value": "911 Turbo", "address": "刷新你认知的概念" },
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }
};
</script>
<style scoped>
#cli{
  position: absolute;
  left: 195px;
  top: 0;
}
</style>