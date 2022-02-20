

class Message extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return e(
      'h1',
      null,
      'REACT MESSAGE HERE (without using JSX)'
    );
  }
}


var otherDomContainer = document.querySelector('#react_message_container');
ReactDOM.render(e(Message), otherDomContainer);