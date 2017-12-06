<style lang="less">
    @import "./home.less";
</style>
<template>
    <div class="home-main">
        <Breadcrumb>
            <BreadcrumbItem to="/">Home</BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'home',
    data () {
        return {
            //
        };
    }
};
</script>
