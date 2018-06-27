export default theme => ({
    container: {
        background: theme.accentGreen,
        height: '60px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& a': {
            '&:visited': {
                color: theme.darkGray,
            },
            '&:hover': {
                color: theme.accent,
            },
        },
        '@media (max-width: 400px)': {

        },
    },
})