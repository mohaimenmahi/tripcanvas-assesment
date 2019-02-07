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

class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
        <Divider />
        <List>
          {drawerBlogs.map((item, index) => (
            <a href={"#" + item.label} style={{ textDecoration: "none" }}>
              <ListItem button key={index}>
                <ListItemText primary={item.title} />
              </ListItem>
            </a>
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

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SwipeableTemporaryDrawer);
