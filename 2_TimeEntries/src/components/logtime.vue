<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input
         type="date"
         class="form-control"
         v-model="date"
         placeholder="Date"
        >
      </div>

      <div class="col-sm-6">
        <label>时间</label>
        <input
         type="number"
         class="form-control"
         v-model="totalTime"
         placeholder="Hours"
        >
      </div>
    </div>

    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input
         type="text"
         class="form-control"
         v-model="comment"
         placeholder="Comment"
        >
      </div>
    </div>

    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'LogTime',
    data () {
      return {
        date: '',
        totalTime: '',
        comment: ''
      }
    },
    methods: {
      save () {
        const plan = {
          name: 'Littlewin',
          image: 'http://7xpot0.com1.z0.glb.clouddn.com/16-12-20/28956487-file_1482226716996_dc59.jpg',
          date: this.date,
          totalTime: this.totalTime,
          comment: this.comment
        }
        this.$store.dispatch('savePlan', plan)
        this.$store.dispatch('addTotalTime', this.totalTime)
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="css" rel="stylesheet">

</style>
