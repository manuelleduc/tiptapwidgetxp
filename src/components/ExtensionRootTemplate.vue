<script setup lang="ts">
import {NodeViewWrapper, nodeViewProps, NodeViewContent} from "@tiptap/vue-3";

const props = defineProps(nodeViewProps);

function increment() {
  props.updateAttributes({
    count: props.node.attrs.count + 1
  })
}
</script>

<template>
  <node-view-wrapper>
    <div contenteditable="false">
      <div>Hello World {{ node.attrs.count }}</div>
      <div>
        <button @click="increment">increment</button>
      </div>
    </div>
    <node-view-content></node-view-content>
  </node-view-wrapper>
</template>

<style scoped>

</style>
