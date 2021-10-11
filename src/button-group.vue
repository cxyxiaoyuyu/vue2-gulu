<template>
    <div class="button-group" :class="iconPosition" @click="$emit('click')">
        <g-button class="button" icon-name="left" icon-position="icon-left">上一页</g-button>
        <g-button class="button" icon-name="right" icon-position="icon-right">下一页</g-button>
    </div>
</template>

<script>
    import Button from './Button'
    export default {
        components: {
            'g-button': Button
        }
    }
</script>

<style lang="scss" scoped>
    .button-group {
        display: inline-flex;
        vertical-align: middle;
        &>.button:first-child{
            margin-right: -1px;
            border-radius: 0;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
        &>.button:last-child{
            border-radius: 0;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            &>:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>

