$(document).ready(function(){

function parallax(){
	var prlx_lyr_1 = document.getElementById('prlx_lyr_1')
	prlx_lyr_1.style.top = (window.pageYoffet / 150)+'px';

	var prlx_lyr_2 = document.getElementById('prlx_lyr_2')
	prlx_lyr_2.style.top = (window.pageYoffet / 15)+'px';

	var prlx_lyr_3 = document.getElementById('prlx_lyr_3')
	prlx_lyr_3.style.top = (window.pageYoffet / 25)+'px';

	var prlx_lyr_3 = document.getElementById('prlx_lyr_4')
	prlx_lyr_3.style.top = (window.pageYoffet / 25 )+'px';
	
}

window.addEventListener("scroll", parallax, false);

}


}