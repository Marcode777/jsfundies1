

class Imagz extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return e (
      'img',
      { src: './assets/ball.png',
        style: { height: '100px', width: '100px'}
      },
      null
    )
  }
}

var imagzDomContainer = document.querySelector('#react_imagz_container');
ReactDOM.render(e(Imagz), imagzDomContainer);