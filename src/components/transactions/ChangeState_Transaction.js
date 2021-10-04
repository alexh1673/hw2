import jsTPS_Transaction from "../../common/jsTPS.js"

export default class ChangeItem_Transaction extends jsTPS_Transaction {
    constructor(initModel,Initoldstate, Initnewstate) {
        super();
        this.model = initModel;
        this.oldstate = Initoldstate;
        this.newstate = Initnewstate;
    }

    doTransaction() {
        this.model.currentList.moveItem(this.oldstate,this.newstate);
    }
    
    undoTransaction() {
        this.model.currentList.moveItem(this.newstate,this.oldState);
    }
}