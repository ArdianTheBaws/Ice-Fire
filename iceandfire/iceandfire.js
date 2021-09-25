 $(document).ready(function() {

      $(document).on("click", "p", function(){
          var id = this.id;
          $.get(
            `https://anapioficeandfire.com/api/houses/${id}`,
            function(res) {
              console.log(res);
              var html_str = "";
              html_str += "<h4>Name: " + res['name'] + "</h4>";
              html_str += "<h4>Region:</h4>";
              html_str += res['region'];
              html_str += "<h4>Words:</h4>";
              html_str += res['words'];
              html_str += "<h4>Coat of Arms</h4>";
              html_str += res['coatOfArms'];
              $('#profile').html(html_str);
          }, "json");
          });
     
     for (let i = 1; i <= 444; i++) {
  let houseID = document.createElement('p');
  houseID.classList.add('houses');
  houseID.id = i;
  houseID.innerHTML = `HOUSE ${i}`;
  document.getElementById('shields').appendChild(houseID);
}
     
        });
