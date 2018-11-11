<template>
    <div class="parent">
        <div class="countTxt">
            {{countTxt}}
        </div>
        <div>
            {{count}}
        </div>
        <div>
            {{count2}}
        </div>
        <button @click="increment">
            +
        </button>
        <button @click="decrement">
            -
        </button>
        <vue-child></vue-child>
    </div>
</template>

<script>
import VueChild from './child.vue'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
export default {
    components: {
        VueChild
    },
    computed: {
        ...mapGetters('counterModule',['countTxt']),
        ...mapState({
            count2:state => `${state.counterModule.count}クリック`
        }),
        ...mapState('counterModule',['count']),
    },
    methods: {
        ...mapMutations('counterModule',['increment']),
        decrement(){
            this.$store.dispatch('counterModule/decrement')
        }
    }
}
</script>

<style scoped lang="scss">
    @mixin sp {
        @media print, screen and (max-width: 640px) {
            @content;
        }
    }
    .parent{
        padding: 10/640*100%;
        background:#eee;
        margin-top: 10px;
        @include sp{
            background: red;
        }
    }
</style>
