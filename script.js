function highlight() {
    //Write your code here
	var boldElements = document.querySelectorAll('strong');

  // Change the color of each bold element to green
  boldElements.forEach(function (boldElement) {
    boldElement.style.color = 'green';
  });
}


function return_normal() {
    //Write your code here
	var boldElements = document.querySelectorAll('strong');

  // Change the color of each bold element back to black
  boldElements.forEach(function (boldElement) {
    boldElement.style.color = 'black';
  });
    
}
