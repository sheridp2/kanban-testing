import React from 'react'

//props
//* onComplete -- will invoke onDrop with the dataTransferItem

class Dropzone extends React.Component{
  constructor(props){
    super(props)
    this.handleDragOver = this.handelDragOver.bind(this)
    this.handleDrop = this.handleDrop.bind(this)
  }

  handelDragOver(e){
    e.preventDefault()
  }

  handleDrop(e){
    e.preventDefault()
    try{
      let item =JSON.parse(e.dataTransfer.getData('application/json'))
      this.props.onComplete(null, item)
    } catch (error){
      this.props.onComplete(error)
    }
  }

  render(){
    return(
      <div
        className='dropzone'
        onDragOver={this.handelDragOver}
        onDrop={this.handleDrop}>
        {this.props.children}
      </div>
    )
  }
}

export default Dropzone
