$(function(){
  $.setAspectRatio();
});
$.setAspectRatio = function(){
  $("[data-aspect-ratio]:not([data-aspect-ratio-by-height=true])").each(function(){
    var $this = $(this);
    var width = $this.outerWidth();
    var aspectRatio = $this.data("aspect-ratio");
    var height = width * aspectRatio;
    $this.css("height", height + "px");
  });
}

$.swapContent = function(toSwapToContent){
  $toSwapToContent = $(toSwapToContent);
  $(this).each(function(i, content){
    $content = $(content);
    var outerHeight = $content.outerHeight();
    var outerWidth = $content.outerWidth();

    $content.css({"height": outerHeight, "width": outerWidth });
    $(content).children().fadeOut();
    $toSwapToContent.hide();
    $(content).html($toSwapToContent);
    $toSwapToContent.fadeIn();
  })
}
