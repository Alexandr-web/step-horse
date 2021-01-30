const stepHorse = () => {
  const createElements = () => {
    const list_rows = document.querySelector('.wrapper__rows');

    for (let i = 0; i < 8; i++) {
      const row = document.createElement('ul');
      row.classList.add('wrapper__rows-item');
      
      list_rows.appendChild(row);
      for (let j = 0; j < 8; j++) {
        const block = document.createElement('li');
        const rows = document.querySelectorAll('.wrapper__rows-item');

        block.classList.add('wrapper__rows-item-block');
        block.dataset.x = j + 1;
        block.dataset.y = i + 1;

        if ((i + 1) % 2 === 0) {
          block.style.background = j % 2 === 0 ? 'linear-gradient(to bottom, #B58863, #B56C31, #B58863)' : 'linear-gradient(to bottom, #F0D9B5, #F0C98B, #F0D9B5)';
        } else {
          block.style.background = j % 2 === 0 ? 'linear-gradient(to bottom, #F0D9B5, #F0C98B, #F0D9B5)' : 'linear-gradient(to bottom, #B58863, #B56C31, #B58863)';
        }

        rows[i].appendChild(block);
      }
    }
  }

  createElements();

  const choiceCell = () => {
    const cells = document.querySelectorAll('.wrapper__rows-item-block');

    const showHorse = num => {
      const img = document.createElement('img');
      img.src = './images/horse-face-silhouette-right-side-view-variant.svg';
      img.alt = 'horse';

      cells[num].append(img);
    }

    const hideHorse = () => cells.forEach(cell => cell.innerHTML = '');

    cells.forEach((cell, index) => {
      cell.addEventListener('click', () => {
        const x = parseInt(cell.dataset.x);
        const y = parseInt(cell.dataset.y);

        if (cell.classList.contains('active-cell')) {
          hideHorse();
          showHorse(index);
          checkStep(x, y);
        }
      });

      checkStep(1, 1);
      hideHorse();
      showHorse(0);
    });

    function checkStep(x, y) {
      cells.forEach(cell => {
        cell.classList.remove('active-cell');

        if ((parseInt(cell.dataset.x) === x + 1 && parseInt(cell.dataset.y) === y - 2) ||
            (parseInt(cell.dataset.x) === x - 1 && parseInt(cell.dataset.y) === y - 2) ||
            (parseInt(cell.dataset.x) === x - 2 && parseInt(cell.dataset.y) === y + 1) ||
            (parseInt(cell.dataset.x) === x + 2 && parseInt(cell.dataset.y) === y + 1) ||
            (parseInt(cell.dataset.x) === x + 2 && parseInt(cell.dataset.y) === y - 1) ||
            (parseInt(cell.dataset.x) === x - 2 && parseInt(cell.dataset.y) === y - 1) ||
            (parseInt(cell.dataset.x) === x - 1 && parseInt(cell.dataset.y) === y + 2) ||
            (parseInt(cell.dataset.x) === x + 1 && parseInt(cell.dataset.y) === y + 2)) {
              cell.classList.add('active-cell');
        }
      });
    }
  }

  choiceCell();
}

stepHorse();