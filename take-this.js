$(document).ready(function(){
    var canvas = new fabric.Canvas('canvas');
    var img = $('#zelda-overworld');
    canvas.setHeight($('#zelda-overworld').height());
    canvas.setWidth($('#zelda-overworld').width());
    
    // console.log($('#zelda-overworld').height());
    var imgInstance = new fabric.Image(img[0], {
      left: 0,
      top: 0,
      angle: 0,
      opacity: 1
    });
    canvas.add(imgInstance);
});
