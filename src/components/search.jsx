import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import ImageRender from "./imagerender";

class Search extends Component {
  pixabay = {
    hostName: "https://pixabay.com/api",
    apiKey: "9825512-0697e35378e987a7ed4c3662c"
  };

  state = {
    imageCount: 10,
    textInput: "",
    images: []
  };

  textInputHandler = e => {
    const val = e.target.value;
    this.setState({
      textInput: val
    });
    if (val === "") {
      this.setState({
        images: []
      });
    } else {
      axios
        .get(
          `${this.pixabay.hostName}/?key=${
            this.pixabay.apiKey
          }&q=${val}&image_type=photo&per_page=${this.state.imageCount}`
        )
        .then(res => {
          this.setState({
            images: res.data.hits
          });
        });
    }
  };

  selectInputHandler = e => {
    this.setState({
      imageCount: e.target.value
    });
  };

  render() {
    return (
      <div>
        <TextField
          name="imageEdit"
          type="text"
          label="Find the image..."
          value={this.state.textInput}
          onChange={this.textInputHandler}
          fullWidth={true}
        />
        <br />
        <br />
        <Select
          onChange={this.selectInputHandler}
          value={this.state.imageCount}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
        <ImageRender images={this.state.images} />
      </div>
    );
  }
}

export default Search;
