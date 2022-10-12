import { useData } from "./DataContext";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const colors = {
    lowColor: '#E67C53',
    highColor: '#5A8FF5',
    closeColor: '#52F24B'
}


const Chart = () => {
    const dataContext = useData();
    let data = dataContext?.data;

    const CustomTooltip = ({ payload, active }: any) => {
        if (active && payload && payload.length) {
            const datapoint = payload[0].payload
            return (
                <div id='customTooltip'>
                    <h2>{datapoint.date}</h2>
                    <p><span  style={{color: colors.highColor}}>High: </span>${datapoint.high}</p>
                    <p><span  style={{color: colors.lowColor}}>Low: </span>${datapoint.low}</p>
                    <p><span  style={{color: colors.closeColor}}>Close: </span>${datapoint.close}</p>
                </div>
            )
        }
        return null
    }

    if (data?.length){
        return (
            <div className='flexColCenterCenter'>
                <h1>Last 101 days of bitcoin</h1>
                <LineChart width={800} height={500} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" fill="#F5F5F5"/>
                    <Line  dot={false} dataKey="high" stroke={colors.highColor} />
                    <Line dot={false} dataKey="low" stroke={colors.lowColor} />
                    <Line  dot={false} dataKey="close" stroke={colors.closeColor} />
                    <XAxis dataKey="date" tick={false} label='Date'/>
                    <YAxis domain={[13000,26000]}/>
                    <Tooltip content={<CustomTooltip  payload={data}/>}/>
                </LineChart>
            </div>
        );
    } else {
        return (
            <h1>Cannot show chart as there is no data.</h1>
        )
    }
};

export default Chart;