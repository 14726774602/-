import Vue from 'vue'; //引入vue
import Vuex from 'vuex'; //引入vuex依赖


Vue.use(Vuex); //挂载到vue


const state = { //定义全局变量
    showFooter: true,
    changableNum: 0
}
const getters = { //实时监听state值的变化(最新状态) 
    isShow(state) { //方法名随意,主要是来承载变化的showFooter的值
        return state.showFooter
    },
    getChangedNum(state) { //方法名随意,主要是用来承载变化的changableNum的值
        return state.changebleNum
    }
}
const mutations = {
    show(state) { //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.showFooter = true;
    },
    hide(state) { //同上
        state.showFooter = false;
    },
    newNum(state, sum) { //同上，这里面的参数除了state之外还传了需要增加的值sum
        state.changableNum += sum;
    }
};
const store = new Vuex.Store({ //将方法挂载到store中
    state,
    getters,
    mutations
});

export default store;