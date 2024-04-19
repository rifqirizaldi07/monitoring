import React from "react"
import Monitoring from "./pages/monitoring"
import { SocketProvider } from "./context/Socket"
import "bootstrap/dist/css/bootstrap.min.css"
import "./vendor/boxicons-2.1.4/css/boxicons.min.css"
import "./global.css"

const App = () => {
  return (
    <SocketProvider>
      <Monitoring />
    </SocketProvider>
  )
}

export default App
