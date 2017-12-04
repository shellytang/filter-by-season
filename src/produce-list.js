import React, { Component } from 'react';
import produceData from './produce.json';

class ProduceList extends Component {
  //get list of produce based on selected season and render produce image to component
  render() {

    let loadList = function(selected) {
      let allProduceList = produceData;
      let produceListBySeason = produceData.filter(item => {
        return item.season === selected;
      });

      function _createImg(data) {
        return data.map((produce, index) => {
          return (
            <div key={index}><img src={produce.path} alt={produce.item}></img></div>
          )
        });
      }

      return selected === '' ? _createImg(allProduceList) : _createImg(produceListBySeason);
    }
    
    return (
      <div>
        <h2>This is the produce list!</h2>
         {loadList(this.props.selectedSeason)}
      </div>
    )
  }
}

export default ProduceList;