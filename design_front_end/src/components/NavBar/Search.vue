<template>
  <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入内容"
      @select="handleSelect"
  >
  </el-autocomplete>


</template>

<script>
export default {
  data() {
    return {
      restaurants: [],
      state: '',
      timeout:  null
    };
  },
  methods: {
    loadAll() {
      return [
        { "value": "保时捷911", "address": "北京市朝阳区" },
        { "value": "卡宴2021", "address": "上海市长宁区淞虹路661号" },
        { "value": "保时捷性能解析", "address": "关于保时捷" },
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