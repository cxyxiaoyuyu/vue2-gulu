<template>
  <div>
    <icon-demo></icon-demo>
    <button-demo></button-demo>
    <collapse-demo></collapse-demo>
    <collapse-single-demo></collapse-single-demo>
    <grid-demo></grid-demo>
    <grid-responsive-demo></grid-responsive-demo>
    <layout-demo></layout-demo>
    <popover-demo></popover-demo>
    <popover-hover-demo></popover-hover-demo>
    <popover-close-demo></popover-close-demo>
    <tabs-demo></tabs-demo>
    <toast-demo></toast-demo>
  </div>
</template>

<script>
import IconDemo from "../src/demo/icon-demo.vue";
import ButtonDemo from "../src/demo/button-demo";
import CollapseDemo from "../src/demo/collapse-demo.vue";
import CollapseSingleDemo from "../src/demo/collapse-single-demo.vue";
import GridDemo from "../src/demo/grid-demo.vue";
import GridResponsiveDemo from "../src/demo/grid-responsive-demo.vue";
import LayoutDemo from '../src/demo/layout-demo.vue'
import PopoverDemo from '../src/demo/popover-demo.vue'
import PopoverHoverDemo from '../src/demo/popover-hover-demo.vue'
import PopoverCloseDemo from '../src/demo/popover-close-demo.vue'
import TabsDemo from '../src/demo/tabs-demo.vue'
import ToastDemo from '../src/demo/toast-demo.vue'
export default {
  components: {
    IconDemo,
    ButtonDemo,
    CollapseDemo,
    CollapseSingleDemo,
    GridDemo,
    GridResponsiveDemo,
    LayoutDemo,
    PopoverDemo,
    PopoverHoverDemo,
    PopoverCloseDemo,
    TabsDemo,
    ToastDemo,
  },
};
</script>
