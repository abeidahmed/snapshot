import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SidebarService extends Service {
  @tracked isActive = false;

  @action toggleSidebarVisibility() {
    this.isActive = !this.isActive;
  }
}
