import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { drawerBlogs } from "./BlogArray";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

class Responsive extends React.Component {
  state = {
    top: false,
    selected: 0
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleClick = value => {
    this.setState({ selected: value });
  };

  render() {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
        <Divider />
        <List>
          {drawerBlogs.map((item, index) => (
            <ListItem
              button
              onClick={() => this.handleClick(index + 1)}
              selected={this.state.selected === index + 1}
              key={index}
              component="a"
              href={"#" + item.label}
            >
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer("top", true)}>Open Top</Button>
        <SwipeableDrawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer("top", false)}
          onOpen={this.toggleDrawer("top", true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("top", false)}
            onKeyDown={this.toggleDrawer("top", false)}
          >
            {fullList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

Responsive.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Responsive);
