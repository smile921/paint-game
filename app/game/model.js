import DS from 'ember-data';

export default DS.Model.extend({
    templatePicture: DS.belongsTo('picture',{ async: false }),
    gamePicture: DS.belongsTo('picture',{ async: false }),
    init(){
        this._super(...arguments);
        this.set('templatePicture',this.store.createRecord('picture'));
        this.set('gamePicture',this.store.createRecord('picture'));
    }
});
