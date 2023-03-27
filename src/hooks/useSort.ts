import { useState, useCallback, useMemo } from "react";

import { itemSort } from "utils/sort";
import { IListItem } from "types";


export const useSort = (data: IListItem[]) => {

    const [sort, setSort] = useState<any>({ direction: "asc", key: "name" });


    const handelSetSort= useCallback((i:string)=>{
        const newSort = (sort.key === i && sort.direction !== "desc")
            ? { ...sort, direction: "desc", } : { key : i, direction : "asc",};
        setSort(()=>({...newSort}));
    }, [sort]);

    

    const sortedData = useMemo(() => data.length ? data.sort((a, b) => itemSort(a, b, sort.direction,sort.key)) : data, [data, sort]);

    return {
        sort,
        setSort : handelSetSort,
        data : sortedData.length ? sortedData : []
    }
};