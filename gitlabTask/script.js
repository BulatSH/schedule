const order = $('.order__row'),
	cardsContainer = $('.cards-container'),
	cardsShowBtn = $('.cards-show-btn');

function saveActiveCard(index, item) {
	localStorage.setItem('active card', index);
	swap(item, cardsContainer);
}

// function setActiveCard() {
// 	if (!localStorage.getItem('active card')) {
// 		saveActiveCard(0, order.find('a')['0']);
// 	} else {
// 		saveActiveCard(localStorage.getItem('active card'),
// 			order.find('a')[`${localStorage.getItem('active card')}`]);
// 	}
// }

// setActiveCard();

function swap(item, cardsContainer) {
	cardsContainer.prepend($('.card_active'));

	order.prepend(item);

	cardsContainer.children().each((index, item) => {
		$(item).removeClass('card_active');
	});

	$(item).addClass('card_active');
}

cardsShowBtn.on('click', (e) => {
	$(e.target).toggleClass('cards-show-btn_active');

	cardsContainer.toggleClass('cards-container_active')
});

order.find('a').each((index, item) => {
	$(item).on('click', () => {
		swap(item, cardsContainer);
		// saveActiveCard(index, item);
	});
});
