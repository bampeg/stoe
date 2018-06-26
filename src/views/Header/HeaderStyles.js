export default theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.backgroundGreen,
    fontSize: '2em',
  },
  stoey: {
    display: 'flex',
    margin: '1em 0 0 1em',
    '&>h1': {
      color: 'white',
    },
    '& div': {
      // position: 'relative',
      // bottom: '0px',
      // height: 0,
      marginLeft: '.1em',
      borderTop: `.7em solid ${theme.stoeyGreen}`,
      borderRight: `.5em solid rgb(0,0,0,0)`,
    }
  },
})