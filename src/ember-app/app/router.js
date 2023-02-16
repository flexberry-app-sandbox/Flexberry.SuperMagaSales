import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-super-maga-sales-client-l');
  this.route('i-i-s-super-maga-sales-client-e',
  { path: 'i-i-s-super-maga-sales-client-e/:id' });
  this.route('i-i-s-super-maga-sales-client-e.new',
  { path: 'i-i-s-super-maga-sales-client-e/new' });
  this.route('i-i-s-super-maga-sales-invioce-l');
  this.route('i-i-s-super-maga-sales-invioce-e',
  { path: 'i-i-s-super-maga-sales-invioce-e/:id' });
  this.route('i-i-s-super-maga-sales-invioce-e.new',
  { path: 'i-i-s-super-maga-sales-invioce-e/new' });
  this.route('i-i-s-super-maga-sales-product-l');
  this.route('i-i-s-super-maga-sales-product-e',
  { path: 'i-i-s-super-maga-sales-product-e/:id' });
  this.route('i-i-s-super-maga-sales-product-e.new',
  { path: 'i-i-s-super-maga-sales-product-e/new' });
});

export default Router;
