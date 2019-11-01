var canvas = new fabric.Canvas(document.getElementById('stage'));
var url = 'https://themadcreator.github.io/gifler/assets/gif/run.gif';
fabric.Image.fromURL(url, function(img) {
  img.scaleToWidth(80);
  img.scaleToHeight(80);
  img.left = 105;
  img.top = 30;
  gif(url, function(frames, delay) {
    var framesIndex = 0,
      animInterval;
    img.dirty = true;
    img._render = function(ctx) {
      ctx.drawImage(frames[framesIndex], -this.width / 2, -this.height / 2, this.width, this.height);
    }
    img.play = function() {
      if (typeof(animInterval) === 'undefined') {
        animInterval = setInterval(function() {
          framesIndex++;
          if (framesIndex === frames.length) {
            framesIndex = 0;
          }
        }, delay);
      }
    }
    img.stop = function() {
      clearInterval(animInterval);
      animInterval = undefined;
    }
    img.play();
    canvas.add(img);
  })

})

function gif(url, callback) {

  var tempCanvas = document.createElement('canvas');
  var tempCtx = tempCanvas.getContext('2d');

  var gifCanvas = document.createElement('canvas');
  var gifCtx = gifCanvas.getContext('2d');

  var imgs = [];


  var xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = function() {
    var tempBitmap = {};
    tempBitmap.url = url;
    var arrayBuffer = xhr.response;
    if (arrayBuffer) {
      var gif = new GIF(arrayBuffer);
      var frames = gif.decompressFrames(true);
      gifCanvas.width = frames[0].dims.width;
      gifCanvas.height = frames[0].dims.height;

      for (var i = 0; i < frames.length; i++) {
        createFrame(frames[i]);
      }
      callback(imgs, frames[0].delay);
    }

  }
  xhr.send(null);

  var disposalType;

  function createFrame(frame) {
    if (!disposalType) {
      disposalType = frame.disposalType;
    }

    var dims = frame.dims;

    tempCanvas.width = dims.width;
    tempCanvas.height = dims.height;
    var frameImageData = tempCtx.createImageData(dims.width, dims.height);

    frameImageData.data.set(frame.patch);

    if (disposalType !== 1) {
      gifCtx.clearRect(0, 0, gifCanvas.width, gifCanvas.height);
    }

    tempCtx.putImageData(frameImageData, 0, 0);
    gifCtx.drawImage(tempCanvas, dims.left, dims.top);
    var dataURL = gifCanvas.toDataURL('image/png');
    var tempImg = fabric.util.createImage();
    tempImg.src = dataURL;
    imgs.push(tempImg);
  }
}


render()

function render() {
  if (canvas) {
    canvas.renderAll();
  }

  fabric.util.requestAnimFrame(render);
}