import { useContext } from 'react'
import { SocketContext } from '../../../context/Socket'
import "../style.css"

export default function AgentActivity() {
  const { dataAgentActivity } = useContext(SocketContext)

  const cardAgentActivity = (title, value, icon) => {
    return (
      <div className="item mt-2 mb-0">
        <div className="d-flex px-1 py-2 mb-1 mr-2">
          <div className='d-flex justify-content-between w-100 align-items-center'>
            <div className='d-flex align-items-center px-1 justify-content-center'>
              <div className='d-flex justify-content-center align-items-center' style={{ width: '0px', marginRight: '12px' }}>
                <i className={`${icon}`} style={{ color: '#2f72c3' }}></i>
              </div>
              <div className="card-content--color h-100">{title} </div>
            </div>
            <span className="card-content__value g-bdr-round px-2"> <b>{value || 0}</b></span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card-content--parent pl-3 w-100 d-flex justify-content-center flex-column">
      <h5 className="title-chart pb-0" style={{ marginTop: "-37px" }}>Agent Activity</h5>
      <div className='grid-7' style={{ height: 'fit-content' }}>
        {cardAgentActivity('Ready In', dataAgentActivity.ready_in, 'bx bx-log-in-circle')}
        {cardAgentActivity('Ready Out', dataAgentActivity.ready_out, 'bx bx-log-out-circle')}
        {cardAgentActivity('ReadyMedia', dataAgentActivity.ready_media, 'bx bx-chat')}
        {cardAgentActivity('Break', dataAgentActivity.break, 'bx bx-coffee')}
        {cardAgentActivity('N/A', dataAgentActivity.not_available, 'bx bx-window-close')}
      </div>
      <div className='grid-7' style={{ height: 'fit-content' }}>
        {cardAgentActivity('Online In', dataAgentActivity.online_in, 'bx bx-podcast')}
        {cardAgentActivity('Online Out', dataAgentActivity.online_out, 'bx bx-globe')}
        {cardAgentActivity('ACW', dataAgentActivity.acw, 'bx bx-spreadsheet')}
        {cardAgentActivity('Paperwork', dataAgentActivity.paperwork, 'bx bx-file-blank')}
        {cardAgentActivity('Login', dataAgentActivity.login_count, 'bx bx-log-in')}
      </div>
    </div>
  )
}