import boardsData from '../../helpers/data/boardsData';
import util from '../../helpers/util';

let boards = [];

const seePinDiv = (e) => {
  const boardId = e.target.closest('.card').id;
  console.error('you clicked a button!', boardId);
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
};

const bindEvents = () => {
  const allButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < allButtons.length; i += 1) {
    allButtons[i].addEventListener('click', seePinDiv);
  }
};

const boardCards = (boardsArray) => {
  let domString = '';
  boardsArray.forEach((board) => {
    domString += '<div class = "col-3">';
    domString += `<div id = "${board.id}" class="card p-2">`;
    domString += '<div class ="card-body">';
    domString += `<h5 class ="card-title">${board.name}</h5>`;
    domString += '<button class ="btn btn-warning see-pins">Pins</button>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
  bindEvents();
};

const initBoards = () => {
  boardsData.loadBoards()
    .then((resp) => {
      const boardResults = resp.data.boards;
      boards = boardResults;
      boardCards(boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
