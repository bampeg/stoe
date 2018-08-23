module.exports = {
  test: function (req, res) {
    console.log('testing')
    const {thing} = req.params
    const {code} = req.query
    res.status(200).send('test ok')
  },
}