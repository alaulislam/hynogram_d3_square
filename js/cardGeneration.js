
//function cardGeneration(imgData,imgName,barSize,count){
function cardGeneration(image_dimension,photoCount){
              let card_body = document.getElementById("card_generation");
              var h4_div = $('<h4>', {
                class:"card-title",
                // text:" image"
              }).prependTo(card_body);
              var span = $('<span>', {
                "class": "text-info font-weight-bold",
                text:image_dimension+ " size"
              }).prependTo(h4_div);

              // var body_text= $('<div class="d-flex justify-content-between"><p class="display-3 degree">320✕320</p><i class="fas fa-sun-o fa-5x pt-3 amber-text"></i></div>');
              // $(card_body).append(body_text);
              let card_body_content = $('<div>').addClass('d-flex justify-content-between mb-4').appendTo(card_body);

              var photos = $('<p>', {
                text:photoCount+" Images"
              });
              var photosIcon = $('<i>', {
                "class": "fas fa-images fa-lg text-info pr-2"
              }).prependTo(photos);
              $(card_body_content).append(photos);
          
         
      };




