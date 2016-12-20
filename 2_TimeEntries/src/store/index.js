import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  totalTime: 0,
  list: [
    {
      name: 'Littlewin',
      avatar: 'http://7xpot0.com1.z0.glb.clouddn.com/16-12-20/28956487-file_1482226716996_dc59.jpg',
      date: '2016-12-25',
      totalTime: '6',
      comment: '12月25日晚上，陪女朋友一起过圣诞节需要6个小时'
    }
  ]
}

export default new Vuex.Store({
  state
})
