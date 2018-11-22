window.addEventListener("load", function(){
  var indexPopup = document.querySelector(".nerds-modal");
  var showWritePopup = document.querySelector(".contacts__write");
  var closeWritePopup = document.querySelector(".write__cross");

  var sliderLong = document.querySelector(".advantages__item--long");
  var sliderMath = document.querySelector(".advantages__item--math");
  var sliderNight = document.querySelector(".advantages__item--night");
  var toggleLong = document.querySelector(".slider__toggles-box--long");
  var toggleMath = document.querySelector(".slider__toggles-box--math");
  var toggleNight = document.querySelector(".slider__toggles-box--night");
  var longButton = document.querySelector(".js__long-button");
  var mathButton = document.querySelector(".js__math-button");
  var nightButton = document.querySelector(".js__night-button");
  var currentSlider = sliderLong;

  function swithSlide() {
    switch (currentSlider) {
      case sliderLong:
        sliderLong.classList.remove("advantanges__item--active");
        sliderNight.classList.remove("advantanges__item--active");
        sliderMath.classList.add("advantanges__item--active");
        longButton.checked = false;
        nightButton.checked = false;
        mathButton.checked = true;
        currentSlider = sliderMath;
        break;
      case sliderMath:
        sliderLong.classList.remove("advantanges__item--active");
        sliderMath.classList.remove("advantanges__item--active");
        sliderNight.classList.add("advantanges__item--active");
        mathButton.checked = false;
        longButton.checked = false;
        nightButton.checked = true;
        currentSlider = sliderNight;
        break;
      case sliderNight:
        sliderMath.classList.remove("advantanges__item--active");
        sliderNight.classList.remove("advantanges__item--active");
        sliderLong.classList.add("advantanges__item--active");
        nightButton.checked = false;
        mathButton.checked = false;
        longButton.checked = true;
        currentSlider = sliderLong;
        break;
    }
  }

  var sliderIntervalHandler = setInterval(swithSlide, 5000);

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

  toggleLong.addEventListener("click", function() {
    sliderMath.classList.remove("advantanges__item--active");
    sliderNight.classList.remove("advantanges__item--active");
    sliderLong.classList.add("advantanges__item--active");

    nightButton.checked = false;
    mathButton.checked = false;
    longButton.checked = true;

    clearInterval(sliderIntervalHandler);
    sliderIntervalHandler = setInterval(swithSlide, 5000);
    currentSlider = sliderLong;
  });

  toggleMath.addEventListener("click", function() {
    sliderLong.classList.remove("advantanges__item--active");
    sliderNight.classList.remove("advantanges__item--active");
    sliderMath.classList.add("advantanges__item--active");

    longButton.checked = false;
    nightButton.checked = false;
    mathButton.checked = true;

    clearInterval(sliderIntervalHandler);
    sliderIntervalHandler = setInterval(swithSlide, 5000);
    currentSlider = sliderMath;
  });

  toggleNight.addEventListener("click", function() {
    sliderLong.classList.remove("advantanges__item--active");
    sliderMath.classList.remove("advantanges__item--active");
    sliderNight.classList.add("advantanges__item--active");

    longButton.checked = false;
    mathButton.checked = false;
    nightButton.checked = true;

    clearInterval(sliderIntervalHandler);
    sliderIntervalHandler = setInterval(swithSlide, 5000);
    currentSlider = sliderNight;
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode == 27) {
      if (indexPopup.classList.contains("nerds-modal--active")) {
        evt.preventDefault();
        indexPopup.classList.remove("nerds-modal--active");
        writeName.classList.remove("write__field--invalid");
        writeEmail.classList.remove("write__field--invalid");
        writeText.classList.remove("write__field--invalid");
      }
    }
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
