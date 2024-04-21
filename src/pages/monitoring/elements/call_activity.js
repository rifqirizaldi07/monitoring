import { useContext } from "react"
import { SocketContext } from "../../../context/Socket"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import "../style.css"

export default function CallActivity() {
  const { dataCallsActivity } = useContext(SocketContext)

  const categories = [
    'IVR', 'Queue', 'Agent', 'Transfer', 'Voicemail'
  ];

  const bar = {
    chart: {
      type: 'column',
      backgroundColor: "transparent",
      height: 160,
      width: 300,
    },
    title: {
      text: '',
    },
    xAxis: [{
      categories: categories,
      reversed: false,
      lineColor: 'transparent',
      lineWidth: 0,
      border: "none",
      labels: {
        step: 1,
        style: {
          color: '#525252'
        }
      },
      accessibility: {
        description: 'Age (male)'
      },
      style: {
        borderStyle: 'none'
      }
    },],
    yAxis: {
      visible: false
    },

    plotOptions: {
      column: {
        pointPadding: 0.6,
        groupPadding: 0.2,
        borderRadius: '5px',
        borderWidth: 0,
        pointWidth: 15,
      },
      series: {
        pointPadding: 0.2,
        stacking: 'normal',
        dataLabels: {
          color: '#525252',
          enabled: true,
          distance: -47,
          inside: false,
          formatter: function () {
            return Math.abs(this.y);
          },
          style: {
            borderWidth: 4,
          },
        }
      },

    },
    tooltip: {
      formatter: function () {
        return Math.abs(this.y);
      }
    },
    legend: {
      itemStyle: {
        color: '#525252'
      },
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Abandoned',
      showInLegend: false,
      color: '#2f72c3',
      data: [
        dataCallsActivity.abandone_ivr,
        dataCallsActivity.abandone_queue,
        dataCallsActivity.abandone_agent,
        dataCallsActivity.abandone_transfer,
        dataCallsActivity.voice_mail,
      ]
    },]
  }

  const cardAgentActivity = (title, value, icon) => {
    return (
      <div className="item p-1">
        <div className="d-flex pr-2">
          <div className="d-flex flex-column justify-content-between w-100">
            <div className='d-flex flex-row mt-2 align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <div className="icon g-bdr-round d-flex justify-content-center align-items-center mr-2">
                  <i className={`${icon} icon-call-activity`}></i>
                </div>
                <div className="card-content--color h-100">{title} </div>
              </div>
              <span className="card-content__value g-bdr-round px-2"> <b>{value || 0}</b></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className='card-content pt-4 g-bdr-round d-flex justify-content-center px-2 flex-column'>
      <h5 className='title-chart px-3'>Call Activity</h5>
      <div className="g-bdr-round d-flex flex-row">
        <div className='px-3 pl-0' style={{ width: '47%' }}>
          <ul className='pl-0 d-flex flex-column g-list-none'>
            <li> {cardAgentActivity('IVR', dataCallsActivity.ivr_call, 'bx bx-phone-incoming')}</li>
            <li> {cardAgentActivity('Queue', dataCallsActivity.queue_call, 'bx bx-bot')}</li>
            <li> {cardAgentActivity('Incoming', dataCallsActivity.incoming_call, 'bx bx-conversation')}</li>
            <li> {cardAgentActivity('Answered', dataCallsActivity.answer_call, 'bx bx-list-ol')}</li>
          </ul>
        </div>
        <div className='d-flex flex-column align-items-center' style={{ width: '49%' }}>
          <h6 className="text-center">Abandoned</h6>
          <div className="row d-flex align-items-center  ">
            <HighchartsReact
              highcharts={Highcharts}
              options={bar}
            />
          </div>
        </div>
      </div>
    </div>
  )
}