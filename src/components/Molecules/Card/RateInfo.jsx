import * as React from "react";

const RateInfo = ({rate, quantity, timeInterval}) => {
return (
<div className="flex justify-between items-center p-4">
  <div 
    className="flex items-center space-x-2 text-gray-700">
          <span className="text-yellow-400">★</span>
                <span>{rate}</span>
                      <span className="text-gray-400">({quantity})</span>
                        </div>
                          <div 
                            className="flex items-center space-x-1 text-gray-700">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                      <span>{timeInterval[0]}-{timeInterval[1]} min</span>
                                                        </div>
                                                        </div>
                                                        )
 }
export default RateInfo