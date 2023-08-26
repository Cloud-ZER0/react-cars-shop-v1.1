import { useSelector } from "react-redux"

export const useFiltersState = () => {
    const modelFilterState = useSelector(state => state.FilterSlice.modelFilter.data);
    const mileslFilterState = useSelector(state => state.FilterSlice.milesFilter.data);
    const yaerFilterState = useSelector(state => state.FilterSlice.yearFilter.data);

    return {modelFilterState, mileslFilterState, yaerFilterState};

}