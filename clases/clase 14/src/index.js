const { port } = require('./config/index.config')
const app = require("./app")

app.listen(3000, () => {
    console.log(`Server running at port ${port}`)
})