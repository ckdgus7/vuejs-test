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
        language: 'ko',
        theme: 'gray',
        toolbarStickyOffset: 55,
        toolbarButtons: [
          'fullscreen',
          'undo',
          'redo',
          'bold',
          'italic',
          'underline',
          'strikeThrough',
          'fontFamily',
          'fontSize',
          '|',
          'color',
          '|',
          'paragraphFormat',
          'align',
          'formatOL',
          'formatUL',
          'outdent',
          'indent',
          '-',
          'insertLink',
          'insertImage',
          'insertTable',
          '|',
          'quote',
          'insertHR',
          'clearFormatting',
          'selectAll',
          'html',
        ],
        pluginsEnabled: null,
        imageUploadParam: 'file',
        imageUploadURL: '/froala_files/upload',
        imageUploadMethod: 'POST',
        imageMaxSize: 5 * 1024 * 1024,
        imageAllowedTypes: [
          'jpeg',
          'jpg',
          'png',
          'git',
        ],
        imageManagerPreloader: '',
        imageManagerPageSize: 20,
        imageManagerScrollOffset: 10,
        imageManagerLoadURL: '/froala_files.json',
        imageManagerLoadMethod: 'GET',
        imageManagerDeleteURL: '/froala_files/destroy',
      },
      content: '<p>test</p><p>test입니다.</p>'
    }
  }
}
</script>