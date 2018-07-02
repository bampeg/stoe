export default theme => ({
    container: {
        display: 'flex',
        // alignItems: 'center',
        padding: '0 1.7em 0 1.7em',
        background: theme.accentGreen,
        height: '2.5em',
        width: '100%',
        '& a': {
            '&:visited': {
                color: theme.darkGray,
            },
            '&:hover': {
                color: theme.accent,
            },
            // '&:active': {
            //     background: theme.accentGreen,
            // }
        },
        // '@media (max-width: 400px)': {

        // },
        '& div': {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            marginLeft: '.8em',
            marginRight: '.8em',
            fontWeight: '600',
        },
    },
    selected: {
        // height: '100%',
        background: 'white',
        // padding: '1em',
    }
})