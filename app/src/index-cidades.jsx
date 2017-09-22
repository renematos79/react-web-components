import React from 'react';
import {render} from 'react-dom';
import Estado from 'prodesp-estados';
import Cidade from 'prodesp-cidades';

class App extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        estados: [{sigla:"SP", nome:"Sao Paulo"}, {sigla:"RJ", nome:"Rio de Janeiro"}],
        cidades: [],
        title: "Relaçao de Cidades"
      }
      this.onSelected = this.onSelected.bind(this);
    }

    onSelected(data){
   	console.log(data);

   	var _cidades = [];
   	if (data.sigla === "SP"){
       		_cidades.push({nome:"Sao Paulo", area: 450234, populacao: 10000000, capital: true});
       		_cidades.push({nome:"Santo Andre", area: 350234, populacao: 5000000, capital: false});
       		_cidades.push({nome:"Sao Bernardo", area: 234321, populacao: 7000000, capital: false});
   	} else {
       		_cidades.push({nome:"Angra dos Reis", area: 450234, populacao: 10000000, capital: false});
       		_cidades.push({nome:"Barra Mansa", area: 350234, populacao: 5000000, capital: false});
       		_cidades.push({nome:"Rio de Janeiro", area: 234321, populacao: 7000000, capital: true});
       		_cidades.push({nome:"Macae", area: 234321, populacao: 7000000, capital: false});
       		_cidades.push({nome:"Marica", area: 234321, populacao: 7000000, capital: false});
   	}

   	this.setState({
       		title: "Relaçao de Cidades do Estado " + data.nome,
       		cidades: _cidades
   	});
    }    

    render () {
      return (
         <div className="row">
           <div className="col-lg-6">
               <Estado datasource={this.state.estados} onSelected={this.onSelected} />
           </div>
           <div className="col-lg-6">
               <Cidade datasource={this.state.cidades} title={this.state.title} />
           </div>
         </div>
      );
   }

}

render(<App />, document.getElementById('app'));
