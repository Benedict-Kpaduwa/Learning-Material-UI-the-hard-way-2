import { AppBar, InputBase, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react"


const useStyles = makeStyles((theme) => ({

    toolbar:{
        display: "flex",
        justifyContent: "space-between"
    },

    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]:{
            display: "block",
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]:{
            display: "none",
        }
    }, 

    search: {
        display: "flex",
        alignItems: "center"
    }
}))

const NavBar = () => {

    const classes = useStyles()
    return(
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" className={classes.logoLg}>
                    Benedict
                </Typography>
                <Typography variant="h6" className={classes.logoSm}>
                    Dev
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase placeholder="Search..." />
                </div>

                icons
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;