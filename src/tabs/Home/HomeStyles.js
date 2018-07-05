export default theme => ({
  container: {
    display: 'flex',
    marginTop: '2em',
  },
  toe: {
    position: 'relative',
    left: '5em',
    height: '2.7em',
    width: '2em',
    background: theme.stoeyGreen,
    borderRadius: '5px 13px 0 0',
    '&>div': {
      height: '1.6em',
      width: '.5em',
      background: theme.accentGreen,
      borderRadius: '5px 2px 2px 0',
    },
  },
  toe1: {
    position: 'relative',
    left: '8em',
    display: 'flex',
    justifyContent: 'center',
    height: '2em',
    width: '1em',
    background: theme.stoeyGreen,
    borderRadius: '3px 3px 1px 1px',
    // overflow: 'hidden',
    fontFamily: 'Squada One',
    // fontSize: '2em',
    color: theme.accentGreen,
    '&>p': {
      position: 'relative',
      bottom: '.25em',
      fontSize: '2em',
    },
    // '&>div': {
    //   position: 'relative',
    //   top: '2px',
    //   height: '1.4em',
    //   width: '1.6em',
    //   border: `.5px solid white`,
    //   borderRadius: '4px 4px 1px 1px',
    // }
  }
})