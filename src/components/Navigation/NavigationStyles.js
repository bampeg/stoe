export default theme => ({
    nav: {
        height: '60px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: theme.text,
        fontSize: '20px',
        borderBottom: '2px solid ' + theme.border,
        '& a': {
            '&:visited': {
                color: theme.text,
            },
            '&:hover': {
                color: theme.accent,
            },
        },
        '@media (max-width: 400px)': {

        },
    },
})