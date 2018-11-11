import Vue from 'vue';
import store from './store/store';
import router from './router';
import VueParent from './component/parent.vue';

new Vue({
    router,
    store,
    el: '#app',
    components: {
        VueParent
    }
});