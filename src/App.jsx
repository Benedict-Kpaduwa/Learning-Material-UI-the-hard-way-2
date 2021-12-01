import { Button, makeStyles } from "@material-ui/core";
import { Delete, Person } from "@material-ui/icons";
import React from "react"

const useStyles = makeStyles({
    button:{
        color: "white",
        backgroundColor: "black"
    }
})

const App = () => {

    const classes = useStyles()
    return(
        <Button 
            variant="contained" 
            size="large" 
            startIcon={<Person />}
            className={classes.button}
        >
            Material Ui
        </Button>
    )
}

export default App;