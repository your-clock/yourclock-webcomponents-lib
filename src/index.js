/* eslint-disable */
import alertClock from '@/components/alert-clock.vue';
import titleClock from '@/components/title-clock.vue';
import btnClock from '@/components/btn-clock.vue';
import inputClock from '@/components/input-clock.vue';
import logoGoogle from '@/components/logo-google.vue';
import logoFacebook from '@/components/logo-facebook.vue';

// Exportación de los componentes individualmente
export { alertClock, titleClock, btnClock, inputClock, logoGoogle, logoFacebook }

// Instalación de la librería como un plugin
export function install(Vue) {
  Vue.component('inputClock', inputClock)
  Vue.component('titleClock', titleClock)
  Vue.component('btnClock', btnClock)
  Vue.component('inputClock', inputClock)
  Vue.component('logoGoogle', logoGoogle)
  Vue.component('logoFacebook', logoFacebook)
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use({ install });
}

// Exportación de la librería como plugin
export default { install: install }
