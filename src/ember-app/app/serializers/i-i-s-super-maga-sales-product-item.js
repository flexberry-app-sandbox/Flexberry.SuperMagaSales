import { Serializer as ProductItemSerializer } from
  '../mixins/regenerated/serializers/i-i-s-super-maga-sales-product-item';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ProductItemSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
