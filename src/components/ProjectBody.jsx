import React from "react";
import { NavHeader } from './NavHeader';
import { HotelDetail } from './HotelDetail';
import { AvailableHotelList } from './AvailableHotelList';
export const ProjectBody=()=>{
    return (
        <div>
      <NavHeader/>
      <HotelDetail/>
      <AvailableHotelList/>
        </div>
    )
}