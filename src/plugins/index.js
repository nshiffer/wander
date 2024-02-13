/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import 'leaflet/dist/leaflet.css';


export function registerPlugins (app) {
  app.use(vuetify)
}
