import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ProductItemMixin
} from '../mixins/regenerated/models/i-i-s-super-maga-sales-product-item';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ProductItemMixin, Validations, {
});

defineProjections(Model);

export default Model;
