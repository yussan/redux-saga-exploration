import React from "react";
import { connect } from "react-redux";

// redux
import { fetchNews } from "../redux/actions/index";

class IndexComponent extends React.Component {
  render() {
    const { reduxState } = this.props;

    console.log(this.props.reduxState);

    return (
      <div>
        <h2>Getting Started with Redux Saga</h2>

        <button
          onClick={() => this.props.dispatch(fetchNews())}
          disabled={reduxState.loading}
        >
          {reduxState.loading ? "Fetcing Data..." : "Fetch Data"}
        </button>

        {reduxState.json && reduxState.json.articles
          ? reduxState.json.articles.map((n, key) => {
              return (
                <div>
                  <h4>{n.title}</h4>
                  <p>{n.description}</p>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default connect(reduxState => {
  return {
    reduxState
  };
})(IndexComponent);
