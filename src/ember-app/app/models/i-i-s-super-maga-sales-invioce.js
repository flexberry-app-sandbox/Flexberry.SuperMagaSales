import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as InvioceMixin
} from '../mixins/regenerated/models/i-i-s-super-maga-sales-invioce';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(InvioceMixin, Validations, {
});

defineProjections(Model);

export default Model;
