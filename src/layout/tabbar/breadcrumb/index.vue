<template>
        <el-button type="primary" icon="Refresh" circle></el-button>
            <el-button type="primary" icon="FullScreen" circle></el-button>
            <el-button type="primary" icon="Setting" circle></el-button>
            <img src="../../../assets/images/f778738c-e4f8-4870-b634-56703b4acafe.gif"
                style="width: 40px; height: 40px; border-radius: 5px; margin-left: 20px;">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>退出</el-dropdown-item>
                        <el-dropdown-item>首页</el-dropdown-item>
                        <el-dropdown-item>
                            <a href="https://github.com/WangYIlo"> Git Hub</a>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
</template>

<script setup lang="ts">

</script>

<script lang="ts">
export default {
  name:'Breadcurmb'
}
</script>

<style scoped>

</style>