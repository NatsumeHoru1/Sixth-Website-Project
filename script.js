const originalBg = "https://picsum.photos/800/600?grayscale";
const originalText = "Hover over an image below to display here.";

function upDate(previewPic) {
  console.log("Event triggered!");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  document.getElementById('imageText').innerText = previewPic.alt;

  document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
  document.getElementById('image').style.backgroundImage = `url('${originalBg}')`;

  document.getElementById('imageText').innerText = originalText;
}