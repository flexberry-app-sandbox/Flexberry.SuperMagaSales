import {
  defineNamespace,
  defineProjections,
  Model as ProductItemMixin
} from '../mixins/regenerated/models/i-i-s-super-maga-sales-product-item';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ProductItemMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
