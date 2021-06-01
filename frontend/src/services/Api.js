import axios from 'axios';
import config from './config.json';

const Api = {
  getRecipes: async () => {
    return await axios.get(config.apiHost + '/api/recipes');
  }
};

export default Api;
