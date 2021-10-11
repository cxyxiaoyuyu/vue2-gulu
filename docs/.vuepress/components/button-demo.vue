<template>
    <div>
        <g-button>按钮</g-button>
        <g-button icon-name="setting">按钮</g-button>
        <g-button icon-name="setting" :loading="loading1">加载</g-button>
        <g-button icon-name="setting" icon-position="icon-right" :loading="loading2" @click="loading2=!loading2">设置</g-button>
        <g-button icon-name="download" icon-position="icon-right" :loading="loading3" @click="loading3=!loading3">下载</g-button>
        <g-button disabled>下载</g-button>
    </div>
</template>

<script>
import Button from '../../../src/button.vue'
export default {
    data(){
        return {
            loading1: true,   
            loading2: false,   
            loading3: false,   
        }
    },
    components: {
        'g-button': Button
    },
}
</script>

    