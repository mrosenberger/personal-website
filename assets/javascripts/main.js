;if (!console) { var console = {log: function() {} }; }
console.log("Get outta my console!");

var randomColor = function(brightness){

  var randomChannel = function(brightness){
    var r = 255 - brightness;
    var n = 0 | ((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length == 1) ? '0' + s : s;
  };

  return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
};

var shuffleElementColors = function(elements) {
	for (var i=0; i < elements.length; i++) {
		elements[i].style.color = randomColor(0);
	}
};

$(document).ready( function() {
	shuffleElementColors($(".personal-description"));
});