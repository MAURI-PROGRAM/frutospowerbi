import React, { Component } from 'react';
import './styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="Dashboard">
           <iframe  width="1200" height="1000" src="https://app.powerbi.com/view?r=eyJrIjoiNGJmMjY0YjAtNGY2YS00MmVkLTkyNDAtMzZkNTI5YzNjOWU3IiwidCI6IjI1MGY3NmU3LTYxMDUtNDJlMy04MmQwLWJlN2M0NjBhZWE1OSIsImMiOjR9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
           </div>
    );
  }
}