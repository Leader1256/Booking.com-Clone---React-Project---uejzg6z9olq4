import React from "react";
import { NavHeader } from './NavHeader';

import { AvailableHotelList } from './AvailableHotelList';
export const ProjectBody=()=>{
    return (
        <div>
      <NavHeader/>
      
      <AvailableHotelList/>
        </div>
    )
}