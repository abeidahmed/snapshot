import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginFormComponent extends Component {
  @service store;

  @tracked email = '';
  @tracked password = '';
  @tracked errors = [];

  @action updateEmail(event) {
    this.email = event.target.value;
  }

  @action updatePassword(event) {
    this.password = event.target.value;
  }

  @action async loginUser(event) {
    event.preventDefault();
    this.errors = [];
    const user = this.store.createRecord('session', {
      email: this.email,
      password: this.password,
    });

    try {
      await user.save();
    } catch (_error) {
      this.errors = user.errors.toArray();
    }
  }
}
