export default theme => ({
  container: {
    display: 'flex',
    // width: '100%',
    // width: '100%',
    flexDirection: 'column',
    background: theme.backgroundGreen,
    fontSize: '2em',
    padding: '1em'
  },
  stoeyLogo: {
    display: 'flex',
    '& p': {
      color: 'white',
      marginRight: '.1em',
    },
    '& div': {
      height: 0,
      width: 0,
      borderTop: `.7em solid ${theme.stoeyGreen}`,
      borderRight: '.5em solid rgb(0,0,0,0)',
    },
  },
})