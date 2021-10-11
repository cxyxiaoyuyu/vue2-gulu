<template>
    <div>
        <g-input v-model="message"></g-input>
        <g-input value="disabled" disabled></g-input>
        <g-input value="readonly" readonly></g-input>
        <g-input value="" error="不能为空" @change="changeInput"></g-input>
    </div>
</template>

<script>
import Input from '../../../src/input.vue'
export default {
    data(){
        return {
            message: 'hello vuepress'
        }
    },
    methods: {
        changeInput(){
            console.log('change Input')
        }
    },
    components: {
        'g-input': Input 
    },
}
</script>
