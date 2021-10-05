import jsTPS_Transaction from "../../src/jsTPS"

export default class ChangeState_Transaction extends jsTPS_Transaction {
    constructor(initModel,Initoldstate, Initnewstate) {
        super();
        this.model = initModel;
        this.oldstate = Initoldstate;
        this.newstate = Initnewstate;
    }

    doTransaction() {
        this.model.dnd2(this.oldstate,this.newstate);
    }
    
    undoTransaction() {
        this.model.dnd2(this.newstate,this.oldState);
    }
}