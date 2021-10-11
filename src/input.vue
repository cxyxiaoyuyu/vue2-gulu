<template>
    <div class="input-wrap">
        <input class="input" :value="value" :disabled="disabled" :readonly="readonly"
        :class="{error}"
         @change="$emit('change',$event.target.value)"
         @focus="$emit('focus',$event.target.value)"
         @input="$emit('input',$event.target.value)"
         @blur="$emit('blur',$event.target.value)"
        />  
        <template v-if="error">
            <g-icon icon="error" class="errorIcon"></g-icon>
            <span class="errorMessage">{{ error }}</span>
        </template>
    </div>
    
</template>
<script>
    import Icon from './icon'
    export default {
        props: {
            value: {
                type: String,
            },
            disabled:{
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        },
        components: {
            'g-icon': Icon
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-radius: 4px;
    $font-size: 14px;
    $border-color: #ddd;
    $border-hover-color: #999;
    $focus-shadow-color: rgba(0,0,0,.3); 
    $red:  #F1453d;
    .input-wrap {
        font-size: $font-size;
        margin-bottom: 20px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        >:not(:last-child) {
            margin-right: .3em;
        }
        >.input {
            height: $height;
            border-radius: $border-radius;
            font-size: 14px;
            padding: 0 8px;
            border: 1px solid $border-color;
            &:hover {
                border: 1px solid $border-hover-color;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $focus-shadow-color;
                outline: none;
            }
            &[disabled] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
            &[readonly] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
        }
        >.input.error {
            border:1px solid $red;
                       
        }
        >.errorIcon {
            fill: $red;
        }
        >.errorMessage{
            color: $red;
        }
        
    }
    
</style>
