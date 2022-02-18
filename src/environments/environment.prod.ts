
import { EnvironmentConfiguration } from 'src/app/core/models/environment-configuration';

export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: false,
  apiUrl: 'http://localhost:5000/api',
  apiEndpoints: {
    category: 'category',
    cuisine: 'cuisine',
    foodmenu: 'foodmenu',
  },
  cacheTimeInMinutes: 30,
};
