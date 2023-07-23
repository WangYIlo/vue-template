<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import {reqLogin} from '@/api/user'
import {ref,nextTick} from 'vue'

const user=ref({
  username: 'admin',
  password: '111111',
})

const test=async()=>{
  await reqLogin(user.value)
}



</script>



<style scoped lang="scss">

h1 {
  color: $bg;
}

</style>
