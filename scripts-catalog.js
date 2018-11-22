window.addEventListener("load", function(){
  var indexPopup = document.querySelector(".nerds-modal");
  var showWritePopup = document.querySelector(".contacts__write");
  var closeWritePopup = document.querySelector(".write__cross");

  var writeSubmit = document.querySelector(".js__write-submit");
  var writeName = document.querySelector(".js__write-name");
  var writeEmail = document.querySelector(".js__write-email");
  var writeText = document.querySelector(".js__write-text");

  showWritePopup.addEventListener("click", function() {
    indexPopup.classList.toggle("nerds-modal--active");
  });

  closeWritePopup.addEventListener("click", function() {
    indexPopup.classList.remove("nerds-modal--active");

    writeName.classList.remove("write__field--invalid");
    writeEmail.classList.remove("write__field--invalid");
    writeText.classList.remove("write__field--invalid");
  });

  writeSubmit.addEventListener("submit", function(evt){
    if (!writeName.value || !writeEmail.value || !writeText.value) {
      evt.preventDefault();
      writeName.classList.add("write__field--invalid");
      writeEmail.classList.add("write__field--invalid");
      writeText.classList.add("write__field--invalid");
    }
  });
});
