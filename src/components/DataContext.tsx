import React, { useContext, createContext, useState, useEffect } from 'react';
import { getBitcoinData } from '../helpers/fetches';
import { Datapoint } from '../helpers/types';

type DataContextType = {
    data: Datapoint[],
    setData: React.Dispatch<React.SetStateAction<Datapoint[]>>
};

export const DataContext = createContext<DataContextType | null>(null);

export const useData = () => {
    return useContext(DataContext);
}

export const DataProvider = ({children}: {children: React.ReactNode} ) => {
    const [data, setData] = useState<Datapoint[]>([]);

    useEffect(() => {
        getBitcoinData()
        .then(json => json.Data.Data)
        .then(res => {
            for (let i = 0; i < (res.length | 0) ; i++){
                res[i].date = new Date(res[i].time * 1000).toDateString();
                res[i].day = i+1
            }
            return res
        })
        .then(res => setData(res))
    },[])

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}