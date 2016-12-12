import Ember from 'ember';
const { isPresent } = Ember;

export default Ember.Component.extend({
  classNames: ['terminal-wrap'],
  promptText: null,
  pastCommands: null,

  init() {
    this._super(...arguments);
    this.setProperties({
      promptText:  '',
      pastCommands: [{
        text: 'help',
        component: 'commands/help-command'
      }]
    });
  },

  actions: {
    inputCommand(text) {
      let splitText = text.split(' ');
      debugger;
      splitText = splitText.map(string => string.trim());
      let [command, ...options] = splitText;

      let pastCommands = this.get('pastCommands');
      let component = this.get('commands')[command];
      if (isPresent(component)) {
        pastCommands.pushObject({
          text,
          component,
          options
        });
      } else {
        if (command === 'clear') {
          pastCommands.clear();
        } else {
          pastCommands.pushObject({
            text: text,
            component: 'commands/not-found',
            options: {
              command: command
            }
          });
        }
      }

      this.set('promptText', '');
      // let terminalHeight = this.$('.terminal')[0].scrollHeight + 40;
      // this.$('.terminal').scrollTop();
    }
  },

  click() {
    this.$('.command-input').focus();
  }
});
