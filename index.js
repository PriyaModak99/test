let uploadBtn = document.getElementById("upload-Btn");
let choosenImage = document.getElementById("choosen-image");
let fileName = document.getElementById("file-name");

uploadBtn.onchange = () => {
  let reader = new FileReader();
  reader.readAsDataURL(uploadBtn.files[0]);
  console.log(uploadBtn.files[0]);
  reader.onload = () => {
    choosenImage.setAttribute("src", reader.result);
  }
  fileName.textContent = uploadBtn.files[0].name;
}

