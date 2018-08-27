<template>
    <!--这是一个面包屑-->
    <div>
        <div>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="item in breadcrumbItems">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </div>

</template>

<script>
    export default {
        name: "breadcrumb",
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
