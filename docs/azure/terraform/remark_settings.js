remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};
var slideshow = remark.create({
  ratio: '16:9',
  highlightLines: 'true',
  sourceUrl: './slides-tf.md'
});