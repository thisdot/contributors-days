import Ember from 'ember';

export default Ember.Route.extend({
  model() {

    // Command name: component name
    let commands = {
      'help': 'commands/help-command',
      'not-found': 'commands/not-found',
      'what': 'commands/what-command',
      'why': 'commands/why-command',
      'agenda': 'commands/agenda-command',
      'frameworks': 'commands/frameworks-command',
      'apply': 'commands/apply-command',
    };

    return commands;
  }
});
