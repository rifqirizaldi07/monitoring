import { useContext } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import { SocketContext } from "../../../context/Socket"
import "../style.css"

export default function ServiceLevel() {
  const { dataAvgDuration } = useContext(SocketContext)

  const fixDuration = () => {
    let avgDuration = (100 - dataAvgDuration.service_level)
    return parseFloat(avgDuration.toFixed(1))
  }
  //semi-pie chart
  const pieChart = {
    chart: {
      backgroundColor: "transparent",
      type: "pie",
      height: 226,
      width: 310,
      bottom: 0,
      style: {
        display: 'flex',
        marginTop: '180px',
        justifyContent: 'center',
        alignItems: 'center',
      }
    },
    title: {
      style: {
        display: 'none'
      }
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shared: false,
      enabled: false
    },
    plotOptions: {
      series: {
        pointWidth: 10,
        linecap: 'round',
      },
      tooltip: {
        enabled: false
      },
      pie: {
        enableMouseTracking: false,
        dataLabels: {
          enabled: false,
          distance: -105,
          format: dataAvgDuration.service_level ? `${dataAvgDuration.service_level}%` : '',
          style: {
            fontWeight: 'bold',
            color: "#525252",
            fontSize: '25px',
          },
        },
        startAngle: -90,
        endAngle: 90,
        // size: '130%',
        style: {
          borderRadius: '20px',
          borderStyle: "none"
        },

        stickyTracking: false,
        size: '125%',
        borderRadius: 5,
      }
    },
    exporting: {
      enabled: false
    },

    series: [{
      showInLegend: false,
      borderRadius: '20px',
      borderWidth: 0,
      type: 'pie',
      name: "Service",
      innerSize: '85%',
      data: [
        {
          name: `${dataAvgDuration.service_level || 0}%`,
          y: dataAvgDuration.service_level || null,
          color: '#2f72c3',
        },
        {
          name: `${dataAvgDuration.service_level}%`,
          y: fixDuration(),
          color: '#d5e0ff',

          dataLabels: {
            enabled: false
          },
        }
      ]

    }]
  }

  return (
    <div className='card-content pb-1 g-bdr-round'>
      <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
        <h5 className='title-chart text-center pt-2' style={{marginBottom:'-220px'}}>Service Level</h5>
        <div className="row justify-content-center" >
          <div className="service-level__legend d-flex flex-column justify-content-center align-items-center">
            <h1 className="service-level__legend__desc">
              {dataAvgDuration.service_level ? `${dataAvgDuration.service_level}%` : ''}
            </h1>
          </div>
          <HighchartsReact
            highcharts={Highcharts}
            options={pieChart}
          />
        </div>
      </div>
    </div>
  )
}