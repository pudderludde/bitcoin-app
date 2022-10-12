import { Datapoint } from '../helpers/types';


const DatapointContainer = ({datapoint}: {datapoint: Datapoint}) => {

    return (
        <tr>
            <th><p>{datapoint.date}</p></th>
            <th><p>{'$' + datapoint.open}</p></th>
            <th><p>{'$' + datapoint.high}</p></th>
            <th><p>{'$' + datapoint.close}</p></th>
        </tr>
    );
};

export default DatapointContainer;