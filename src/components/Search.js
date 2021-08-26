import React, { useState } from 'react'
import { TextField, Button, LinearProgress } from '@material-ui/core'
import shrtcode from '../api/shrtcode'

const Search = () => {
    const [link, setLink] = useState('')

    return (
        <>
            <form>
                <TextField style={{ marginBottom: '5px'}}
                label="Input Your Link"
                variant="outlined"
                value={link}
                />
            </form>
            <Button variant="contained" color="primary">
                Submit
            </Button>
        </>
    )
}

export default Search
