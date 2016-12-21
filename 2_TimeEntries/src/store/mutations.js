import * as types from './mutation-types'

export default {
  // 增加总时间
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime += time
  },
  // 减少总时间
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime -= time
  },
  // 新增计划
  [types.SAVE_PLAN] (state, plan) {
    // 设置默认值
    const avatar = 'http://7xpot0.com1.z0.glb.clouddn.com/16-12-20/28956487-file_1482226716996_dc59.jpg'
    state.list.push(
      Object.assign({name: 'Littlewin', avatar: avatar}, plan)
    )
  },
  // 删除某计划
  [types.DELETE_PLAN] (state, index) {
    state.list.splice(index, 1)
  }
}
