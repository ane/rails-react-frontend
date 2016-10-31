var { Button, ControlLabel, Form, FormControl, FormGroup } = ReactBootstrap;

class Artists extends React.Component {
  render () {
    var rows = [];
    this.props.artists.forEach((artist) => {
      rows.push(
        <Artist key={artist.id} name={artist.name} instrument={artist.instrument} arsonist={artist.arsonist == 1 ? true : false} id={artist.id} />
      )
    })
    return (
      <App title="Artist database">
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Instrument</th>
                <th>Is an arsonist?</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
        <div className="row">
          <div className="card">
            <div className="card-header">
              Add artists 
            </div>
            <div className="card-block">
              <form action="/artists" method="POST" data-remote="true">
                <AuthenticityToken token={this.props.authenticity_token} />
                <div className="form-group">
                  <label>Name</label>
                  <input className="form-control" type="text" name="name" />
                </div>
                <div className="form-group">
                  <label>Instrument</label>
                  <input className="form-control" type="text" name="instrument" />
                </div>
                <div className="form-group">
                  <p className="form-text">Is an arsonist?</p>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="arsonist" value="true" defaultChecked /> Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="arsonist" value="false" /> No
                    </label>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </App>
    );
  }
}

Artists.propTypes = {
  title: React.PropTypes.string,
  artists: React.PropTypes.array
};
