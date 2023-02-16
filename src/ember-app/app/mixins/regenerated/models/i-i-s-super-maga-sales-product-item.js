import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  amount: DS.attr('number'),
  product: DS.belongsTo('i-i-s-super-maga-sales-product', { inverse: null, async: false }),
  invioce: DS.belongsTo('i-i-s-super-maga-sales-invioce', { inverse: 'productItem', async: false })
});

export let ValidationRules = {
  amount: {
    descriptionKey: 'models.i-i-s-super-maga-sales-product-item.validations.amount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-super-maga-sales-product-item.validations.product.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  invioce: {
    descriptionKey: 'models.i-i-s-super-maga-sales-product-item.validations.invioce.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ProductItemE', 'i-i-s-super-maga-sales-product-item', {
    amount: attr('Amount', { index: 0 }),
    product: belongsTo('i-i-s-super-maga-sales-product', 'Product', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
