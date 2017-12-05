import React, { Component } from 'react';
import produceData from './produce.json';
import ProduceItem from './produce-item';
import './produce-list.css';
class ProduceList extends Component {
  render() {

    function loadList(selected) {
      let produceListBySeason = produceData.filter(item => {
        return item.season === selected;
      });
        function _createImg(data) {
          return data.map((produce, index) => {
            return (
              <ProduceItem key={index} produceDetail={produce}/>
            )
          });
        }

        return selected === '' ? _createImg(produceData) : _createImg(produceListBySeason);
    }
    return (
      <div>
        <div className="produceItemContainer">
          { loadList(this.props.selectedSeason) }
        </div>
      </div>
    )
  }
}

export default ProduceList;