import * as React from 'react'
import propTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


function RegisterDatePicker(props) {
  return (
    <Grid container spacing={16} direction="column" justify="center" alignItems="center">
    </Grid>
    
  )
}

const styles = {
  card: {
    minWidth: 150
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    // marginBottom: 24,
  },
  header: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 48
  }
}

export default withStyles(styles)(RegisterDatePicker)