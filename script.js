'use strict';

// Зловіть посилання
// важливість: 5
// Зробіть так, щоб усі посилання всередині елемента з id="contents" запитали у користувача, чи дійсно він хоче вийти. І якщо ні, то не переходьте за посиланням.

// contents.onclick = function (event) {
// 	function handleLink(href) {
// 		let isLeaving = confirm(`Перейти на ${href}?`);
// 		if (!isLeaving) return false;
// 	}

// 	let target = event.target.closest('a');

// 	if (target && contents.contains(target)) {
// 		return handleLink(target.getAttribute('href'));
// 	}
// };

// Галерея зображень
// Створіть галерею зображень, де основне зображення змінюється натисканням на мініатюру.

// thumbs.onclick = function (event) {
// 	let thumbnail = event.target.closest('a');

// 	if (!thumbnail) return;
// 	showThumbnail(thumbnail.href, thumbnail.title);
// 	event.preventDefault();
// };

// function showThumbnail(href, title) {
// 	largeImg.src = href;
// 	largeImg.alt = title;
// }

// Є список повідомлень із кнопками видалення [x]. Зробіть так, щоб кнопки працювали.

// container.onclick = function (event) {
// 	if (event.target.className != 'remove-button') return;

// 	let pane = event.target.closest('.pane');
// 	pane.remove();
// };

// Створіть дерево, яке показує/приховує дочірні вузли при кліці:
// for (let li of tree.querySelectorAll('li')) {
// 	let span = document.createElement('span');
// 	li.prepend(span);
// 	span.append(span.nextSibling); 
// }
// tree.onclick = function (event) {
// 	if (event.target.tagName != 'SPAN') {
// 		return;
// 	}

// 	let childrenContainer = event.target.parentNode.querySelector('ul');
// 	if (!childrenContainer) return; 

// 	childrenContainer.hidden = !childrenContainer.hidden;
// };


// Make the table sortable: clicks on <th> elements should sort it by corresponding column.

// grid.onclick = function(e) {
// 	if (e.target.tagName != 'TH') return;
// 	let th = e.target;
// 	sortGrid(th.cellIndex, th.dataset.type);
// };
// function sortGrid(colNum, type) {
// 	let tbody = grid.querySelector('tbody');
// 	let rowsArray = Array.from(tbody.rows);
// 	let compare;
// 	switch (type) {
// 		case 'number':
// 			compare = function(rowA, rowB) {
// 				return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
// 			};
// 			break;
// 		case 'string':
// 			compare = function(rowA, rowB) {
// 				return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
// 			};
// 			break;
// 	}
// 	rowsArray.sort(compare);
// 	tbody.append(...rowsArray);
// }