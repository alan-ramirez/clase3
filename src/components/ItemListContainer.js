import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootStrap from 'react-bootstrap';
import ReactDOM from 'react-dom'


function UserGreeting(props) {
    return <h1>Bienvenido!</h1>;
  }
  
function GuestGreeting(props) {
    return <h1>Inicia sesión</h1>;
  }


function ItemListContainer(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
}

ReactDOM.render(
    // fijado isLoggedIn={true}:
    <ItemListContainer isLoggedIn={true} />,
    document.getElementById('root')
  );

export default ItemListContainer;