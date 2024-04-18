import { useState, useEffect, createContext } from "react";
import io from 'socket.io-client';
export const SocketContext = createContext()

export const SocketProvider = (props) => {
  const [socketClient, setSocketClient] = useState(null)
  const [socketReady, setSocketReady] = useState(false)
  // monitoring calls
  const [dataAgentActivity, setDataAgentActivity] = useState({})
  const [dataCallsActivity, setDataCallsActivity] = useState({})
  const [dataAvgDuration, setDataAvgDuration] = useState({})
  const [dataTicketHour, setDataTicketHour] = useState({})
  const [dataTicketByMedia, setDataTicketByMedia] = useState({})

  const socketClose = () => {
    if (socketClient)
      socketClient.close()
  }

  const socketMonitoring = () => {
    if (socketClient) {
      socketClient.emit('mon-call-count', {})
      socketClient.emit('mon-call-duration', {})
      socketClient.emit('mon-ticket-hour', {})
      socketClient.emit('mon-user-count', {})
      socketClient.emit('mon-ticket-media', {})
    }
  }

  const socketConnect = () => {
    const socketUrl = process.env.REACT_APP_API_URL
    const socket = io(socketUrl, {
      transports: ['polling'],
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      randomizationFactor: 0.5,
    })

    /* Socket disconnect */
    socket.on("disconnect", () => {
      console.log("socket disconnected")
    })

    /* Socket Connect */
    socket.on("connect", () => {
      console.log("socket connected")
      // console.log(socket.id);
      setSocketReady(true)
      setSocketClient(socket)

      socket.emit('mon-call-count', {})
      socket.emit('mon-call-duration', {})
      socket.emit('mon-ticket-hour', {})
      socket.emit('mon-user-count', {})
      socket.emit('mon-ticket-media', {})
    })

    /* Call Count */
    socket.on('total-mon-call-count', function (data) {
      // console.log('total-mon-call-count', data);
      setDataCallsActivity(data)
    });

    /* Call Duration */
    socket.on('total-mon-call-duration', function (data) {
      // console.log("total-mon-call-duration", data);
      setDataAvgDuration(data)
    });

    /* Call Type Monitoring Event*/
    socket.on('total-mon-ticket-hour', function (data) {
      // console.log('total-mon-call-type', data);
      setDataTicketHour(data)
    });

    /* User Count */
    socket.on('total-mon-user-count', function (data) {
      // console.log('total-mon-user-count', data);
      setDataAgentActivity(data)
    });

    /* Ticket Media Count */
    socket.on('total-mon-ticket-media', function (data) {
      // console.log('total-mon-user-count', data);
      setDataTicketByMedia(data)
    });
  }

  useEffect(() => {
    const isSocketNotReady = !socketReady;
    if (isSocketNotReady)
      socketConnect();
  }, [socketReady]);

  return (
    <SocketContext.Provider value={{
      socketClient,
      socketClose,
      setSocketReady,
      socketMonitoring,
      dataAgentActivity,
      dataAvgDuration,
      dataCallsActivity,
      dataTicketHour,
      dataTicketByMedia
    }}>
      {props.children}
    </SocketContext.Provider >
  )
}
