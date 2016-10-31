class Artist extends React.Component {
  render () {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.instrument}</td>
        <td>{this.props.arsonist ? 'Yes' : 'No'}</td>
        <td>
          <form action={`/artists/${this.props.id}`} method="DELETE" data-remote="true">
            <button type="submit" className="close">&times;</button>
          </form>
        </td>
      </tr>
    );
  }
}

Artist.propTypes = {
  name: React.PropTypes.string,
  instrument: React.PropTypes.string,
  arsonist: React.PropTypes.bool,
  id: React.PropTypes.node
};
