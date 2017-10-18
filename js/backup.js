const navLinks = document.querySelectorAll('.main-nav-link');
  //  console.log(navLinks);

function changeComponent(navLink){
  navLink.addEventListener("click", function(){
    console.log(navLinks);
    if(navLink.classList.contains('active')) {
      navLink.classList.remove('active');
    } else {
      // navLinks.classList.remove('active');
      navLink.classList.add('active');
    }
  });
}

for (let i = 0; i < navLinks.length; i++) {
  changeComponent(navLinks[i]);
}



$('.element-selector').click(function() {
		var type = $(this).attr('type');
		var element = $(this).attr('element-item');

		console.log(type);
		console.log(element);

		var elementString = eval(element);
		$('.output-'+type).html(elementString);
});

// loop and function for accordion mobile menu
var $whichSection = ['fiftyFifty', 'logo', 'banner', 'halfBanner', 'fullWidthText', 'thirdsContent', 'fullWidthBanner', 'hero', 'body', 'social', 'footer'];

function sectionChoice($section) {
	var navLink = $('.nav-wrap .' + $section +  '-selector a');
	var navLink2 = $('.nav-wrap li a');
	var navLink3 = $('.tab-menu:first-of-type .selector-options');

// logo-select
$(' .' + $section + 'Button').click(function() {
	if(!$('.' + $section + '-select').hasClass('opened')) {
			$(navLink2).removeClass('selected');
			$('.opened').removeClass('opened');
			$(navLink3).removeClass('opened');
			$(navLink).addClass('selected');
			$('.' + $section + '-select').addClass('opened');
			$('.' + $section + '-select').css({'height':'1500px'});
			} else {
				$('.' + $section + '-select').removeClass('opened');
			}
	});
}

for (var i = 0; i < $whichSection.length; i++) {
	sectionChoice($whichSection[i]);
}
// loop and function for accordion mobile menu ends
