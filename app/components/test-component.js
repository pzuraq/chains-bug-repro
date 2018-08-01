import Component from '@ember/component';
import { or, readOnly } from '@ember/object/computed';
import { observer } from '@ember/object';

export default Component.extend({
  unwrappedApi: or('api.api', 'api'),

  foo: readOnly('unwrappedApi.foo'),
  bar: readOnly('foo.bar'),

  barObserver: observer('bar', function() {
    console.log('bar changed');
  })
});
