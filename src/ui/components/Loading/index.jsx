import React from 'react'
import Spinner from 'react-spinkit'
import { Grid } from './styles'

const Loading = () => (
  <Grid>
    <Spinner name="ball-scale-ripple" color="black" />
  </Grid>
)

export default Loading
