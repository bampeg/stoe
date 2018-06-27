export default theme => ({
  container: {
    display: 'flex',
    width: '100%',
    height: '1.5em',
    '& input': {
      fontSize: '.7em',
      width: '100%',
      padding: '2.5%',
      // boxSizing: 'border-box',
    },
    '& button': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.stoeyGreen,
      borderLeft: `.6em solid ${theme.accentGreen}`,
      borderTopRightRadius: '3px',
      borderBottomRightRadius: '3px',
      '& svg': {
        color: theme.darkGray,
        fontSize: '.8em',
        margin: '.4em',
        // color: theme.accentGreen,
        // color: theme.backgroundGreen,
      },
    }
  }
})