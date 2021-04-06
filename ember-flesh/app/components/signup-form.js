import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignupFormComponent extends Component {
  @service store;

  @tracked email = '';
  @tracked password = '';
  @tracked fullName = '';
  @tracked errors = [];

  @action updateEmailField(event) {
    this.email = event.target.value;
  }

  @action updatePasswordField(event) {
    this.password = event.target.value;
  }

  @action updateNameField(event) {
    this.fullName = event.target.value;
  }

  @action async createUserRecord(event) {
    event.preventDefault();
    this.errors = [];
    const user = this.store.createRecord('user', {
      full_name: this.fullName,
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
