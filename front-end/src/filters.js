import { formatToBRL } from 'brazilian-values';

export default (Vue) => {
  Vue.filter('toBRL', formatToBRL);

  Vue.filter('toAge', (value) => {
    const birthday = new Date(value).getTime();
    const YEAR = 365 * 24 * 60 * 60 * 1000;
    return ~~((Date.now() - birthday) / YEAR) + ' anos';
  })
};
