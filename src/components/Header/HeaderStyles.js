export default theme => ({
  container: {
    background: theme.backgroundGreen,
    fontSize: '2em',
    padding: '.8em',
    // paddingTop: '.5em',
  },
  top: {
    display: 'flex',
    justifyContent: 'space-between',
    '& div': {
      height: 0,
      width: 0,
      borderTop: `.9em solid ${theme.stoeyGreen}`,
      borderRight: '.5em solid rgb(0,0,0,0)',
      marginTop: '.35em',
    },
    '& svg': {
      color: 'white',
    }
  },
  stoeyLogo: {
    display: 'flex',
    '& p': {
      color: 'white',
      marginRight: '.1em',
      marginBottom: '.3em',
    },
  },
});