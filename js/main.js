//init google map
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 11,
        center: {lat: 35.717, lng: 139.731},
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        streetViewControl: false,
        zoomControl: false
	});
	map.addListener('click', (e) => {
		map.setOptions({'scrollwheel': true});
	});
	map.addListener('mouseout', (e) => {
		map.setOptions({'scrollwheel': false});
	});
}

//init slick slider
$(document).ready(function(){
	$('.hero--container').slick({
		dots: false,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 5000,
	});
});

//button handler
(function() {
	let shopContainer = document.getElementById('js_shop--container');
	let rows = 2;
	let button = document.getElementById('js_show-more');

	button.addEventListener('click', function(e) {
		rows+=2;
		e.preventDefault();
		console.log(e);
		if (shopContainer.hasChildNodes() && rows < shopContainer.children.length / 4 + 2) {
			setContainerHeight(shopContainer);
			button.style.cssText = 'opacity: 0.3; cursor: not-allowed';
		} 
	});

	function setContainerHeight(el) {
		let child = el.firstElementChild;
		let childHeight = child.offsetHeight;
		let elHeight = (childHeight * 1.1) * rows;

		el.style.height = elHeight +'px';
		el.parentElement.style.minHeight = elHeight +'px';
		
		$(window).trigger('resize');
	}

	document.addEventListener('load', setContainerHeight(shopContainer));
})();

//init parallax
$('.showcase--hero').parallax({imageSrc: '../../images/case-1.png', zIndex: '0',});

//add sliding line
(function() {
	let gallery = document.getElementById('gallery');

	gallery.parentElement.appendChild(gallery.cloneNode(true));
	gallery.style.display = 'inline-block';
	gallery.style.animationDelay = '-60s';
})();
