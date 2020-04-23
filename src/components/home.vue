<!--  -->
<template>
  <div class="swiper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in swiperList" :key="item.url">
        <img :src="item.url" alt />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/news">
          <img src="/src/img/首页 (1).png" alt="">
          <div class="mui-media-body">Home</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="/src/img/购物车 (1).png" alt="">
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="/src/img/头像.png" alt="">
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="/src/img/tabar-2-active.png" alt="">
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="/src/img/定位.png" alt="">
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
        <img src="/src/img/已完成.png" alt="">
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
      
    </ul>
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
      swiperList: [
        {
          url:
            "https://img.alicdn.com/simba/img/TB17dBKCpY7gK0jSZKzSuuikpXa.jpg"
        },
        {
          url:
            "https://img.alicdn.com/simba/img/TB1ONeDDkL0gK0jSZFASuwA9pXa.jpg"
        },
        {
          url:
            "//img.alicdn.com/tfs/TB1fK5OCXP7gK0jSZFjXXc5aXXa-520-280.jpg_q90_.webp"
        },
        {
          url:
            "https://img11.360buyimg.com/cms/jfs/t19258/152/1811636526/227801/a1364da8/5ad85f8eNc5bface4.jpg"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.swiper {
  .mint-swipe {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
    
  }
  .mui-table-view{
      background-color: #fff;
       .mui-table-view-cell{
          border: none;
      }
      img{
          width: 32px;
      }
  }
}
</style>