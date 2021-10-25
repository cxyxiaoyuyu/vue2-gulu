<template>
    <div>
        <g-input v-model="message"></g-input>
        <g-input value="disabled" disabled></g-input>
        <g-input value="readonly" readonly></g-input>
        <div>
            <g-input v-model="message2" error="不能为空" @change="changeInput"></g-input>
        </div>
    </div>
</template>

<script>
import Input from '../../../src/components/input.vue'
export default {
    data(){
        return {
            message: 'hello vuepress',
            message2: ''
        }
    },
    methods: {
        changeInput(value){
            console.log('change Input',value)
        }
    },
    components: {
        'g-input': Input 
    },
}
</script>
