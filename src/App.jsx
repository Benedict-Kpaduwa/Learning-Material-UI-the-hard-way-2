import { makeStyles } from "@material-ui/core";

import React from "react"
import Feed from "./components/Feed";
import LeftBar from "./components/LeftBar";
import NavBar from "./components/NavBar";
import RightBar from "./components/RightBar";


const useStyles = makeStyles({
    
})

const App = () => {

    const classes = useStyles()
    return(
        <div>
            <NavBar />
            <LeftBar />
            <RightBar />
            <Feed />
        </div>
    )
}

export default App;