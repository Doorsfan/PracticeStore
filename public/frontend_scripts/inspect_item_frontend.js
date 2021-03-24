document.addEventListener('DOMContentLoaded', (event) => {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  var img = new Image();

  img.onload = function () {
    // set size proportional to image
    canvas.height = 300;
    canvas.width = 500;

    // step 1 - resize to 50%
    var oc = document.createElement('canvas'),
      octx = oc.getContext('2d');

    oc.width = img.width * 3;
    oc.height = img.height * 3;
    octx.drawImage(img, 0, 0, oc.width, oc.height);

    // step 2
    octx.drawImage(oc, 0, 0, oc.width * 1.0, oc.height * 1.0);

    // step 3, resize to final size
    ctx.drawImage(
      oc,
      0,
      0,
      oc.width * 1.0,
      oc.height * 1.0,
      0,
      0,
      canvas.width,
      canvas.height
    );
  };
  var imageName = window.location.search.substr(1);
  imageName = imageName.replaceAll('%20', ' ');
  imageName = imageName.replaceAll('name=', '');
  imageName = imageName.replaceAll('&review=true', '');
  img.src = '/images/' + imageName + '.png';

  //use a normal for loop for this, not a for each
  let myStars = document.getElementsByClassName('reviewstar');
  for (let i = 0; i < myStars.length; i++) {
    myStars[i].addEventListener('click', function () {
      for (let e = 0; e < myStars.length; e++) {
        if (e <= i) {
          document.getElementById('myReviewStar' + (e + 1)).style.color =
            'orange';
        }
        if (e > i) {
          document.getElementById('myReviewStar' + (e + 1)).style.color =
            'black';
        }
      }
    });
  }
});
