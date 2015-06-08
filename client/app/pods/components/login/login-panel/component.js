import Ember from 'ember';

export default Ember.Component.extend({
    authenticator: 'simple-auth-authenticator:oauth2-password-grant',

    actions: {
        /**
         This action will authenticate the session with the configured
         authenticator (see
         if both `identification` and `password` are non-empty. It passes both
         values to the authenticator.
         __The action also resets the `password` property so sensitive data does
         not stay in memory for longer than necessary.__
         @method actions.authenticate
         */
        authenticate: function() {
            var options = this.getProperties('identification', 'password');
            this.set('password', null);
            var authenticator = this.get('authenticator');
            return this.get('session').authenticate(authenticator, options);
        }
    }
});
