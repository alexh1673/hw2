import jsTPS_Transaction from "../../common/jsTPS.js"

/**
 * ChangeItem_Transaction
 * 
 * This class represents a transaction that updates the text
 * for a given item. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class ChangeItem_Transaction extends jsTPS_Transaction {
    constructor(stat, key, initOldText, initNewText) {
        super();
        this.stat = stat;
        this.key = key;
        this.oldText = initOldText;
        this.newText = initNewText;
    }

    doTransaction() {
        this.stat.state.changeItem(this.id, this.newText);
    }
    
    undoTransaction() {
        this.stat.state.changeItem(this.id, this.oldText);
    }
}