import 'dom-node-polyfills';
var bounding = require('bounding')

window.addEventListener('DOMContentLoaded', () => {
	// Объект
	const slides = [
		{
			content: {
				venue: 'Стадион',
				date: '30',
				month: 'мая',
				time: '19:00',
				button: 'Купить билет'
			},
			rivals: {
				rival1: 'Соперник №1',
				rival2: 'Соперник №2'
			}
		},
		{
			content: {
				venue: 'Стадион',
				date: '17',
				month: 'июня',
				time: '19:00',
				button: 'Купить билет'
			},
			rivals: {
				rival1: 'Соперник №3',
				rival2: 'Соперник №4'
			}
		},
		{
			content: {
				venue: 'Стадион',
				date: '26',
				month: 'июня',
				time: '19:00',
				button: 'Купить билет'
			},
			current: 'current',
			rivals: {
				rival1: 'Соперник №5',
				rival2: 'Соперник №6'
			}
		},
		{
			content: {
				venue: 'Стадион',
				date: '16',
				month: 'июля',
				time: '19:00',
				button: 'Купить билет'
			},
			rivals: {
				rival1: 'Соперник №7',
				rival2: 'Соперник №8'
			}
		},
		{
			content: {
				venue: 'Стадион',
				date: '30',
				month: 'сентября',
				time: '19:00',
				button: 'Купить билет'
			},
			rivals: {
				rival1: 'Соперник №9',
				rival2: 'Соперник №10'
			}
		}
	];

	// Рендер слайдера
	function createSlider(slides) {
		const itemsContainer = document.createElement('div');
		itemsContainer.classList.add('schedule-container');

		itemsContainer.innerHTML = `
			<p class="rival rival_left">
				<span>
				</span>
			</p>
			<div class="schedule-inner">
				<ul class="schedule">
				</ul>
			</div>
			<p class="rival rival_right">
				<span>
				</span>
			</p>
		`;

		for (let i = 0; i < slides.length; i++) {
			itemsContainer.querySelector('.schedule').innerHTML += `
				<li class="schedule__item">
					<div class="event-container">
						<p class="event__venue">
							${slides[i].content.venue}
						</p>
						<p class="event__date">
							<span>
								${slides[i].content.date}
							</span>
							<span>
								${slides[i].content.month}
							</span>	
						</p>
						<div class="event__bottom">
							<p class="event__time">
								${slides[i].content.time}
							</p>
							<button class="event__button">
								${slides[i].content.button}
							</button>
						</div>
					</div>
				</li>
			`;
		}

		for (let i = 0; i < slides.length; i++) {
			if (slides[i].current) {
				itemsContainer.querySelector('.rival_left span').innerHTML =
					slides[i].rivals.rival1;
				itemsContainer.querySelector('.rival_right span').innerHTML =
					slides[i].rivals.rival2;

				itemsContainer.querySelectorAll('.schedule__item')[i].
					classList.add(`schedule__item_${slides[i].current}`);

				setClasses(itemsContainer.querySelectorAll('.schedule__item'), i);
			}
		}



		return itemsContainer;
	}

	// Инициализация слайдера
	const scheduleContainer = document.querySelector('.main-page');
	scheduleContainer.append(createSlider(slides));

	const schedule = scheduleContainer.querySelector('.schedule'),
		scheduleItems = schedule.children;

	setDisplacement(schedule, getCurrentElementIndex(scheduleItems));

	// Проверка на то, вышли элементы за пределы массива или нет
	function checkSideElements(items) {
		for (let i = 0; i < items.length; i++) {
			if (items[i].classList.contains('schedule__item_current') && i === 0 ||
				items[i].classList.contains('schedule__item_current') &&
				i === items.length - 1) {

				return i;
			}
		}
	}

	// Получение текущего элемента
	function getCurrentElementIndex(items) {
		for (let i = 0; i < items.length; i++) {
			if (items[i].classList.contains('schedule__item_current')) {

				return i;
			}
		}
	}

	// Установка классов активности
	function setClasses(items, current) {
		items[current - 1].classList.add('schedule__item_side');
		items[current].classList.add('schedule__item_current');
		items[current + 1].classList.add('schedule__item_side');
	}

	// Переключение классов
	function shiftClass(items, current, direction) {
		if (direction === 'next') {
			if (current === items.length - 1) {
				items[current - 1].classList.add('schedule__item_side');
				items[current].classList.add('schedule__item_current');
			} else if (current >= 1) {
				setClasses(items, current);
			}
		} else if (direction === 'prev') {
			if (current === 0) {
				items[current].classList.add('schedule__item_current');
				items[current + 1].classList.add('schedule__item_side');
			} else if (current <= items.length - 2) {
				setClasses(items, current);
			}
		}
	}

	// Установка текущего слайда
	function setCurrentSlide(items, current, direction) {
		for (let i = 0; i < items.length; i++) {
			items[i].classList.remove('schedule__item_side',
				'schedule__item_current');
		}

		shiftClass(items, current, direction);
	}

	// Рассчет смещения слайдера
	function setDisplacement(slider, current) {
		const centerX = +slider.getBoundingClientRect().width / 2 +
			+bounding(slider).x;
		const centerY = +slider.getBoundingClientRect().height / 2 +
			+bounding(slider).y;

		const itemCenterX = +slider.children[current].getBoundingClientRect().width / 2 +
			+bounding(slider.children[current]).x;
		const itemCenterY = +slider.children[current].getBoundingClientRect().height / 2 +
			+bounding(slider.children[current]).y;

		slider.style.transform =
			`translate(${centerX - itemCenterX}px, ${centerY - itemCenterY}px) rotate(-30deg)`;
	}

	// Установка смещения слайдера по скроллу
	function setDisplacementWithScroll(e) {
		if (checkSideElements(scheduleItems) === 0 && e.deltaY < 0 ||
			checkSideElements(scheduleItems) === scheduleItems.length - 1 &&
			e.deltaY > 0) {

			return false;
		} else if (e.deltaY < 0) {
			if (getCurrentElementIndex(scheduleItems) !== 0) {

				let current = getCurrentElementIndex(scheduleItems) - 1;

				setCurrentSlide(scheduleItems, current, 'prev');
				setRival(getCurrentElementIndex(scheduleItems));
			}

			if (getCurrentElementIndex(scheduleItems) === 0) {
				setCurrentSlide(scheduleItems,
					getCurrentElementIndex(scheduleItems), 'prev');
				setRival(getCurrentElementIndex(scheduleItems));
			};

			setDisplacement(schedule, getCurrentElementIndex(scheduleItems));
		} else if (e.deltaY > 0) {
			if (getCurrentElementIndex(scheduleItems) !== scheduleItems.length - 1) {

				let current = getCurrentElementIndex(scheduleItems) + 1;

				setCurrentSlide(scheduleItems, current, 'next');
				setRival(getCurrentElementIndex(scheduleItems));
			}

			if (getCurrentElementIndex(scheduleItems) === scheduleItems.length - 1) {
				setCurrentSlide(scheduleItems,
					getCurrentElementIndex(scheduleItems), 'next');
			};

			setDisplacement(schedule, getCurrentElementIndex(scheduleItems));
			setRival(getCurrentElementIndex(scheduleItems));
		}
	}

	// Установка соперников
	function setRival(i) {
		scheduleContainer.querySelector('.rival_left span').innerHTML = slides[i].rivals.rival1;
		scheduleContainer.querySelector('.rival_right span').innerHTML = slides[i].rivals.rival2;
	}

	// Обработчик события на скролл
	window.addEventListener('wheel', (e) => setDisplacementWithScroll(e));

	// Обработчик события на клик и тап
	for (let i = 0; i < scheduleItems.length; i++) {
		scheduleItems[i].addEventListener('click', () => {
			if (getCurrentElementIndex(scheduleItems) < i) {
				setCurrentSlide(scheduleItems, i, 'next');
			} else if (getCurrentElementIndex(scheduleItems) > i) {
				setCurrentSlide(scheduleItems, i, 'prev');
			}

			setDisplacement(schedule, i);
			setRival(getCurrentElementIndex(scheduleItems));
		});
	}
});
