/**
 * Interchange stations should not be counted during the cost-counting step.
 * @param {*} station 
 */
function station_GetIsInterchangeStation(station)
{
    return (station.split("_"))[0] == "x";
}

/**
 * Internal stations are used to adjust path costs by adding additional waypoints to travel to.
 * @param {*} station 
 */
function station_GetIsInternalStation(station)
{
    return (station.split("_"))[0] == "i";
}