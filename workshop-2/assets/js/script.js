document.getElementById("c").onclick = function(){ // als op de c-toets wordt geklikt
	var c_toets = document.getElementById("audio_c"); // zoek het c-toets audio-element op
	c_toets.play(); // speel het audio-element af
}
document.getElementById("d").onclick = function(){
	var d_toets = document.getElementById("audio_d");
	d_toets.play();
}
document.getElementById("e").onclick = function(){
	var e_toets = document.getElementById("audio_e");
	e_toets.play();
}