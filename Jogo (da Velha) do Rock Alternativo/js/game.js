function start(){
  location.reload();
}

function cancel(){
  location.reload();
}

var player = "Skull";
var numJog = 0;
function checkjogo(id){

var opt = verificaSrc(id);
var pc = document.getElementById('cpus').checked;

  if(opt == "transp.png"){
	document.getElementById(id).src = "img/" + player + ".png";
	document.getElementById('cpus').disabled = true;
	document.getElementById('cpun').disabled = true;
	document.getElementById('cancelar').disabled = false;
	
	numJog++;
	
    if(winchek()){
		
		if(player == "Skull"){
			nome = "Caveirão Cabuloso";
		}else{
			nome = "Guitar Fodão";
		}
		
		document.getElementById('msg').innerHTML = "Fim de jogo!! Vitória do " + nome + "!!!";
		document.getElementById('novo').disabled = false;
		document.getElementById('cancelar').disabled = true;
		
		if(player == "Guitar"){
		  document.getElementById('msg').style.backgroundImage = 'url("img/rock_win.gif")';
		  document.getElementById('msg').style.backgroundRepeat = 'no-repeat';
		  document.getElementById('msg').style.backgroundPosition = 'center';
		  document.getElementById('msg').style.backgroundSize = '280px 200px';
		}else{
		  document.getElementById('msg').style.backgroundImage = 'url("img/skull_win.gif")';
		  document.getElementById('msg').style.backgroundRepeat = 'no-repeat';
		  document.getElementById('msg').style.backgroundPosition = 'center';
		  document.getElementById('msg').style.backgroundSize = '200px 200px';
		}
		return false;
	    //location.reload();
	}
	if(numJog >= 9){
		document.getElementById('msg').innerHTML = "Fim de jogo!! Deu Funk!!!";
	    document.getElementById('msg').style.backgroundImage = 'url("img/pagode.gif")';
		document.getElementById('msg').style.backgroundRepeat = 'no-repeat';
		document.getElementById('msg').style.backgroundPosition = 'center';
		document.getElementById('msg').style.backgroundSize = '200px 200px';
		
		document.getElementById('novo').disabled = false;
		document.getElementById('cancelar').disabled = true;
		return false;
		//location.reload();		
	}

	 if(player == "Skull"){
	  player = "Guitar";
	  
     }else{
	  player = "Skull";  
     }
   }
   
  if(pc && player == "Guitar"){
	  checkjogo(jogoDoPc());
  }
}

function jogoDoPc(){
  if(verificaSrc('c5') == "transp.png"){
	  return 'c5';
  }
  return 'c' + Math.floor((Math.random() * 9) + 1);
	
}

function verificaSrc(id){
	
var file = document.getElementById(id).src;
return file.substring(file.length - 10, file.length);
	
}

function winchek(){
	
  if((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png" ){
	  document.getElementById('corte').style.backgroundImage = 'url("img/corte1.png")';
	  document.getElementById('corte').style.zIndex = '1';
	  return true;
  }
  if((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4') != "transp.png" ){
	  document.getElementById('corte').style.backgroundImage = 'url("img/corte2.png")';
	  document.getElementById('corte').style.zIndex = '1';
	  return true;
  }
  if((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png" ){
	  document.getElementById('corte').style.backgroundImage = 'url("img/corte3.png")';
	  document.getElementById('corte').style.zIndex = '1';
	  return true;
  }
  if((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png" ){
	  document.getElementById('corte').style.backgroundImage = 'url("img/corte4.png")';
	  document.getElementById('corte').style.zIndex = '1';
	  return true;
  }
  if((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png" ){
	  document.getElementById('corte').style.backgroundImage = 'url("img/corte5.png")';
	  document.getElementById('corte').style.zIndex = '1';
	  return true;
  }
  if((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png" ){
	  document.getElementById('corte').style.backgroundImage = 'url("img/corte6.png")';
	  document.getElementById('corte').style.zIndex = '1';
	  return true;
  }
  if((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png" ){
	  document.getElementById('corte').style.backgroundImage = 'url("img/corte7.png")';
	  document.getElementById('corte').style.zIndex = '1';
	  return true;
  }
  if((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png" ){
	  document.getElementById('corte').style.backgroundImage = 'url("img/corte8.png")';
	  document.getElementById('corte').style.zIndex = '1';
	  return true;
  }
  return false;
	
}