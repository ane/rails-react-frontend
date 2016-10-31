class App extends React.Component {
  render () {
    return (
      <div>
        <div>Title: {this.props.title}</div>
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string
};
