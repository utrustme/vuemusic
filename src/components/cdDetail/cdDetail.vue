<template>
  <div></div>
</template>

<script>
import { getDiscInfo } from 'api/recommend'
import { ERR_OK } from 'api/config'
export default {
  name: 'dicInfo',
  data() {
    return {}
  },
  created() {
    this._getDiscInfo(this.$route.query.id, 15, 15)
  },
  methods: {
    _getDiscInfo(id) {
      getDiscInfo(id).then(res => {
        if (res.code === ERR_OK) {
          console.log(res)
          // this.recommends = res.data.slider
        }
      })
    }
  }
}
</script>
