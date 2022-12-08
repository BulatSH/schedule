'use strict';

// Техническая переменная, которая нужна для правильной работы
let path = require('path');

// Объект настроек
module.exports = {
	// Режим, в котором будет работать webpack
	// mode: 'development', // Режим разработки, есть еще production
	mode: 'production',
	entry: './src/js/main.js', // Главный js файл
	// Вайл, который получится в итоге
	output: {
		filename: 'bundle.js',
		// __dirname - корень папки
		path: __dirname + '/src/js'
	},
	watch: true, // Вебпак будет отслеживать проект, и будет применять изменения, когда мы будем сохранять

	devtool: "source-map", // Хранит информацию о исходниках

	// Модули и их настройка, например babel
	module: {
		// Правила
		rules: [
			{
				// Находим js файлы
				test: /\.m?js$/,
				// Исключения
				exclude: /(node_modules|bower_components)/,
				// Как и что используем
				use: {
					// Webpack + babel
					loader: 'babel-loader',
					// Опции
					options: {
						// Пресет
						presets: [['@babel/preset-env', {
							// Показывает инфу прямо во время компиляции
							debug: true,
							// Библиотека со всеми возможными полифилами
							// corejs: 3,
							// Функция core.js, которая позволяет выбрать только те полифилы, 
							// которые нам нужны
							// useBuiltIns: "usage"
						}]]
					}
				}
			}
		]
	},
	// Дальше могут идти плагины, но все нужные уже должны быть в самом вебпаке
};
