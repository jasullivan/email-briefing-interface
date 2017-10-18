// main navigation function
var $whichSection = ['logoNav', 'mainBanner', 'fullWidthBanner', 'twoPanel'];
function sectionChoice($section) {
	var chosenSection = $('section.' + $section);
	var allSections = $('section[type="email-component-wrapper"]');
	$(' .' + $section + 'Button').click(function() {
		$('.main-nav-link').removeClass('active');
		$(this).addClass('active');
		$(allSections).removeClass('opened').addClass('closed');
		$(chosenSection).removeClass('closed').addClass('opened');
	});
}
for (var i = 0; i < $whichSection.length; i++) {
	sectionChoice($whichSection[i]);
}
// main navigation function

// email-component-choice: choose which element you want to add eg regular or concierge
$('.email-component').click(function() {
	var type = $(this).attr('type');
	var element = $(this).attr('element-item');
	var elementString = eval(element);
	$('.output-'+type).html(elementString);
});
// email-component-choice: choose which element you want to add eg regular or concierge ends

// email-component-change: text/image orientation left or right
$('input[text-image-selector]').click(function() {
	var type = $(this).attr('text-image-selector');
	console.log(type);
	if(type === 'text-left') {
		$('.imageLeft-image').css({'display':'none'});
		$('.textLeft-text').css({'display':'block','padding-top':'8px'});
	} else if(type === 'image-left') {
		$('.imageLeft-image').css({'display':'block'});
		$('.textLeft-text').css({'display':'none'});
	} else if(type === 'text-right') {
		$('.imageRight-image').css({'display':'none'});
		$('.textRight-text').css({'display':'block','padding-top':'8px'});
	} else {
		$('.imageRight-image').css({'display':'block'});
		$('.textRight-text').css({'display':'none'});
	}
});
// email-component-change: text/image orientation left or right end

// tabs
$('.tabs .tab-links a').on('click', function(e)  {
    var currentAttrValue = $(this).attr('href');
    // Show/Hide Tabs
    $('.tabs ' + currentAttrValue).show().siblings().hide();
    // Change/remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');

    e.preventDefault();
});
// tabs end
$( document ).ready(function() {
	$('.slider-for').slick({
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	 });
	 $('.slider-nav').slick({
		centerMode: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: true,
		dots: false,
		focusOnSelect: true
	 });
});
//color picker start
var colorRow = [
	{
    0 : ['3f789f', 'Warner Blue', 'Primary colours'],
    1 : ['58585b', 'Warner Grey']
	},
	{
		0 : ['ec6935', 'Salmon', 'Secondary colours'],
		1 : ['d7225e', 'Pink'],
		2 : ['5f194e', 'Plum'],
		3 : ['29599e', 'Dark Blue'],
		4 : ['68a042', 'Green'],
		5 : ['42a28d', 'Teal'],
		6 : ['3e338d', 'Purple'],
		7 : ['a78c5b', 'Gold'],
		8 : ['3c8bca', 'Light Blue'],
		9 : ['e3672a', 'Orange'],
		10 : ['910a18', 'Red']
	}
];


var colorRows = Object.keys(colorRow).length;
var picker = $('.picker');
var pickerWithOff = $('.picker.colorOff');
for (var ia = 0; ia < colorRows; ia++ ) {
	picker.append('<ul class="pickRow'+ia+'"></ul>');
	picker.find('ul.pickRow'+ia).append('<p>'+colorRow[ia][0][2]+'</p>');
	var items = Object.keys(colorRow[ia]).length;
	for (var ib = 0; ib < items; ib++ ) {
		picker.find('ul.pickRow'+ia).append('<li title="' + colorRow[ia][ib][1] + '" data-hex="#' + colorRow[ia][ib][0] + '" style="background-color:#' + colorRow[ia][ib][0] + ';"></li>');
	}
}
pickerWithOff.find('ul.pickRow0').prepend('<li class="noColor"></li>');


function openPicker($this) {
	var $thisPicker = $this.parents('.pickerWrap').find('.picker');
	$('.picker').not($thisPicker).hide();
	if($thisPicker.is(':hidden')) {
		$thisPicker.show();
	}
	else {
		$thisPicker.hide();
	}
}

$('.pickerTrigger').click(function(){
	openPicker($(this));
});
$('.swatch').click(function(){
	openPicker($(this));
});
$('body').click(function(){
	$('.picker').hide();
});
$('.pickerTrigger').click(function(){
	event.stopPropagation();
});
$('.swatch').click(function(){
	event.stopPropagation();
});
//color picker end

// text and colour edit for text tab
var $whichContent = ['headerLeft','copyLeft', 'buttonLeft', 'buttonBackLeft', 'headerRight', 'copyRight', 'buttonRight'];

function contentChoice($contentSelection) {
	$(' .' + $contentSelection + 'Button').click(function() {
		var contentItem = document.querySelector('.new-' + $contentSelection).value;
		$('.' + $contentSelection + '-input').text(contentItem);
		$('.new-' + $contentSelection).val('');
// 		console.log($contentSelection);
		choosingColors($contentSelection);
	});
// 	choosingColors($contentSelection);
}
for (var i = 0; i < $whichContent.length; i++) {
	contentChoice($whichContent[i]);
};

function choosingColors($item) {
	$('.picker' + '.' + $item + ' li').click(function(){
		if($(this).hasClass('noColor')){
			$(this).parents('.pickerWrap').find('.swatch').addClass('noColor');
			$(this).parents('.pickerWrap').find('.swatch').removeAttr('style');
			$(this).parents('.pickerWrap').find('.pickerOutput').val('None');
		}
		else {
			var color = $(this).data('hex');

			console.log($item);


			$(this).parents('.pickerWrap').find('.swatch').removeClass('noColor');
			$(this).parents('.pickerWrap').find('.swatch').css({background: color});

			$(this).parents('.pickerWrap').find('.swatch').css({background: color});

			var paletteType = $(this).parents('.pickerWrap').attr('palette');


// 			$('.' + $item + '-input').css({'color': color});
// 			'input[text-image-selector]'

			if((paletteType === 'text')) {
				$('.' + $item + '-input').css({'color': color});
			} else {
				$('.' + $item + '-input').parent('td').css({'background-color': color});
			}


		$(this).parents('.pickerWrap').find('.pickerOutput').val(color);
		}
	});
}
// text and colour edit for text tab ends
