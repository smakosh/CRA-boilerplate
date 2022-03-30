import Spinner from 'react-spinkit'
import { Grid } from './styles'

const Loading = ({ height = '100vh' }) => (
  <Grid height={height}>
    <Spinner name="ball-scale-ripple" color="black" />
  </Grid>
)

export default Loading
