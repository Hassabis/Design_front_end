import Vue from 'vue'
import Vuex from 'vuex'
import createVuexAlong from "vuex-along";

const moduleA = {
    state: {
        a1: "hello",
        a2: "world",
    },
};

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    modules: {
        ma: moduleA,
    },
    plugins: [
        createVuexAlong({
            // 设置保存的集合名字，避免同站点下的多项目数据冲突
            name: "hello-vuex-along",
            local: {
                list: ["ma"],
                // 过滤模块 ma 数据， 将其他的存入 localStorage
                isFilter: true,
            },
            session: {
                // 保存模块 ma 中的 a1 到 sessionStorage
                list: ["ma.a1"],
            },
        }),
    ],
});
