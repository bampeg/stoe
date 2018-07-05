export default theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
    margin: '10px',
    '@media (max-width: 400px)': {
      gridTemplateColumns: '1fr',
    },
  },
})