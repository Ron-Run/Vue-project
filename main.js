//import './src/css/index.css'; //导入css样式  导入 非js模块时用 import
//import './src/css/test.less';  // 导入less样式
import './src/font/iconfont.css'; // 导入字体图标
import Vue from 'vue'; //  导入vue模块
import App from './src/components/app.vue'; // 导入vue组件
import router from './router.js' //  导入vue-router
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './src/lib/mui/dist/css/mui.min.css';

Vue.use(MintUI)

const app = new Vue({
    el: "#app",
    data: {

    },
    methods: {

    },
    render: c => c(App),
    router
})