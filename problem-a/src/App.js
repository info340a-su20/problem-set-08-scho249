import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */

export class App extends Component {
  render() {
    let senators = this.props.senators;

    return (
      <div className="container">
        <h1>US Senators 2019</h1>
        <SenatorTable senators={senators} key={senators}/>
      </div>
    );
  }
}

export class SenatorTable extends Component {
  render() {
    let senatRow = this.props.senators.map((x) => <SenatorRow key={x.id} senator={x}/>);
    return (
      <table className = "table table-bordered">
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']} />
        <tbody>
          {senatRow}
        </tbody>
      </table>
    )
  }
}

export class TableHeader extends Component {
  render() {
    let cols = this.props.cols.map(x => 
      <th key={x}>{x}</th>);
      
    return (
      <thead>
        <tr>
          {cols}
        </tr>
      </thead>
    );
    
  }
  
}

export class SenatorRow extends Component {
  render() {
    let senator = this.props.senator;
  

    return (
      <tr>
        <td>{senator.name}</td>
        <td>{senator.party.charAt(0) + ' - ' + senator.state}</td>
        <td><a href={"tel:" + senator.phone}>{senator.phone}</a></td>
        <td><a href={'https://twitter.com/' + senator.twitter}>{'@' + senator.twitter}</a> </td>
      </tr>
    );
  }
  
}