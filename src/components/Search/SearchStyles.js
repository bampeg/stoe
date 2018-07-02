export default theme => ({
  container: {
    display: 'flex',
    width: '100%',
    height: '1.5em',
    '& input': {
      fontSize: '.7em',
      width: '100%',
      padding: '.7em',
      borderTopLeftRadius: '2px',
      borderBottomLeftRadius: '2px',
    },
    '& button': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: theme.stoeyGreen,
      borderLeft: `.6em solid ${theme.accentGreen}`,
      borderTopRightRadius: '2px',
      borderBottomRightRadius: '2px',
      cursor: 'pointer',
      '& svg': {
        color: theme.darkGray,
        fontSize: '.8em',
        margin: '.4em .5em .4em .5em',
      },
    }
  }
})