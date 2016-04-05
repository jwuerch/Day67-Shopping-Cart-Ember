import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addProduct() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        image: this.get('image') ? this.get('image') : "",
        description: this.get('description') ? this.get('description') : "",
        cost: this.get('cost') ? this.get('cost') : "",
      }
      this.sendAction('addProduct', params);
    }
  }
});
