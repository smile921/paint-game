import Controller from '@ember/controller';

export default Controller.extend({
    color: 'blue',
    actions: {
        changeCellColor(cell){
            cell.set('color',this.color);
        }
    }
});
