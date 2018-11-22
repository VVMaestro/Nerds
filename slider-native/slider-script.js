window.addEventListener("load", function() {
  function init2slider(sliderX, betweenX, button1X, button2X, input1X, input2X) {
    var slider = document.querySelector(sliderX);
    var between = document.querySelector(betweenX);
    var button1 = document.querySelector(button1X);
    var button2 = document.querySelector(button2X);
    var input1 = document.querySelector(input1X);
    var input2 = document.querySelector(input2X);

            var min = input1.min;
  					var max = input1.max;

    /*init*/
    var sliderCoords = getCoords(slider);
    button1.style.marginLeft = '0px';
    button2.style.marginLeft = (slider.offsetWidth-button1.offsetWidth) + 'px';
    between.style.width = (slider.offsetWidth-button1.offsetWidth) + 'px';
    input1.value = min;
    input2.value = max;

    input1.onchange= function(evt)
    {
    	if (parseInt(input1.value) < min)
    		input1.value = min;
    	if (parseInt(input1.value) > max)
    		input1.value = max;
    	if (parseInt(input1.value) > parseInt(input2.value))
      {
      	var temp = input1.value;
    		input1.value = input2.value;
    		input2.value = temp;
      }


        var sliderCoords = getCoords(slider);
        var per1 = parseInt(input1.value-min)*100/(max-min);
        var per2 = parseInt(input2.value-min)*100/(max-min);
        var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
        var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;

            button1.style.marginLeft = left1 + 'px';
            button2.style.marginLeft = left2 + 'px';

            if (left1 > left2)
              {
                between.style.width = (left1-left2) + 'px';
                between.style.marginLeft = left2 + 'px';
              }
            else
              {
                between.style.width = (left2-left1) + 'px';
                between.style.marginLeft = left1 + 'px';
              }
    };
    input2.onchange= function(evt)
    {
    	if (parseInt(input2.value) < min)
    		input2.value = min;
    	if (parseInt(input2.value) > max)
    		input2.value = max;
    	if (parseInt(input1.value) > parseInt(input2.value))
      {
      	var temp = input1.value;
    		input1.value = input2.value;
    		input2.value = temp;
      }

        var sliderCoords = getCoords(slider);
        var per1 = parseInt(input1.value-min)*100/(max-min);
        var per2 = parseInt(input2.value-min)*100/(max-min);
        var left1 = per1*(slider.offsetWidth-button1.offsetWidth)/100;
        var left2 = per2*(slider.offsetWidth-button1.offsetWidth)/100;

            button1.style.marginLeft = left1 + 'px';
            button2.style.marginLeft = left2 + 'px';

            if (left1 > left2)
              {
                between.style.width = (left1-left2) + 'px';
                between.style.marginLeft = left2 + 'px';
              }
            else
              {
                between.style.width = (left2-left1) + 'px';
                between.style.marginLeft = left1 + 'px';
              }
    }

    /*mouse*/
    button1.onmousedown = function(evt) {
        var sliderCoords = getCoords(slider);
        var betweenCoords = getCoords(between);
        var buttonCoords1 = getCoords(button1);
        var buttonCoords2 = getCoords(button2);
        var shiftX2 = evt.pageX - buttonCoords2.left;
        var shiftX1 = evt.pageX - buttonCoords1.left;

        document.onmousemove = function(evt) {
            var left1 = evt.pageX - shiftX1 - sliderCoords.left;
            var right1 = slider.offsetWidth - button1.offsetWidth;
            if (left1 < 0) left1 = 0;
            if (left1 > right1) left1 = right1;
            button1.style.marginLeft = left1 + 'px';


    				shiftX2 = evt.pageX - buttonCoords2.left;
            var left2 = evt.pageX - shiftX2 - sliderCoords.left;
            var right2 = slider.offsetWidth - button2.offsetWidth;
            if (left2 < 0) left2 = 0;
            if (left2 > right2) left2 = right2;

                var per_min = 0;
                var per_max = 0;
            if (left1 > left2)
              {
                between.style.width = (left1-left2) + 'px';
                between.style.marginLeft = left2 + 'px';

                per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
                per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
              }
            else
              {
                between.style.width = (left2-left1) + 'px';
                between.style.marginLeft = left1 + 'px';

                per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
                per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
              }
                input1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
                input2.value= (parseInt(min)+Math.round((max-min)*per_max/100));

        };
        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
        };
        return false;
    };

  button2.onmousedown = function(evt) {
        var sliderCoords = getCoords(slider);
        var betweenCoords = getCoords(between);
        var buttonCoords1 = getCoords(button1);
        var buttonCoords2 = getCoords(button2);
        var shiftX2 = evt.pageX - buttonCoords2.left;
        var shiftX1 = evt.pageX - buttonCoords1.left;

        document.onmousemove = function(evt) {
            var left2 = evt.pageX - shiftX2 - sliderCoords.left;
            var right2 = slider.offsetWidth - button2.offsetWidth;
            if (left2 < 0) left2 = 0;
            if (left2 > right2) left2 = right2;
            button2.style.marginLeft = left2 + 'px';


            shiftX1 = evt.pageX - buttonCoords1.left;
            var left1 = evt.pageX - shiftX1 - sliderCoords.left;
            var right1 = slider.offsetWidth - button1.offsetWidth;
            if (left1 < 0) left1 = 0;
            if (left1 > right1) left1 = right1;

                var per_min = 0;
                var per_max = 0;

            if (left1 > left2)
              {
                between.style.width = (left1-left2) + 'px';
                between.style.marginLeft = left2 + 'px';
                per_min = left2*100/(slider.offsetWidth-button1.offsetWidth);
                per_max = left1*100/(slider.offsetWidth-button1.offsetWidth);
              }
            else
              {
                between.style.width = (left2-left1) + 'px';
                between.style.marginLeft = left1 + 'px';
                per_min = left1*100/(slider.offsetWidth-button1.offsetWidth);
                per_max = left2*100/(slider.offsetWidth-button1.offsetWidth);
              }
                input1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
                input2.value= (parseInt(min)+Math.round((max-min)*per_max/100));

        };
        document.onmouseup = function() {
            document.onmousemove = document.onmouseup = null;
        };
        return false;
    };

    button1.ondragstart = function() {
        return false;
    };
    button2.ondragstart = function() {
        return false;
    };

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }

}

//Initialising the slider
init2slider(".range-slider", ".range-slider__between", ".range-slider__button-1", ".range-slider__button-2",
            ".range-slider__input1", ".range-slider__input2");
});
