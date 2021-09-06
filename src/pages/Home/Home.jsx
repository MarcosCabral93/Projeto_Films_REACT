import Header from '../../components/Header/Header';
import React,{Component} from 'react';
import './Home.css'
import {Link} from 'react-router-dom'
class Home extends Component {
    constructor(props){
        super(props)
       this.state = { 
           filmes:[]
       }
       this.req=this.req.bind(this)
    }
    //Renderiza ao iniciar
    componentDidMount(){
        this.req()
    }
    req(){
        fetch('https://sujeitoprogramador.com/r-api/?api=filmes')
        .then((dados)=> dados.json())
        .then((l)=>{
            this.setState({filmes:l})
            console.log(l)
        })
    }
    
    render() { 
        return ( 
            <div>
         <Header/>
            <main className="container">
                {this.state.filmes.map((item)=>{
                    return(
                        <article className="artigo" key={item.id}>
                            <h3>{item.nome}</h3>
                          <Link to='/Filme'>  <img src={item.foto} alt="Capa Filme" /></Link>
                        </article>
                    )
                })}
            </main>
           </div>

         );
    }
}
 
export default Home;

