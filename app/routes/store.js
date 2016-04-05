import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product')
    });
  },
  actions: {
    deleteAllProducts() {
      this.store.findAll('product').then(function(record){
          record.content.forEach(function(rec) {
             Ember.run.once(this, function() {
                rec.deleteRecord();
                rec.save();
             });
          }, this);
       });
    }
  }
});
