import axios from 'axios';
import config from './config.json';

const Api = {
  getRecipes: async () => {
    return await axios.get(config.apiHost + '/api/recipes/');
  },

  getIngredients: async () => {
    return await axios.get(config.apiHost + '/api/ingredients/');
  },
};

export default Api;
