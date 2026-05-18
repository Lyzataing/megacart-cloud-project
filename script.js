console.log("MegaCart website loaded!");

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function(){
	const toggle = document.querySelector('.nav-toggle');
	const nav = document.getElementById('primary-nav');
	if(!toggle || !nav) return;
	toggle.addEventListener('click', function(){
		const expanded = this.getAttribute('aria-expanded') === 'true';
		this.setAttribute('aria-expanded', String(!expanded));
		nav.classList.toggle('open');
	});
});
