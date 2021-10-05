import React from "react"

export default class Top5item extends React.Component{

  constructor(props) {
        super(props);

        this.state = {
            text:this.props.name,
            editActive: false
        }

    }
        
    handleClick = (event) => {
        if (event.detail === 2) {
            this.handleToggleEdit(event);
        }
    }

    handleKeyPress = (event) => {
        console.log(event.code)
        if (event.code === "Enter") {
            this.handleBlur();
        }
    }
    handleToggleEdit = () => {
        this.setState({
            editActive: !this.state.editActive
        });
    }
    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
    }
    handleBlur = () => {
        let key = this.props.index;
        let textValue = this.state.text;
        this.props.editItem(key, textValue);
        this.handleToggleEdit();
    }

    handleDrag =(event) => {
        console.log("drag")
        event.dataTransfer.setData("text", this.props.index);
    }
    handleDrop =(event) => {
        console.log("dropped")
        event.stopPropagation();
        event.preventDefault();
        event.target.style.background = "#e1e4cb";
        let data = event.dataTransfer.getData("text");
        this.props.dnd(this.props.index,parseInt(data))
    }

    handleDragOver = (event) =>{
        console.log("over "+this.props.index)
        event.preventDefault();
        event.target.style.background = "green";
    }

    handleDragLeave = (event) =>
    {
        event.preventDefault();
        event.target.style.background = "#e1e4cb";
    }


    render()
    {
        if(this.state.editActive)
        {
            return(<input
                    id={"item-"+(this.props.index+1)}
                    className='top5-item'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={this.props.name}
                    autoFocus = "true"
                />)
        }
        else{
            return (
                <div 
                className = {"top5-item"} 
                onClick={this.handleClick}
                onDragStart={this.handleDrag}
                onDrop={this.handleDrop}
                onDragOver={this.handleDragOver}
                onDragLeave={this.handleDragLeave}
                draggable = "true"
                autoFocus = "true"
                >
                    {
                        this.props.name
                    }
                </div>

            );
        }
    }

}