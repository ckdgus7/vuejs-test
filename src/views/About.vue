<template>
  <div class="about">
    <froala
      v-model="content"
      :tag="'textarea'"
      :config="config"
    ></froala>
    <froalaView v-model="content"></froalaView>
  </div>
</template>

<script>
export default {
  data () {
    return {
      config: {
        end_with_newline: true,
        indent_inner_html: true,
        extra_liners: "['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'pre', 'ul', 'ol', 'table', 'dl']",
        brace_style: 'expand',
        indent_char: '\t',
        indent_size: 1,
        wrap_line_length: 0,
        charCounterCount: true,
        // Set custom buttons with separator between them.
        toolbarButtons: ['undo', 'redo' , '|', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'outdent', 'indent', 'clearFormatting', 'insertTable', 'html'],
        toolbarButtonsXS: ['undo', 'redo' , '-', 'bold', 'italic', 'underline']
      },
      content: '<p>test</p><p>test입니다.</p>'
    }
  }
}
</script>