import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  addProduct(params) {
    var newProduct = this.store.createRecord('product', params);
    newProduct.save();
    this.transitionTo('store');
    }
  }
});
