// class randomImage {
//
//   let theImages = new Array();
//     theImages[0] = "pet.gif";
//     theImages[1] = "cheetah.gif";
//     theImages[2] = "cat.gif";
//
//   let j = 0
//   let p = theImages.length;
//   let preBuffer = new Array();
//   for (i = 0; i < p; i++){
//      preBuffer[i] = new Image()
//      preBuffer[i].src = theImages[i]
//   }
//   let whichImage = Math.round(Math.random()*(p-1));
//   showImage(){
//     document.write('<img src="img/'+theImages[whichImage]+'">');
//   }
// }
// let random_images_array = ["pet.gif", "cheetah.gif", "cat.gif"];
//
// class randomImage {
//   constructor(imgAr, path) {
//     path = 'img/';
//     let num = Math.floor( Math.random() * imgAr.length );
//     let img = imgAr[num];
//     let imgStr = '<img src="img/' + img + '">';
//     document.write(imgStr); document.close();
//   }
// }
//
// export { randomImage };
