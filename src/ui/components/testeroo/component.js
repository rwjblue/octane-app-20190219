import Ember from 'ember';
import Component from '@glimmer/component';

const tracked = Ember._tracked;

export default class TesterooComponent extends Component {
  @tracked count = 0;

  increment() {
    this.count++;
  }
}
