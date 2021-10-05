import React from "react";
import reactDom from "react-dom";

export default class EditToolbar extends React.Component {
    render() {
        const { title,undo,redo,closeCallback} = this.props;
        return (
            <div id="edit-toolbar">
                <div 
                    id='undo-button' 
                    className="top5-button"
                    className="disabled"
                    onClick={undo}
                    >
                        &#x21B6;
                </div>
                <div
                    id='redo-button'
                    className="top5-button"
                    className="disabled"
                    onClick={redo}>
                        &#x21B7;
                </div>
                <div
                    id='close-button'
                    className="top5-button"
                    className="disabled"
                    onClick={closeCallback}>
                        &#x24E7;
                </div>
            </div>
        )
    }
}