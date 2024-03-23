// app.js
document.querySelector('#gif-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var searchTerm = document.querySelector('#search-term').value;
    axios.get('http://api.giphy.com/v1/gifs/search', {
      params: {
        q: searchTerm,
        api_key: 'XwatGGvgRdLtHfzP3hafwcHDICySjHn0',
        limit: 1
      }
    }).then(function(response) {
      var img = document.createElement('img');
      img.src = response.data.data[0].images.original.url;
      document.body.appendChild(img);
    });
  });
  
  document.querySelector('#remove-button').addEventListener('click', function() {
    var images = document.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
      images[i].parentNode.removeChild(images[i]);
    }
  });