import { useDispatch } from "react-redux";
import { getCar } from "../store/CarSlice";
import { useEffect } from "react";

export const useCar = (id) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCar(id));
    },[dispatch, id]);
};