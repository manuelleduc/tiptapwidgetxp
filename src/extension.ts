import {mergeAttributes, Node} from '@tiptap/core'

import {VueNodeViewRenderer} from '@tiptap/vue-3'
import ExtensionRootTemplate from "./components/ExtensionRootTemplate.vue";

export default Node.create({
    name: "vueComponent",
    group: "block",
    content: 'inline*',
    parseHTML() {
        return [
            {tag: 'vue-component'}
        ]
    },
    renderHTML({HTMLAttributes}) {
        return ['vue-component', mergeAttributes(HTMLAttributes)];
    },
    addNodeView() {
        return VueNodeViewRenderer(ExtensionRootTemplate)
    },
    addAttributes() {
        return {
            count: {
                default: 0
            }
        }
    }
})
