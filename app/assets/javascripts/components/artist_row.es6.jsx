class ArtistRow extends React.Component {
  render () {
    return (
      <div>
        <div>Name: {this.props.name}</div>
        <div>Instrument: {this.props.instrument}</div>
        <div>Arsonist: {this.props.arsonist}</div>
        <div>Id: {this.props.id}</div>
      </div>
    );
  }
}

ArtistRow.propTypes = {
  name: React.PropTypes.string,
  instrument: React.PropTypes.string,
  arsonist: React.PropTypes.bool,
  id: React.PropTypes.node
};
