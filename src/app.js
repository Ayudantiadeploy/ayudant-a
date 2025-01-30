import express from "express"
import cors from "cors"

import * as path from "path"
import { fileURLToPath } from "url"
const __dirname = path.dirname(fileURLToPath(import.meta.url))


import productosRoutes from "./routes/productos.routes.js"
import usuariosRoutes from "./routes/usuarios.routes.js"


//Instancia de express
const app = express()


//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

//Carpeta Publica
app.use("/public", express.static(__dirname + "/public"))

//Endpoints API
app.use("/api/v1/productos", productosRoutes) 
app.use("/api/v1/usuarios", usuariosRoutes )


export default app