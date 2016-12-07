'use strict';

angular.module('langSelector').
	component('langSelector', {
		templateUrl: 'lang-selector/lang-selector.template.html',
		controller: function LangSelectorController(){
			this.languages = [
					{ value: 'en', label: 'English' },
					{ value: 'es', label: 'Spanish' },
					{ value: 'pt', label: 'Portuguese'}
				];  
				
		
			// We need to change the labels for diferents languages
			// es: [
			// 		{ value: 'en', label: 'Inglés' }, 
			// 		{ value: 'es', label: 'Español' },
			// 		{ value: 'pt', label: 'Portugués' }
			// 	],
			// 	pt: [
			// 		{ value: 'en', label: 'Inglês' }, 
			// 		{ value: 'es', label: 'Espanhol' },
			// 		{ value: 'pt', label: 'Português' } 
			// 	]

			this.currentLang = this.languages[0];
		}

	});