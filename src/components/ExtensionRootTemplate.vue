<script setup lang="ts">
import {NodeViewContent, nodeViewProps, NodeViewWrapper} from "@tiptap/vue-3";
import DraggableWrapper from "./DraggableWrapper.vue";

const props = defineProps(nodeViewProps);

function increment() {
  props.updateAttributes({
    count: props.node.attrs.count + 1
  })
}
</script>

<template>
  <node-view-wrapper class="vue-component">
    <draggable-wrapper>
      <div contenteditable="false">
        <div>Hello World {{ node.attrs.count }}</div>
        <div>
          <button @click="increment">increment</button>
        </div>
      </div>
      <node-view-content class="content is-editable"></node-view-content>
    </draggable-wrapper>
  </node-view-wrapper>
</template>

<style lang="scss" scoped>

/* Vue component */
.vue-component {
  background-color: var(--purple-light);
  border: 2px solid var(--purple);
  border-radius: 0.5rem;
  margin: 2rem 0;
  position: relative;

  label {
    background-color: var(--purple);
    border-radius: 0 0 0.5rem 0;
    color: var(--white);
    font-size: 0.75rem;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
    position: absolute;
    top: 0;
  }

  .content {
    margin-top: 1.5rem;
    padding: 1rem;

    &.is-editable {
      border: 2px dashed #e2e2e2;
      border-radius: 0.5rem;
      margin: 2.5rem 1rem 1rem;
      padding: 0.5rem;
    }
  }
}
</style>
