export default theme => ({
  container: {
    display: 'flex',
    // padding: '0 1.7em 0 1.7em',
    background: theme.accentGreen,
    height: '2.5em',
    width: '100%',
    '& a': {
      textDecoration: 'none',
      color: theme.darkGray,
      '&:hover': {
        background: theme.borderGray,
      },
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: '.8em',
      paddingRight: '.8em',
      fontWeight: '600',
    },
  },
  selected: {
    background: 'white',
    color: theme.darkGray,
    paddingLeft: '.8em',
    paddingRight: '.8em',
  }
})