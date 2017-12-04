import React, { Component } from 'react';
import produceData from './produce.json';

class ProduceList extends Component {
  //get list of produce based on selected season and render produce image to component
  render() {

    // .map(produce => {
    //   return (
    //     <div><img src={produce.path} alt={produce.item}></img></div>
    //   )
    // });

    // let allProduce = produceData.map(item => {
    //   return (
    //     <div><img src={produce.path} alt={produce.item}></img></div>
    //   )
    // });

    // console.log('produceList: ', produceListBySeason);
    
    // console.log('what is this: ', loadList());

    let loadList = function(selected) {
      let allProduceList = produceData;
      let produceListBySeason = produceData.filter(item => {
        return item.season === selected;
      });

      if(selected === '') {
        return allProduceList.map((produce, index) => {
          return (
            <div key={index}><img src={produce.path} alt={produce.item}></img></div>
          )
        });

      } else {
        return produceListBySeason.map((produce, index) => {
          return (
            <div key={index}><img src={produce.path} alt={produce.item}></img></div>
          )
        });
      }
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