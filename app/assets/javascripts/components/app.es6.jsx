class App extends React.Component {
  render () {
    return (
      <div className="container">
        <h1 className="mt-3">{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string
};
