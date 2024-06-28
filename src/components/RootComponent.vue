<script setup>
import {Editor, EditorContent} from "@tiptap/vue-3";
import {StarterKit} from "@tiptap/starter-kit";
import MyExtension from "../extension";
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css';
import VCodeBlock from '@wdns/vue-code-block';
import {html as beautify} from 'simply-beautiful';

const content = `
<div>
  <vue-component count="11">
      <p>Testa</p>
  </vue-component>
  <vue-component count="16">
      <p>2Test</p>
  </vue-component>
</div>`
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
  <v-code-block :code="beautify(`<div>${editor.getHTML()}</div>`)" highlightjs lang="html"></v-code-block>
</template>

<style lang="scss">
/* Basic editor styles */
.tiptap {
  :first-child {
    margin-top: 0;
  }

  /* List styles */
  ul,
  ol {
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;

    li p {
      margin-top: 0.25em;
      margin-bottom: 0.25em;
    }
  }

  /* Heading styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    margin-top: 2.5rem;
    text-wrap: pretty;
  }

  h1,
  h2 {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1rem;
  }

  /* Code and preformatted text styles */
  code {
    background-color: var(--purple-light);
    border-radius: 0.4rem;
    color: var(--black);
    font-size: 0.85rem;
    padding: 0.25em 0.3em;
  }

  pre {
    background: var(--black);
    border-radius: 0.5rem;
    color: var(--white);
    font-family: 'JetBrainsMono', monospace;
    margin: 1.5rem 0;
    padding: 0.75rem 1rem;

    code {
      background: none;
      color: inherit;
      font-size: 0.8rem;
      padding: 0;
    }
  }

  blockquote {
    border-left: 3px solid #e2e2e2;
    margin: 1.5rem 0;
    padding-left: 1rem;
  }

  hr {
    border: none;
    border-top: 1px solid #e2e2e2;
    margin: 2rem 0;
  }
}
</style>
