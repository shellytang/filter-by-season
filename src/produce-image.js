import React, { Component } from 'react';
import ProduceDetail from './produce-detail';

class ProduceImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {

  const produceDetail = this.props.produceDetail;
  const popup = (this.state.visible ? <ProduceDetail details={produceDetail} toggleDetails={this.showDetails}/> : null);

    return (
      <div>
        <img onClick={() => this.showDetails()} src={produceDetail.path} alt={produceDetail.item}></img>
        {popup}
      </div>
    )
  }
}

export default ProduceImage;