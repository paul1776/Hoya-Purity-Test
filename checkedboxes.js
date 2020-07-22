JAVASCRIPT.JS

<?php
	$con = mysqli_connect("localhost", "u783384183_admin", "qohfyz-nehgy8-zyxNus", "u783384183_data");

	$if(!con)
	(
		echo 'Not connected to server';
	)   
?>

function checkedBoxes()
  {
      
   var inputElems = document.getElementsByTagName("input"),
    count = 100;

    for (var i=0; i<inputElems.length; i++) {       
       if (inputElems[i].type == "checkbox" && inputElems[i].checked === true){
          count--;
       }
    }
    
    var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() +' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    <?php
    $sql = "INSERT INTO Visits(DATETIME, SCORE, ACCESSED_TYPE) VALUES (date, count, FALSE)";
    if ($con->query($sql) === TRUE) {
    	echo "Record updated successfully";
    } 
    else 
    {
    echo "Error updating record: " . $con->error;
    }
    ?>
    
    document.write('<center><h2>Your score is: </h2><h1 style="color:red;">' , count, '</h1></center>')
    
    var codeBlock = 
    '<body>'
    +    '<br><center><form id="myform" onClick="window.location.reload()">'
    +    '<input type="button" id="button1" value="What\'s my type?"> '
    +    '<input type="submit" id="button2" value="Play again!">'
    +    '</form></center>'
    +    '<h5>Made by Kelly and Paul-Emmanuel, 2019</h5>'
    + '</body>'
    
    document.write(codeBlock)
    
    var form = document.getElementById('myform')
    form.onsubmit = function() {
        form.target = '_self'
    }

    document.getElementById('button1').onclick = function() {
        form.target = '_blank'
        getType()
    }
    
    function getType() {
        document.open()
        
        if (count > 79) {
        	setLau4()
        }
        else if (count > 59) {
        	setNsoGroup()
        }
        else if (count > 39) {
        	setUpstairsLeos()
        }
        else if (count > 19) {
        	setCorp()
        }
        else {
        	setBFrat()
        }
        
        // This is the button to go back to the first page
        document.write('<center><form id="myform" onClick="window.location.reload()"><input type="submit" id="button2" value="Play again!"></center>')
    }
  
function setLau4() {
  	document.write('<center><h2>You are: Lau 4</h2><img src="LAU4.jpg" name="photo" height="500" width="500" align="middle"><br><p>Have you ever left Lau before?</p></center>')
  }
  
  function setNsoGroup() {
	document.write('<center><h2>You are: Still hangs out with NSO group</h2><img src="gtownnso.jpg" name="photo" height="500" width="500" align="middle"><br><p>You have done a few things around campus, but you could probably branch out more.</p></center>')
  }
  
  function setUpstairsLeos() {
	document.write('<center><h2>You are: Upstairs Leos</h2><img src="upstairsleos.jpg" name="photo" height="500" width="500" align="middle"><br><p>You definitely live the Hoya lifestyle, but just like upstairs Leos, you\'re a little on the safe side.</p></center>')

  }
  
  function setCorp() {
	document.write('<center><h2>You are: The Corp</h2><img src="thecorp.png" name="photo" height="500" width="500" align="middle"><br><p>You are a big part of Georgetown culture and everyone knows who you are.</p></center>')

  }
  
  function setBFrat() {

	document.write('<center><h2>You are: B Frat</h2><img src="bfrat.jpg" name="photo" height="500" width="500" align="middle"><br><p>...Yikes.</p></center>')

  }
     
}


