import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        priceFilter: {
            filtred: false,
            lowerBound: 0,
            higherBound: 0,
        },
        modelFilter: {
            data: [
                {title: 'BMW', value: false},
                {title: 'Mercedes', value: false},
                {title: 'Acura', value: false},
                {title: 'Cadillac', value: false},
                {title: 'Dodge', value: false},
                {title: 'Acura ILX', value: false},
                {title: 'Acura Integra TECH PACKAGE A-SPEC', value: false},
            ],
        },
        milesFilter: {
            data: [
                {title: 'up to 10K miles', cratch: '10', value: false},
                {title: 'up to 50K miles', cratch: '50', value: false},
                {title: 'up to 100K miles',cratch: '100', value: false},
            ]
        },
        yearFilter: {
            data: [
                {title: 'up to 2019', year: 2019, value: false},
                {title: 'up to 2020', year: 2020, value: false},
                {title: 'up to 2021', year: 2021, value: false},
                {title: 'up to 2022', year: 2022, value: false},
                {title: 'up to 2023', year: 2023, value: false},
            ]
        }
    },

    reducers: {
        togglePriceFilter(state, {payload}) {
            state.priceFilter.filtred = true;
            state.priceFilter.lowerBound = Number(payload.min);
            state.priceFilter.higherBound = Number(payload.max);

        },
        
        removePriceFilter(state) {
            state.priceFilter.filtred = false;
        },

        toggleModelFilter(state, {payload}) {
            state.modelFilter.data.forEach(car => {
                if(car.title === payload) {
                    car.value = !car.value;
                }
            })
        },

        toggleMilesFilter(state, {payload}) {
            state.milesFilter.data.forEach(car => {
                if(car.title === payload) {
                    car.value = !car.value;
                }
            })
        },

        toggleYearFilter(state, {payload}) {
            state.yearFilter.data.forEach(car => {
                if(car.title === payload) {
                    car.value = !car.value;
                    console.log(car.year, 'cv')
                }
            })
        }
    }
})

export const {togglePriceFilter, removePriceFilter, toggleModelFilter,toggleMilesFilter, toggleYearFilter} = filterSlice.actions;
export default filterSlice.reducer;