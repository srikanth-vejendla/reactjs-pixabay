import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

class ImageRender extends Component {
  render() {
    return (
      <div>
        <GridList cols={3}>
          {this.props.images.map((image, index) => {
            return (
              <GridListTile key={index}>
                <img src={image.largeImageURL} alt="" />

                <GridListTileBar
                  title={
                    <div>
                      <span>{image.user}</span>
                    </div>
                  }
                  subtitle={
                    <div>
                      <span>Likes: {image.likes}</span>
                      <span style={{ float: "right" }}>
                        Favs: {image.favorites}
                      </span>
                    </div>
                  }
                />
              </GridListTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}

export default ImageRender;
