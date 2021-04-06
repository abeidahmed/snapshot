import Model, { attr } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') email;
  @attr('string') full_name;
  @attr('string') password;
  @attr('string') token;
}
