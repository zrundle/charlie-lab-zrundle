console.log("Top: " + $("img").position().top + " Left: " + $("img").position().left);

$("img").draggable({
    stop: function () {
      console.log("Image stopped moving");

      // if( img is far right side  then ) user wins.

      let kumaSmile = $("img").position().left;

      if (kumaSmile > 0 & kumaSmile < 300) {
        console.log("Position ", kumaSmile);   
        $("p").text("This is a man named Kuma who has the powers of a Paw-Paw Man! +1 Internet Point");
        $("img").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3a2mV8INiAA-UDtud9KwoMU-1n4L7az5PKQ&usqp=CAU");
      }
      
      if(kumaSmile > 350 & kumaSmile < 600){
        console.log("Position ", kumaSmile);
        $("img").attr("src", "https://pbs.twimg.com/media/FJyzt_rXwAMgo3q?format=jpg&name=medium");
        $("p").text("This is the main character, Monkey D. Luffy, who is a rubber man! +5 Internet Points");
      }
      
      if(kumaSmile > 700 & kumaSmile < 850){
        console.log("Position ", kumaSmile);
        $("img").attr("src", "https://64.media.tumblr.com/02cd4d36676eac8988bcebfdfc9c37f8/tumblr_inline_ppnokiVKZN1s2yta0_500.jpg");
        $("p").text("This nervous gent is name Bartolomeo, he can create barriers by crossing his fingers! +5 Internet Points"); 
      }

      if(kumaSmile > 1050){
        console.log("Position ", kumaSmile);
        console.log("You have completed this visual puzzle.");
        $("img").attr("src", "https://i.pinimg.com/originals/67/dc/e9/67dce96f81f9fcedafed6f92b9c1ef45.jpg");
        $("p").text("Finally, this is Gold Roger the first Pirate King! +10 Internet Points");
      }
      
      if(kumaSmile > 2000){
        console.log("Position ", kumaSmile);
        console.log("SECRET EVENT: +20 Internet Points");
        $("img").attr("src", "https://static.tvtropes.org/pmwiki/pub/images/eiichiro_oda_4.png");
        $("p").text("This is Eiichiro Oda, the author of One Piece. He's been writing this story for over 25 years!");
      } 
       else {
        console.log("Keep moving across the page!");
      }
    },
  });