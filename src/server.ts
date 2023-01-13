import { app } from "./app";
let PORT = 3333

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})