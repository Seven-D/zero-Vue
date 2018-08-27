<template>
    <div style="background-color: #f8f8f8;min-height:800px">
        <router-view name="myHeader"></router-view>
        <div style="margin-top:5px">
            <el-row :gutter="20">
                <el-col :span="4">
                    <router-view name="myNaviMenu"></router-view>
                </el-col>
                <el-col :xs="20" :sm="20" :md="20" :lg="20">
                    <router-view name="myBreadcrumb"></router-view>
                </el-col>
                <div>
                    <router-view/>
                </div>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {}
        }
    }
</script>

<style>

</style>
