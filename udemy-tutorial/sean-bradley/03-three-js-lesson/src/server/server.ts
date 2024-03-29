import express from "express"
import path from "path"
import http from "http"

const port: number = 50000

class App {
    private server: http.Server
    private port: number

    constructor(port: number) {
        this.port = port
        const app = express()
        app.use(express.static(path.join(__dirname, '../client')))
        app.use('/build/three.module.js', express.static(path.join(__dirname, '../../node_modules/three/build/three.module.js')))
        app.use('/jsm/controls/OrbitControls', express.static(path.join(__dirname, '../../node_modules/three/examples/jsm/controls/OrbitControls.js')))

        this.server = new http.Server(app);
    }

    public Start() {
        this.server.listen(this.port, () => {
            console.log( `Server listening on Port ${this.port}.` )
        })
    }
}

new App(port).Start()