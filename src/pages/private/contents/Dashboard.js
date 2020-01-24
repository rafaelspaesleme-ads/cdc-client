import React, { Component } from 'react';
import SubHeader from '../../../components/SubHeader';

class Dashboard extends Component {

  constructor() {
    super();
  }  

  render(){
    return (<SubHeader titulo="Dashboard do sistema" subTitulo="Clique ao lado direito para ter acesso as configurações desejadas do sistema." />
    )
  }
}
export default Dashboard;