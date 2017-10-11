import React from 'react'

class App extends React.Component{
    //Creating a constructor
    constructor() {
        super();
    
    //this is the state apparently inside the constructor
        this.state = {
           data: 
           [
              {
                 "id":1,
                 "name":"Foo",
                 "age":"20"
              },
                  
              {
                 "id":2,
                 "name":"Bar",
                 "age":"30"
              },
                  
              {
                 "id":3,
                 "name":"Baz",
                 "age":"40"
              }
           ]
        }
    }

    render(){
        var i=0;

        var mystyle = {
            fontSize:50,
            padding:30,
            background:'blue'
        }

        return(
            <div>
                <h1>First react project</h1>
                <h2>Cool things you can do:</h2>
                <p data-myattribute="banana">custom attributes, this one has attribute banana</p>
                <p>Also use javascript expressions 1+1 inside curly braces is: {1+1}</p>
                <p>Boolean check: {i==0? 'success': 'failure'}</p>
                <p style={mystyle}>Also use custom css styles </p>
                <p><Headish/></p>
                <table>
                    <tbody>
                        {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                    </tbody>
                </table>
                <p>{this.props.defaultprop}</p>
                <p>{this.props.sentfrommainprops}</p>
            </div>
        );
    }

}
//Note: Careful with the case sensetivity : defaultProps not defaultprops
App.defaultProps={  
    defaultprop:"this is props set by default",
    sentfrommainprops:"this is also set by default"
}

class Headish extends React.Component{
    render(){
        //Simple nesting example
        return(
            <div>
                <h1>This is where the nesting happens<small> Inside a 'headish' thing</small></h1>
            </div>
        );
    }
}

//Following code shows how to use 'props'
class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
          </tr>
       );
    }
 }

export default App;