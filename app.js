let profilePic = document.querySelector("#profilePic");
let inputFile = document.querySelector("#input-file");

//when we select any image

inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
};
