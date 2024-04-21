import { useContext, useState, useEffect } from "react"
import { SocketContext } from "../../../context/Socket"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import "../style.css"

export default function TicketByMedia() {
  const { dataTicketByMedia } = useContext(SocketContext)
  const [chartOptions, setChartOptions] = useState({})

  useEffect(() => {
    // Format data for Highcharts
    const formattedData = Object.keys(dataTicketByMedia).map(mediaType => ({
      name: mediaType.replace(/_/g, ' '),
      data: [
        dataTicketByMedia[mediaType].total,
        dataTicketByMedia[mediaType].work_in_progress,
        dataTicketByMedia[mediaType].done
      ]
    }))

     // Define chart options
     const options = {
      chart: {
        backgroundColor: "transparent",
        type: "column",
        width: 568,
        height: 190,
        margin: [10, 40, 70, 40] // [top, right, bottom, left]
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: ['Total', 'Work in Progress', 'Done'],
        labels: {
            enabled: true,
            style: {
              color:'#525252',
            }
        },
        lineColor: 'transparent', 
        lineWidth: 0,
      },
      yAxis: {
        visible: false,
        pointPadding: 40,
        title:'',
        gridLineWidth: 0,
        labels: {
            style: {
              color:'#525252', 
            }
        },
      },
      plotOptions: {
        column: {
            pointPadding: 0.1,
            borderWidth: 0,
            allowPointSelect: true,
            borderRadius:8,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                lineWidth:0,
                style: {
                    color:'#525252',
                }
            }
        },
      },
      legend: {
        enabled: true, 
        align: 'center', 
        itemDistance: 2,
        itemStyle: {
          color: '#525252',
        },
        itemHoverStyle: {
          color: '#525252',
        },
        symbolRadius: 7,
        symbolHeight: 10,
        symbolWidth: 10,
        symbolPadding: 5,
        squareSymbol: false,
        symbolColor: '#525252',
        title: {
          text: null,
        },
      },
      series:formattedData
    }

    setChartOptions(options)
  }, [dataTicketByMedia])

  return (
    <div className='card-content_x pt-2 g-bdr-round d-flex justify-content-center align-items-center px-2 flex-column'>
      <h5 className='title-chart'>Ticket By Media</h5>
      <div className='chart-container'>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>

    </div>
  )
}