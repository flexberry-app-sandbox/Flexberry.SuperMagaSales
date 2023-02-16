import { Serializer as InvioceSerializer } from
  '../mixins/regenerated/serializers/i-i-s-super-maga-sales-invioce';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(InvioceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
