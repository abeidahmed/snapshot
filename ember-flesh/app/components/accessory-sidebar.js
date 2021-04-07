import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AccessorySidebarComponent extends Component {
  @tracked isShowingModal = false;

  @action toggleModalVisibility() {
    this.isShowingModal = !this.isShowingModal;
  }
}
