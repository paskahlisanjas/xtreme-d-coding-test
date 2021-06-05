import axios from 'axios';
import config from './config.json';

const Api = {
  getRecipes: async () => {
    return await axios.get(config.apiHost + '/api/recipes/');
  },

  getIngredients: async () => {
    return await axios.get(config.apiHost + '/api/ingredients/');
  },

  craftItem: async ({ rowSize, columnSize, arrangement }) => {
    return await axios.post(config.apiHost + '/api/workbench/', {
      rowSize, columnSize, arrangement
    });
  },
};

export default Api;
