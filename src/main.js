import { createApp } from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/css/tailwind.css';

const app = createApp(App);

const requireComponent = require.context('./components', true, /Base[A-Z]\w+\.(vue|js)$/);
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));

  app.component(componentName, componentConfig.default || componentConfig);
});

app.use(store).use(router).mount('#app');
