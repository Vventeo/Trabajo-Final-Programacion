import express from "express";
import "dotenv/config";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('eMCRASHYOMGVOHMOHI!')
})

app.listen(port, () => {
  console.log(`el server esta correindo en: ${port}`)
})