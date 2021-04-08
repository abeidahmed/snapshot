import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HeaderUserMenuComponent extends Component {
  @tracked isActive = false;

  @action toggleMenuVisibility() {
    this.isActive = !this.isActive;
  }
}
