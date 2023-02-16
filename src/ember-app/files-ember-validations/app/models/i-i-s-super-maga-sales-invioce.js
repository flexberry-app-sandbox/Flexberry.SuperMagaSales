import {
  defineNamespace,
  defineProjections,
  Model as InvioceMixin
} from '../mixins/regenerated/models/i-i-s-super-maga-sales-invioce';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(InvioceMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
