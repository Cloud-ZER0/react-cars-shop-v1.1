import { useMemo } from "react";
import { useSelector } from "react-redux";

export const usePriceFilter = (array = []) => {
    const {filtred, lowerBound, higherBound} = useSelector(state => state.FilterSlice.priceFilter);

    const respone =  useMemo(()=>{ 

        if(filtred && array.length !== 0) {
            return array.filter(e => e.price >= lowerBound && e.price <= higherBound);
        } 

        else return array;

    },[array, lowerBound, higherBound, filtred]);

    return respone;
}

export const useModelFilter = (array = []) => {
    const {data} = useSelector(state => state.FilterSlice.modelFilter);

    const response = useMemo(()=>{
            const condition = data.some(el => {return el.value === true});

            const buffer = data.filter(el => {return el.value === true});

            let res = [];

            if(condition) {
                buffer.forEach(el => {
                    res = res.concat(array.filter(car => car.name === el.title));
                })

                return res;
                // const {title} = data.find(el => {return el.value === true});
                // return array.filter(car => car.name === title);
            }
            else return array;

    },[data,array]);

    return response;
}

export const useMilesFilter = (array=[]) => {
    const {data} = useSelector(state => state.FilterSlice.milesFilter);

    const result = useMemo(()=>{
        const condition = data.some(el => {return el.value === true});
        
        if(condition) {
            const {cratch} = data.find(el => {return el.value === true});
            return array.filter(car => Number(car.mileage) <= Number(cratch));
        }
        else return array;

    },[data,array]);

    return result;
}

export const useYearFilter = (array=[]) => {
    const {data} = useSelector(state => state.FilterSlice.yearFilter);

    const result = useMemo(()=>{
        const condition = data.some(el => {return el.value === true});
        
        if(condition) {
            const {year} = data.find(el => {return el.value === true});
            console.log(year);
            return array.filter(car => car.year <= year);
        }
        else return array;

    },[data,array]);

    return result;
}