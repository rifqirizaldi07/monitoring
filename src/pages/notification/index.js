import React from "react";
import './styles.css'

const Notification = () => {
  return (
    <div className="notification-container">
      <div className="text-center">
        <div className="centered_content">
          <i className='bx bx-no-signal' style={{fontSize: '100px', color: '#0180C9'}}></i>
        </div>
        <div className="mt-2">
          <h5>Monitoring Disconnect</h5>
        </div>
      </div>
    </div>
  )
}

export default Notification;