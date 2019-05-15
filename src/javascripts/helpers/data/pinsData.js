import axios from 'axios';

const loadPinsForBoards = () => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((resp) => {
      const allPins = resp.data.pins;
      resolve(allPins);
    })
    .catch(err => reject(err));
});

export default { loadPinsForBoards };
