var aText = new Array(
    "You are kind, intelligent, and hardworking. I wish you the greatest happiness in the year to come. Work hard in this final year of law school, and remember me one day when you become a barrister! - Daryl"
    );
    var iSpeed = 45;
    var iIndex = 0;
    var iArrLength = aText[0].length;
    var iScrollAt = 20;
     
    var iTextPos = 0;
    var sContents = '';
    var iRow;
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("card-text2");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();