class AuthenticityToken extends React.Component {
  render () {
    return (
      <input type="hidden" name="authenticity_token" value={this.props.token} />
    );
  }
}

AuthenticityToken.propTypes = {
  token: React.PropTypes.string
};
