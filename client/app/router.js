import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('user');
  this.route('userInput');

  this.route("login");
  this.route("register");
  this.route('about');
});

export default Router;
