import Vue from 'vue'
import Vue from 'vuex'

Vue.use(Vuex);

const state = {
    totalTime: 0,
    list:[{
        name:'胡原',
        avatar: 'https://sfault-avatar.b0.upaiyun.com/147/233/147223148-573297d0913c5_huge256',
        date: '2016-12-25',
        totalTime: '6',
        comment: '12月25日晚上，陪女朋友一起过圣诞节需要6个小时'
    }]
};

export default new Vuex.Store({
    state,
})