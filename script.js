document.addEventListener('click', function(event) {
  var div = document.getElementById('movableDiv');
  div.style.left = event.clientX + 'px';
  div.style.top = event.clientY + 'px';
});

/*document.getElementById('searchBtn').addEventListener('click', function() {
  var input = document.getElementById('cityInput').value; 
  var select = document.getElementById('cityList');
  var found = false; 

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].value === input) {
      found = true; 
      select.selectedIndex = i; 
      alert("Місто знайдено: " + input + ". Його номер в списку: " + (i + 1));
      break;
    }
  }

  if (!found) {
    alert("Місто не знайдено в списку.");
  }
});*/

document.getElementById('cityInput').addEventListener('input', function() {
  var input = document.getElementById('cityInput').value.toLowerCase(); 
  var select = document.getElementById('cityList');
  var found = false; 

  for (var i = 0; i < select.options.length; i++) {
    if (select.options[i].value.toLowerCase().startsWith(input)) {
      found = true; 
      select.selectedIndex = i; 
      console.log("Місто знайдено: " + select.options[i].value + ". Його номер в списку: " + (i + 1));
      break;
    }
  }

  if (!found) {
    select.selectedIndex = -1; // Скидаємо вибір, якщо не знайдено
    console.log("Місто не знайдено в списку.");
  }
});
