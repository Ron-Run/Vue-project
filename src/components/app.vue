<!--  -->
<template>
    <div class="head">
        <mt-header fixed title="测试项目" class="change"></mt-header>
        <transition>
            <router-view></router-view>
        </transition>
        

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon iconfont iconshoucang1"></span>
				<span class="mui-tab-label">首页</span>      
			</router-link>
			<router-link class="mui-tab-item" to="/message">   
				<span class="mui-icon iconfont iconzhifu"></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/communicate">
				<span class="mui-icon iconfont iconkefu1"></span>
				<span class="mui-tab-label">通讯录</span>   
			</router-link>
			<router-link class="mui-tab-item" to="/setting">
				<span class="mui-icon iconfont iconfenxiang-copy1"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
        
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';


export default {
//import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
//这里存放数据
        return {

        };
    },
//监听属性 类似于data概念
    computed: {},
//监控data中的数据变化
    watch: {},
//方法集合
    methods: {

    },
//生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
//生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
.head{
    overflow-x: hidden;
    padding-top: 40px;
    .change{
        font-size: 18px;
    }
}

.v-enter{
    opacity: 0;
    transform: translateX(100%)
}
.v-leave-to{
    transform: translateX(-100%)
}
.v-enter-active{
    transition: all .3s ease;
    position: absolute;
}


</style>