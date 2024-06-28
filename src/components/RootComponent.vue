<script setup>
import {Editor, EditorContent} from "@tiptap/vue-3";
import {StarterKit} from "@tiptap/starter-kit";
import MyExtension from "../extension";
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css';
import VCodeBlock from '@wdns/vue-code-block';
import sb from 'simply-beautiful';
const beautify = sb.html;

const content = "<p>\n" +
    "          This is still the text editor you’re used to, but enriched with node views.\n" +
    "        </p>\n" +
    "        <vue-component></vue-component>\n" +
    "        <p>\n" +
    "          Did you see that? That’s a Vue component. We are really living in the future.\n" +
    "        </p>"

const editor = new Editor({
  extensions: [StarterKit, MyExtension],
  content
})
</script>

<template>
  Editor:
  <editor-content :editor="editor"/>
  Content (json):
  <vue-json-pretty :data="editor.getJSON()"></vue-json-pretty>
  Content (html):
  <v-code-block :code="beautify(editor.getHTML())" highlightjs lang="html"></v-code-block>
</template>

<style scoped>

</style>
