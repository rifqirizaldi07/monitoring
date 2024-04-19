import { useContext } from "react"
import { SocketContext } from "../../../context/Socket"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import "../style.css"

export default function AverageDuration() {
  const { dataAvgDuration } = useContext(SocketContext)
 
//   const fixDuration = (stat) => {
//     if(stat === 'abandoned'){
//         let total = (dataAvgDuration.answer_rate + dataAvgDuration.abandone_rate)
//         const value = (dataAvgDuration.abandone_rate / total) * 100
//         return value.toFixed(0)

//     }
//     if(stat === 'answered'){
//         let total = (dataAvgDuration.abandone_rate + dataAvgDuration.answer_rate)
//         const value = (dataAvgDuration.answer_rate / total) * 100
//         return value.toFixed(0)
//     }
// }

  const cardContent = (value = null, name = '', icon = '', background = '', color = '') => {
    return (
      <div className="item pt-1">
      <div className="d-flex pr-2">
        <div className="d-flex flex-column justify-content-between w-100">
          <div className='d-flex flex-row mt-2 align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
              <div className="card-content-icon d-flex justify-content-center align-items-center" style={{ background: background }}>
                <i className={icon} style={{ color: color }}></i>
              </div>
              <div className="card-content--color h-100 px-2">{name} </div>
            </div>
            <span className="card-content__value_duration g-bdr-round px-2">{value || 0}</span>
          </div>
        </div>
      </div>
    </div>
    )
  }

  const doubleCharts = () => {
    const options = {
      chart: {
        backgroundColor: "transparent",
        type: "pie",
        height: 85,
        width: 90,
        style: {
          marginRight: '10px'
        }
      },
      title: {
        style: {
          display: 'none'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          showInLegend: true,
          size: '165%',
          style: {
            marginRight: '10px'
          }

        },
      },
      xAxis: {
        labels: {
          style: {
            color: '#525252'
          }
        }
      },
      exporting: {
        enabled: false
      },
      legend: {
        enabled: false,
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        itemStyle: {
          color: '#525252'
        },
        itemHoverStyle: {
          color: '#525252'
        },
      },
      tooltip: {
        enabled: false,
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Total',
          borderWidth: 0,
          innerSize: '90%',
          data: [
            {
              name: "Answered",
              y: dataAvgDuration.answer_rate,
              color: '#fd9737',
              dataLabels: {
                enabled: false,
                format: '{point.percentage:.0f}%',
                distance: -50,
                backgroundColor: 'none',
                borderWidth: 0,
                style: {
                  fontSize: "20px",
                  color: '#525252'
                }
              }
            },
            {
              name: "Abandoned",
              y: dataAvgDuration.answer_rate ? dataAvgDuration.abandone_rate : 1,
              color: '#ff9e432a',
              dataLabels: {
                enabled: false
              },
            }
          ]
        }
      ]
    };

    const options2 = {
      chart: {
        backgroundColor: "transparent",
        type: "pie",
        height: 85,
        width: 90,
      },
      title: {
        style: {
          display: 'none'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          showInLegend: true,
          size: '165%'
        },
      },
      xAxis: {
        labels: {
          style: {
            color: '#525252'
          }
        }
      },
      exporting: {
        enabled: false
      },
      legend: {
        enabled: false,
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        itemStyle: {
          color: '#525252'
        },
        itemHoverStyle: {
          color: '#525252'
        },
      },
      tooltip: {
        enabled: false,
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Total',
          borderWidth: 0,
          innerSize: '90%',
          data: [
            {
              name: "Abandoned",
              y: dataAvgDuration.abandone_rate,
              color: '#ea5455',
              dataLabels: {
                enabled: false,
                format: '{point.percentage:.0f}%',
                distance: -70,
                backgroundColor: 'none',
                borderWidth: 0,
                style: {
                  fontSize: "20px",
                  color: '#525252'
                }
              }
            },
            {
              name: "Answered",
              y: dataAvgDuration.abandone_rate ? dataAvgDuration.answer_rate : 100,
              color: '#ea54542a',
              dataLabels: {
                enabled: false,
                format: '{point.percentage:.0f}%',
              },
            }
          ]
        }
      ]
    };

    return (
      <div className='d-flex flex-column justify-content-start'>
        <div className=''>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
          />
          <div className="chart-icon--phone">
            <i className="chart-icon__phone bx bxs-phone bx-rotate-270"></i>
          </div>
        </div>
        <div>
          <HighchartsReact
            highcharts={Highcharts}
            options={options2}
          />
          <div className="chart-icon">
            <i className="chart-icon__x bx bx-x"></i>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='card-content pt-3 g-bdr-round d-flex justify-content-center px-2 flex-column'>
      <h5 className='title-chart px-3'>Average Duration</h5>
      <div className="g-bdr-round d-flex flex-row">
        <div className='px-3 pl-0' style={{ width: '50%' }}>
          <ul className='pl-0 d-flex flex-column g-list-none mt-2'>
            <li> {cardContent(dataAvgDuration.avg_asa, 'ASA', 'bx bx-hourglass', '#d5e0ff', '#2f72c3')}</li>
            <li> {cardContent(dataAvgDuration.avg_acd, 'ACD', 'bx bx-timer', '#ea545536', '#ea5455')}</li>
            <li> {cardContent(dataAvgDuration.avg_acw, 'ACW', 'bx bx-spreadsheet', '#28c76f40', '#28c76f')}</li>
            <li> {cardContent(dataAvgDuration.avg_aht, 'AHT', 'bx bx-window', '#ff9f4342', '#ff9f43')}</li>
          </ul>
        </div>
        <div className='d-flex align-items-center' style={{ width: '49.5%' }}>
          <div className=" d-flex justify-content-center">
            {doubleCharts()}
            <div className="call-percentage d-flex flex-column align-items-end">
              <div className="call-percentage__info">
                <h5 className="call-percentage__info-value">{dataAvgDuration.answer_rate ? `${dataAvgDuration.answer_rate}%` : '-'}</h5>
                <span className="call-percentage__info-title">Answered</span>
              </div>
              <div className="call-percentage__info">
                <h5 className="call-percentage__info-value">{dataAvgDuration.abandone_rate ? `${dataAvgDuration.abandone_rate}%` : '-'}</h5>
                <span className="call-percentage__info-title">Abandoned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}