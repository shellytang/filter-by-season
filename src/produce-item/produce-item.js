import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import './produce-item.css';

class ProduceImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
  const produceDetail = this.props.produceDetail;
  
  //material-ui dialog options
  const actions = [
    <FlatButton
      label="Back"
      primary={true}
      onClick={this.handleClose}
    />
  ];

    return (
      <div className="produceItem">
        <img className="produceImg" onClick={this.handleOpen} src={produceDetail.path} alt={produceDetail.item} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <h3 className="popupTitle">{produceDetail.item}</h3>
          <div className="popupBody">
            <p>Season: {produceDetail.season}</p>
            <p>{produceDetail.description}</p>
            <a href={`${produceDetail.recipeLink}`} target="_blank">{produceDetail.recipeName}</a>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default ProduceImage;