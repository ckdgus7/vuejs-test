// Polyfills for IE support
import es6Promise from 'es6-promise';
es6Promise.polyfill();
import 'babel-polyfill';
import { start } from 'single-spa';
import appRegister from './utils/appRegister';
import './utils/basisData';

const routerPromise = new Promise((resolve) => {
  resolve(
    appRegister('router-front')
  );
});

routerPromise.then(() => {
  setTimeout(() => {
    appRegister('base-front', ['/base']);
    appRegister('its-front', ['/its']);
    appRegister('platform-front', ['/platform', '/invest']);
    appRegister('estimate-front', ['/estimate']);
    appRegister('insight-front', ['/dataInsight']);
    start({
      urlRerouteOnly: true
    });
  }, 1000);
});
