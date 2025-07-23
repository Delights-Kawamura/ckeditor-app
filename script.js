window.contentfulExtension.init(function (sdk) {
  ClassicEditor
    .create(document.querySelector('#editor'))
    .then(editor => {
      editor.setData(sdk.field.getValue() || '');

      editor.model.document.on('change:data', () => {
        const data = editor.getData();
        sdk.field.setValue(data);
      });

      sdk.field.onValueChanged((newValue) => {
        if (newValue !== editor.getData()) {
          editor.setData(newValue);
        }
      });
    })
    .catch(error => {
      console.error(error);
    });
});
