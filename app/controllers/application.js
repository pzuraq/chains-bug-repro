import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  api: computed(() => {
    return {
      api: {
        foo: {
          bar: 123,
        },
      },
    };
  }),

  actions: {
    updateApi() {
      this.set('api', {
        api: {
          foo: {
            bar: 123,
          },
        },
      });
    },
  },
});
