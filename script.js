$(function(){

  
  $("#startPic").draggable();
  
  $(".dropZones").droppable({
      drop: function(event, ui) {
        if($(this).attr("id") == "dropZone"){
           $("#startPic").attr("src", 'https://pbs.twimg.com/media/FJyzt_rXwAMgo3q?format=jpg&name=medium').addClass("box");
          $(this).next("p").addClass("dropZoneText");
          $(this).find( "p" ).html("This is our main character Monkey D. Luffy!").css('position', 'absolute').css('top', '565px').css('left', '125px').css('color', 'cyan').css('font-size', '20px');
         }
  
        else if($(this).attr("id") == "dropZone2"){
           $("#startPic").attr("src", 'https://staticg.sportskeeda.com/editor/2022/10/487f2-16660900684280-1920.jpg?w=840').addClass("box");
           $(this).next("p").addClass("dropZone2Text");
           $(this).find( "p" ).html("This is Trafalgar Law, the Surgeon of Death!").css('position', 'absolute').css('top', '565px').css('left', '735px').css('color', 'cyan').css('font-size', '20px');
          }

        else if($(this).attr("id") == "dropZone3"){
           $("#startPic").attr("src", 'https://i.pinimg.com/originals/67/dc/e9/67dce96f81f9fcedafed6f92b9c1ef45.jpg').addClass("box");
          $(this).next("p").addClass("dropZone3Text");
          $(this).find( "p" ).html("This is Gold Roger, the Pirate King!").css('position', 'absolute').css('top', '565px').css('left', '1410px').css('color', 'cyan').css('font-size', '20px');
         } 
      }    
    });
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropZone = event.target;
    
    // Remove existing image from drop zone
    while (dropZone.firstChild) {
      dropZone.removeChild(dropZone.firstChild);
    }
    
    // Create a new image element
    var newImage = document.createElement('img');
    newImage.src ='https://pbs.twimg.com/media/FJyzt_rXwAMgo3q?format=jpg&name=medium'; 
    
    // Append the new image to the drop zone
    dropZone.appendChild(newImage);
    
    // Print text based on the drop zone
    printText(dropZone);
  }
  
  function printText(dropZone) {
    var text = '';
    switch(dropZone.id) {
      case 'drop-zone':
        text = 'Image dropped in the drop zone.';
        break;
    }
    console.log(text);
  }
  
});