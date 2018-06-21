export default {
    nav: {
        height: '60px',
        width: '100%',
        background: 'rgb(50, 50, 50, .2)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'rgb(50, 50, 50)',
        fontSize: '20px',
        /* boxShadow: '0 0 8px 2px rgb(50, 50, 50, .5)', */
        a: {
            "&:visited": {
                color: 'rgb(50, 50, 50)',
            },
            "&:hover": {
                background: 'gray',
            },
        },
    },
}