import { useState } from 'react';
import { useData } from './DataContext';
import DatapointContainer from './DatapointContainer';

const PAGE_SIZE = 20;

const TableContainer = () => {

    const [offset, setOffset] = useState<number>(0);
    const dataContext = useData();

    if (dataContext?.data.length){
        let pageNumber = offset/20 + 1
        const maxPages = Math.ceil(dataContext?.data.length / 20);
        return (
            <div className='flexColCenterCenter'>
                <div id='pageManagerBox' >
                    <button disabled={(pageNumber==1)} onClick={() => setOffset(offset-PAGE_SIZE)}>Last </button>
                    <h2>Page {pageNumber}</h2>
                    <button disabled={(pageNumber==maxPages)} onClick={() => setOffset(offset+PAGE_SIZE)}>Next </button>
                </div>
                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Open</th>
                            <th>High</th>
                            <th>Close</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataContext?.data.slice(offset, offset + PAGE_SIZE).map((day, index) => {
                            return (
                                <DatapointContainer key={index} datapoint={day}/>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <h1>No data was fetched from API.</h1>
        )
    }
};

export default TableContainer;