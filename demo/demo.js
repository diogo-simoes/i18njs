$( document ).ready( function () {

	var i18n = new I18n();
	i18n.localize();
	$('.lang-picker #english').addClass('selected');
	
	$('.lang-picker #portuguese').on('click', function () {
		i18n.lang('pt');
		selectLang($(this));
	})
	$('.lang-picker #english').on('click', function () {
		i18n.lang('en');
		selectLang($(this));
	})
	$('.lang-picker #spanish').on('click', function () {
		i18n.lang('es');
		selectLang($(this));
	})

	function selectLang (picker) {
		$('.lang-picker li').removeClass('selected');
		picker.addClass('selected');
	}
});