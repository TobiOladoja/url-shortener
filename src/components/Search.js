import React, { useState } from 'react'
import { TextField, Button, LinearProgress } from '@material-ui/core'
import shrtcode from '../api/shrtcode'

const Search = () => {
    const [link, setLink] = useState('')
    const [short, setShort] = useState('')


    const handleChange = (e) => {
        let userInput = e.target.value;
        setLink(userInput)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getLink();
    }

    const getLink = async () => {
        await shrtcode
        .get(`shorten?url=${link}`)
        .then((response) => {
            setShort(response.data.result.short_link)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField style={{ marginBottom: '5px'}}
                label="Input Your Link"
                variant="outlined"
                value={link}
                onChange={handleChange}
                />
            </form>
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Submit
            </Button>
            {short && <div> Short Link: {short}</div>}
        

        </>
    )
}

export default Search
