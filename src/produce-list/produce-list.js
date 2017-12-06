import React, { Component } from 'react';
import produceData from '../produce.json';
import ProduceItem from '../produce-item/produce-item';
import './produce-list.css';
class ProduceList extends Component {
  
  render() {

    function loadList(selected) {  
      //filter list options by selected season
      let produceListBySeason = produceData.filter(item => {
        return item.season === selected;
      });
      //create produce items 
      function _createImg(data) {
        return data.map((produce, index) => {
          return (
            <ProduceItem key={index} produceDetail={produce}/>
          )
        });
      }
      //create items with full list (if no filter selected or on load), or by season
      return selected === '' ? _createImg(produceData) : _createImg(produceListBySeason);
    }

    return (
      <div className="produceItemContainer">
        { loadList(this.props.selectedSeason) }  
      </div>
    )
  }
}

export default ProduceList;