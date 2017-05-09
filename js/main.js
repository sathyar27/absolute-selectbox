(function ($) {
	$.fn.customSelect = function (options) {
		console.log(options.myClass);
		var className = options.myClass;
		return this.each(function () {
			var el = $(this);
				el.commonWrap = $('<div class="absoluteSelect"/>');
				el.commonWrap.addClass(className);
			var optionTag = el.children(),
				wrapperDIV = $('<div class="customSelect"/>'),
				valueHolder = $('<span class="customSelectInner"/>'),
				spanTag = $('<span class="text"/>'),
				spanTag1 = $('<span class="bgText"/>'),
				icon = $('<i class="arrow"/>'),
				icon1 = $('<i class="arrow"/>'),
				ULTag = $('<ul/>');
				el.parent().append(el.commonWrap);
				el.commonWrap.append(valueHolder);
				valueHolder.append(spanTag);
				el.commonWrap.append(wrapperDIV);
				wrapperDIV.append(ULTag);
				el.commonWrap.append(icon);
				if(!(className=='demo1')) {
					wrapperDIV.append(spanTag1);
					wrapperDIV.append(icon1);
				}
				else {
					valueHolder.append(spanTag1);
				}

			optionTag.each(function () {
				ULTag.append("<li>" + $(this).text() + "</li>");
			}).end().remove();

			spanTag.click(function () {
				if(el.commonWrap.hasClass('next') && el.commonWrap.hasClass('active')) {
					el.commonWrap.removeClass('active next');
					el.commonWrap.find('.arrow').addClass('close');
				}
				else {
					el.commonWrap.find('.arrow').removeClass('close');
					el.commonWrap.addClass('active');
				}
			});
			var defaultText,liCount;
			defaultText = el.commonWrap.find('li:first-child').text();
            el.commonWrap.find('.text').text(defaultText);
			ULTag.each(function () {
				liCount = el.commonWrap.find('li').length;
				$('li', this).click(function () {
					var currentElement = $(this);
					el.commonWrap.find('.text').text($(this).text());
					el.commonWrap.removeClass('active').addClass('closeActive next');
					el.commonWrap.find('.arrow').removeClass('close');

					setTimeout(function(){el.commonWrap.removeClass('closeActive')},410);

					if($(this).text() == defaultText) {
						el.commonWrap.find('.text').addClass('choose');
						setTimeout(function(){el.commonWrap.find('.arrow').removeClass('close');},0);
					}
					else {
						setTimeout(function(){el.commonWrap.find('.arrow').addClass('close');},20);
						el.commonWrap.find('.text').removeClass('choose');
					}

					if(!(className=='demo1')) {
						if(($(this).index()) == 1) {
							setTimeout(function() {
								currentElement.parents('.customSelect').addClass('list1').removeClass('list0 list2 list3');
							},400);
						}
						else if(($(this).index()) == 2) {
							setTimeout(function(){currentElement.parents('.customSelect').addClass('list2').removeClass('list0 list1 list3')},400);
						}
						else if(($(this).index()) >= 3) {
							setTimeout(function(){currentElement.parents('.customSelect').addClass('list3').removeClass('list0 list2 list1')},400);
						}
						else {
							setTimeout(function(){currentElement.parents('.customSelect').removeClass('list0 list2 list1 list3')},400);
						}
					}
				});				
			});
			
			icon.click(function() {
				if($(this).hasClass('close')) {
					var currentElement = $(this);
					$(this).removeClass('close');
					el.commonWrap.find('.text').text(defaultText).removeClass('choose');
					el.commonWrap.removeClass('active next');
					if(!(className=='demo1')) {
						el.commonWrap.find('.customSelectInner').addClass('active');
						setTimeout(function(){ el.commonWrap.find('.customSelectInner').removeClass('active'); }, 500);
						setTimeout(function(){currentElement.parents('.absoluteSelect').find('.customSelect').removeClass('list0 list2 list1 list3')},0);
					}
					else {
						el.commonWrap.find('.bgText').addClass('active');
						setTimeout(function(){ el.commonWrap.find('.bgText').removeClass('active'); }, 500);
					}
				}
			});
		});
	};
}(jQuery));
