import React from "react";
import ItemCard from './ItemCard.js';

export default class Workspace extends React.Component {
    render() {
        const {
            keyNamePairs,
            currentList,
            editItem,
            dnd
        } = this.props;
        
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id="edit-items">
                        {
                            currentList === null ? <></> :
                            this.props.currentList.items.map((name,index) => {
                                return (<ItemCard
                                    keyNamePairs={keyNamePairs}
                                    currentList={currentList}
                                    index={index}
                                    name={name}
                                    editItem={editItem}
                                    dnd={dnd}
                                />)
                            })

                        }
                    </div>
                </div>
            </div>
            
        )
    }
}