import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-super-maga-sales-product-item', 'Unit | Model | i-i-s-super-maga-sales-product-item', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-super-maga-sales-client',
    'model:i-i-s-super-maga-sales-invioce',
    'model:i-i-s-super-maga-sales-product-item',
    'model:i-i-s-super-maga-sales-product',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
