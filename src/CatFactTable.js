import React, { Component } from 'react';
import { Table } from 'antd';
import axios from 'axios';


class CatFactTable extends Component {
constructor(props) {
super(props);
this.state = {
data: [],
loading: true,
};
}


componentDidMount() {
axios.get('https://catfact.ninja/fact')
.then(response => {
const catFact = response.data;
this.setState({
data: [catFact],
loading: false,
});
})
.catch(error => {
console.error('Error fetching cat fact:', error);
this.setState({
loading: false,
});
});
}


render() {
const columns = [
{
title: 'Cat Fact',
dataIndex: 'fact',
key: 'fact',
},
];


return (
<Table
columns={columns}
dataSource={this.state.data}
loading={this.state.loading}
rowKey="fact"
/>
);
}
}


export default CatFactTable;
