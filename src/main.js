// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
Vue.config.productionTip = false;
import VueRouter from 'vue-router';
import './common/stylus/index.styl';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);



//定义（路由）组件
import goods from 'components/goods/goods';
import seller from 'components/seller/seller';
import ratings from 'components/ratings/ratings';

//定义路由
let routes = [
    {path: '/goods', component: goods},
    {path: '/seller', component: seller},
    {path: '/ratings', component: ratings},
];

//创建router实例
let router = new VueRouter({
    mode:"history",
    linkActiveClass:'active',
    routes
});

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App},
    data:{
	     eventHub:new Vue()
    }
});

// router.go('/goods');

/*
 import goods from './components/goods/goods';
 import seller from './components/seller/seller';
 import ratings from './components/ratings/ratings';


 Vue.use(VueRouter);

 let app=Vue.extend(App);
 let router=new VueRouter();

 router.map({
 '/goods':{
 component:goods,
 },
 '/seller':{
 component:seller,
 },
 '/ratings':{
 component:ratings,
 }
 });

 router.start(app,'#app');




 */
/*

 let app = Vue.extend(App);

 let router = new VueRouter({

 });

 router.map({
 '/goods': {
 component: goods
 },
 '/ratings': {
 component: ratings
 },
 'seller': {
 component: seller
 }
 });

 router.start(app, '#app');

 router.go('/goods');*/
