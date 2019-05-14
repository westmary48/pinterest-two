import boardsData from '../../helpers/data/boardsData';

const initBoards = () => {
  boardsData.loadBoards()
    .then((resp) => {
      console.error('resp', resp.data.boards);
    })
    .catch(err => console.error('error from loadBoards', err));
};

export default { initBoards };
