function count(){
    var travelers = document.getElementById('travelers').value;
    var time = document.getElementById('time').value;
    var total = 0;
 
    if (time == "day") {
        total = travelers * 200;
        if (travelers > 50) {
          total = total * 0.6;
        }
    }
 
    else{
        total = travelers * 100;
        if (travelers > 50) {
            total = total * 0.8;
        }
    }
      document.getElementById('total').innerHTML = total;
 }