import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  salesDate: DS.attr('date'),
  client: DS.belongsTo('i-i-s-super-maga-sales-client', { inverse: null, async: false }),
  productItem: DS.hasMany('i-i-s-super-maga-sales-product-item', { inverse: 'invioce', async: false })
});

export let ValidationRules = {
  salesDate: {
    descriptionKey: 'models.i-i-s-super-maga-sales-invioce.validations.salesDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  client: {
    descriptionKey: 'models.i-i-s-super-maga-sales-invioce.validations.client.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  productItem: {
    descriptionKey: 'models.i-i-s-super-maga-sales-invioce.validations.productItem.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('InvioceE', 'i-i-s-super-maga-sales-invioce', {
    salesDate: attr('Sales date', { index: 0 }),
    client: belongsTo('i-i-s-super-maga-sales-client', 'Client', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' }),
    productItem: hasMany('i-i-s-super-maga-sales-product-item', 'Product item', {
      amount: attr('Amount', { index: 0 }),
      product: belongsTo('i-i-s-super-maga-sales-product', 'Product', {
        name: attr('Name', { index: 2, hidden: true })
      }, { index: 1, displayMemberPath: 'name' })
    })
  });

  modelClass.defineProjection('InvioceL', 'i-i-s-super-maga-sales-invioce', {
    salesDate: attr('Дата продажи', { index: 0 }),
    client: belongsTo('i-i-s-super-maga-sales-client', 'Клиент', {
      name: attr('Клиент', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
