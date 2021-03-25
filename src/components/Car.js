import React from 'react'
import cars from '../cars.json'
import { Container, Paper, Chip } from '@material-ui/core'

const Car = (props) => {
    const id = props.match.params.id
    const car = cars.find(c => c.id == id)

    console.log(car)
    return (
        <Container className='car-container' maxWidth="sm">
            <Paper className='car-paper'>
                <h2>{car.Name}</h2>
                {Object.keys(car).map((key, index) => {
                    return <Chip label={`${key}: ${car[key]}`}></Chip>
                })}
            </Paper>
        </Container>
    )
}

export default Car