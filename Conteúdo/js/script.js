$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});

function iniciaModal(modalID) {
	let modal = document.getElementById(modalID);
	if(modal) {
		modal.classList.add('mostrar');
		modal.addEventListener('click', (e) => {
			if(e.target.id == modalID || e.target.className == 'fechar') {
				modal.classList.remove('mostrar');
			}
		});
	}
}

let foto = document.querySelector('.dahyun');
foto.addEventListener('click',() => iniciaModal('modal-dahyun'));
