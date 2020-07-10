function convertLink() {
  let sharableLink = document.getElementById("linkInput").value;
  let downloadLink = document.getElementById("outputDirect");
  let slArray = sharableLink.split("/");
  slArray.sort((a, b) => {
    return b.length - a.length;
  });
  const downloadId = slArray[0];
  const directLink =
    "https://drive.google.com/uc?export=download&id=" + downloadId;
  console.log(directLink);
  downloadLink.innerHTML =
    '<a href="' + directLink + '">Direct Download Link!</a>';
}
