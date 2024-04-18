import React, {useEffect, useContext} from 'react'
import { SocketContext } from '../../context/Socket'
import Layout from '../../components/Layout'
import ServiceLevel from './elements/service_level'
import CallActivity from './elements/call_activity'
import AverageDuration from './elements/average_duration'
import TicketByMedia from './elements/ticket_by_media'
import Information from './elements/information'
import AgentActivity from './elements/agent_activity'
import TicketByHours from './elements/ticket_by_hours'
import Notification from '../notification'
import "./style.css"

const Monitoring = () => {
  const {
    socketClient,
    socketMonitoring,
  } = useContext(SocketContext)

  useEffect(() => {
    if (socketClient)
      socketMonitoring()
  }, [socketClient])
  
  return (
    <Layout>
    {socketClient?.connected === true ?
      <div className="grid fade-in p-1">
        <div className="item ">
          <div className="grid-4 h-100">
            <div className="grid-3 row h-100 mt-0">
              <div className="pb-1 g-bdr-round">
                <ServiceLevel />
              </div>
              <div className="g-bdr-round">
                <CallActivity />
              </div>
              <div className="g-bdr-round">
                <AverageDuration />
              </div>
            </div>
            <div className="grid-6 g-bdr-round">
              <div className="g-bdr-round">
                <TicketByMedia />
              </div>
              <div className="g-bdr-round">
                <Information />
              </div>
            </div>
            <div className='grid-6s g-bdr-round '>
              <div className='g-bdr-round'>
                <AgentActivity />
              </div>
              <div className="g-bdr-round">
                <TicketByHours />
              </div>
            </div>
          </div>
        </div>
      </div> : 
      <>
      <Notification />
      </>
    }
      
    </Layout>
  )
}

export default Monitoring
