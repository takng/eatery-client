import React from "react";
import { GridList, GridTile } from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import Subheader from "material-ui/Subheader";
import StarBorder from "material-ui/svg-icons/toggle/star-border";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DetailDrawer from "./DetailDrawer.jsx";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  gridList: {
    width: "auto",
    height: "auto",
    overflowY: "auto"
  }
};

const tilesData = [
  {
    img: "images/grid-list/00-52-29-429_640.jpg",
    title: "Breakfast",
    author: "jill111"
  },
  {
    img: "images/grid-list/burger-827309_640.jpg",
    title: "Tasty burger",
    author: "pashminu"
  },
  {
    img: "images/grid-list/camera-813814_640.jpg",
    title: "Camera",
    author: "Danson67"
  },
  {
    img: "images/grid-list/morning-819362_640.jpg",
    title: "Morning",
    author: "fancycrave1"
  },
  {
    img: "images/grid-list/hats-829509_640.jpg",
    title: "Hats",
    author: "Hans"
  },
  {
    img: "images/grid-list/honey-823614_640.jpg",
    title: "Honey",
    author: "fancycravel"
  },
  {
    img: "images/grid-list/vegetables-790022_640.jpg",
    title: "Vegetables",
    author: "jill111"
  },
  {
    img: "images/gerid-list/water-plant-821293_640.jpg",
    title: "Water 3tplant",
    author: "BkrmaerdtyaKarki"
  },
  {
    img: "images/gridert-list/water-plant-821293_640sss.jpg",
    title: "Water pldgantss",
    author: "Bkrmadt34gyaKarkiss"
  },
  {
    img: "images/grtyid-list/water-plant-821293_640sss.jpg",
    title: "Water perlafgntss",
    author: "BkrmadtyaKarkiss"
  },
  {
    img: "images/grifd-list/water-plant-821293_640sss.jpg",
    title: "Water plqwantss",
    author: "BkrmadtyaKsqarkiss"
  },
  {
    img: "images/grid-slist/water-plant-821293_640sss.jpg",
    title: "Water pladntss",
    author: "BkrmadtyaKdarkiss"
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      album: this.props.album,
      details: {
          title: "",
          subtitle: "",
          photos: "",
          rating:""
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ album: nextProps.album });
  }

  handleToggle = () => this.setState({ open: true })
  handleClose = () => this.setState({ open: false })

  render = () => {

    let tiles = []
    let flatAlbum = []

    // convert nested album into a flat hierarchy
    for (let place in this.state.album) {
      for (let photo in this.state.album[place]) {
        flatAlbum.push(this.state.album[place][photo])
      }
    }

    // shuffle flat album
    for (let i = flatAlbum.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = flatAlbum[i];
        flatAlbum[i] = flatAlbum[j];
        flatAlbum[j] = temp;
    }

    // build grid tiles
    for (let photo in flatAlbum) {
      tiles.push(
        <GridTile
          key={flatAlbum[photo]}
          title={"Shut up and take my money!"}
          onTouchTap={() => {
            let detail = {
                title: "shut up and take my money!",
                subtitle: "Fry",
                photos: "",
                rating: ""
              }
              this.setState({details:detail})
              this.handleToggle();
          }}
          subtitle={
            <span>
              by <b>"Fry"</b>
            </span>
          }
          actionIcon={
            <IconButton>
              <StarBorder color="white" />
            </IconButton>
          }
        >
          <img src={flatAlbum[photo]} />
        </GridTile>
      )
    }

    return (
      <div>
        <MuiThemeProvider>
          <div style={styles.root}>
            <GridList cols={4} cellHeight={180} style={styles.gridList}>
              <Subheader>Restaurants</Subheader>
              {tiles}
            </GridList>
          </div>
        </MuiThemeProvider>
        <DetailDrawer
          open={this.state.open}
          detail={this.state.details}
          request={open => this.setState({ open })}
        />
      </div>
    );
  };
}
export default Feed;
