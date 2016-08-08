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

    var rect = new fabric.Rect({
        left: 0,
        top: 0,
        fill: 'white',
        stroke: 'white',
        strokeWidth: 1,
        opacity: 0.6,
        width: 250,
        height: 150,
        angle: 0
    })

    imgInstance.lockMovementX = true;
    imgInstance.lockMovementY = true;
    imgInstance.lockScalingX = true;
    imgInstance.lockScalingY = true;
    imgInstance.lockRotation = true;
    imgInstance.hasControls = false;
    imgInstance.hasBorders = false;
    canvas.add(imgInstance);
    canvas.add(rect);
});
