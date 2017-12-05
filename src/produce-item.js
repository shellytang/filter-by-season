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
  const actions = [
    <FlatButton
      label="Back"
      primary={true}
      onClick={this.handleClose}
    />
  ];

    return (
      <div className="produceItem">
        <img onClick={this.handleOpen} src={produceDetail.path} alt={produceDetail.item}/>
        <Dialog
          title={produceDetail.item}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <p>{produceDetail.description}</p>
          <a href={`${produceDetail.recipeLink}`} target="_blank">{produceDetail.recipeName}</a>
        </Dialog>
      </div>
    );
  }
}

export default ProduceImage;