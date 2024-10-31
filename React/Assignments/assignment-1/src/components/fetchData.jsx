import React from "react";

class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
      displayData: false,
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/Celestial-MohitTayal")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => this.setState({ data, loading: false }))
      .catch((error) => this.setState({ error, loading: false }));
  }

  handleDisplayData = () => {
    this.setState({ displayData: true });
  };

  render() {
    const { data, loading, error, displayData } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
      <div>
        <button onClick={this.handleDisplayData}>Display Data</button>

        {displayData && <this.props.render data={data} />}
      </div>
    );
  }
}

export default FetchData;
