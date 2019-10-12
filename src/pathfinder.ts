let results_DirectCount = -1;
let results_InterchangeCount = -1;

let global_results = new Array<Path>();

/**
 * Finds paths that the user may take to travel from one place to another.
 * @param from 
 * @param to 
 */
function findPathsBetween(from: Waypoint, to: Waypoint): Array<Path>
{
    let allResults = new Array<Path>();
    // A flag to allow "display all options" fir the earliest order of solutions.
    let isVirgin = true;
    results_DirectCount = 0;
    results_InterchangeCount = 0;
    let maxDegree = 2;
    if (shouldConduct_3X)
    {
        maxDegree = 3;
    }

    for (let currentDegree = 0; currentDegree <= maxDegree; currentDegree++)
    {
        let degreeResults = findPaths_nX(from, to, currentDegree);

        // Begin allocating results to two arrays
        let betterThanPrevious = new Array<Path>();
        let completelyNewResult = new Array<Path>();

        for (let i = 0; i < degreeResults.length; i++)
        {
            let currentPath = degreeResults[i];
            let indexToSimilarity = -1;

            // Find whether some (n-1)X path is similar to this nX path
            for (let j = 0; j < allResults.length; j++)
            {
                let currentCheckPath = allResults[j];
                let currentCheckCon = currentCheckPath.getConnections();
                let hasSimilarity = false;

                // See whether the degree result path contains some lines from the check path
                for (let k = 0; k < currentCheckCon.length; k++)
                {
                    if (currentPath.pathIsContainingLine(currentCheckCon[k].getLine()))
                    {
                        hasSimilarity = true;
                        break;
                    }
                }

                if (hasSimilarity)
                {
                    indexToSimilarity = j;
                    break;
                }
            }

            if (indexToSimilarity != -1)
            {
                // Something similar.
                // Check cost also.
                if (currentPath.getTotalAdjustedCost() < allResults[indexToSimilarity].getTotalAdjustedCost())
                {
                    betterThanPrevious.push(currentPath);
                }
            }
            else
            {
                // Nothing similar. Add to the "new items" list
                completelyNewResult.push(currentPath);
            }
        }

        // All results from this degree has been checked.
        // Now review both piles to filter by min-cost.
        // However, if the current degree is 0, we can add everything into it.
        let degreeMinCost = Infinity;
        if (isVirgin)
        {
            // Skip everything if it is virgin but there's nothing to display.
            // This may occur when you need at least 1 interchange to get to your destinations
            if (completelyNewResult.length > 0)
            {
                // You used up that
                isVirgin = false;
                // Filter by average first if there are more than 8 entries to display.
                if (completelyNewResult.length > 10)
                {
                    let sum = 0.0;
                    for (let i = 0; i < completelyNewResult.length; i++)
                    {
                        sum += completelyNewResult[i].getTotalAdjustedCost();
                    }
                    let average = sum / completelyNewResult.length;
                    for (let i = completelyNewResult.length - 1; i >= 0; i--)
                    {
                        if (completelyNewResult[i].getTotalAdjustedCost() > average)
                        {
                            completelyNewResult.splice(i, 1);
                        }
                    }

                    // List of Completely-New-Results ready.
                }
            }
        }
        else
        {
            // Filter by minimizing the cost
            for (let i = 0; i < completelyNewResult.length; i++)
            {
                //console.log(completelyNewResult[i].toString() + ", it has cost " + completelyNewResult[i].getTotalAdjustedCost());
                if (completelyNewResult[i].getTotalAdjustedCost() < degreeMinCost)
                {
                    degreeMinCost = completelyNewResult[i].getTotalAdjustedCost();
                }
            }
            for (let i = completelyNewResult.length - 1; i >= 0; i--)
            {
                if (completelyNewResult[i].getTotalAdjustedCost() > degreeMinCost)
                {
                    completelyNewResult.splice(i, 1);
                }
            }
        }

        // Filter by comparison: suggested paths should be better than "similar" paths found previously.
        if (betterThanPrevious.length > 0)
        {
            degreeMinCost = Infinity;
            // BetterPile
            for (let i = 0; i < betterThanPrevious.length; i++)
            {
                if (betterThanPrevious[i].getTotalAdjustedCost() < degreeMinCost)
                {
                    degreeMinCost = betterThanPrevious[i].getTotalAdjustedCost();
                }
            }
            for (let i = betterThanPrevious.length - 1; i >= 0; i--)
            {
                if (betterThanPrevious[i].getTotalAdjustedCost() > degreeMinCost)
                {
                    betterThanPrevious.splice(i, 1);
                }
            }
        }

        // All results are ready.
        // Merge.
        let tempBucket = [].concat(betterThanPrevious, completelyNewResult);
        if (currentDegree == 0)
        {
            results_DirectCount = tempBucket.length;
        }
        else
        {
            results_InterchangeCount += tempBucket.length;
        }
        allResults = allResults.concat(tempBucket);
    }

    // All degrees computed.
    global_results = allResults;
    return allResults;
}

/**
 * Finds paths from one place to another which use exactly n interchanges.
 * 
 * Basic sanity constraints apply, such as "can really travel using this path", "no endpoint interchanges", and "no comeback trips"
 * 
 * You should write your own code if you wish to filter the results by e.g. travel costs.
 * @param from 
 * @param to 
 * @param n
 */
function findPathsDirect_nX(from: Waypoint, to: Waypoint, n: number): Array<Path>
{
    if (n <= 0)
    {
        return findPaths_0X(from, to);
    }
    else if (n == 1)
    {

    }
    else 
    {

    }
}

/**
 * Finds paths such that users may reach their destination without any interchanges. Returns an array of Path.
 * @param from 
 * @param to 
 */
function findPaths_0X(from: Waypoint, to: Waypoint): Array<Path>
{
    // Check if both place are the same.
    // If both place are the same, then no need to travel at all; just walk to there!
    if (from.checkEqual(to))
    {
        // Same place. No query needed. Return empty array.
        return new Array<Path>();
    }

    // Begin search!
    let pathfindingResults = new Array<Path>();
    for (let i = 0; i < HK18_ALL_LINES.length; i++)
    {
        let currentLine = HK18_ALL_LINES[i];
        let index_BEGIN = -1;
        let index_END = -1;

        for (let j = 0; j < currentLine.stops.length; j++)
        {
            let currentWaypoint = currentLine.stops[j];

            if (currentWaypoint.checkEqual(from))
            {
                for (let k = j + 1; k < currentLine.stops.length; k++)
                {
                    if (currentLine.stops[k].checkEqual(to))
                    {
                        // Mainly to counter the circular lines.
                        // Valid path found
                        index_BEGIN = j;
                        index_END = k;
                        break;
                    }
                }

                if (index_BEGIN != -1 && index_END != -1)
                {
                    break;
                }
            }
        }

        if (index_END > index_BEGIN && index_BEGIN > -1)
        {
            let connection = new Connection(currentLine, index_BEGIN, index_END);
            let path = new Path();
            path.addConnection(connection);
            pathfindingResults.push(path);
        }

        /*
        if (index_END <= index_BEGIN)
        {
            // If this is true:

            // Case 0: both endpoint are the same.
            // However, we have excluded this possibility at the beginning of the method.

            // Case 1: line contains neither endpoints, i.e., both values = -1
            // This means the line is not relevant to the user.

            // Case 2: line contains both endpoints, but both appeared in the wrong order.
            // This may occur when the algorithm is processing the "inversion" of the actual line.

            // Anyways, the line is not useful.
            // Check next line.
            continue;
        }
        */

        // Line is valid.
        // Add it into the results.

        
    }

    // All lines checked.
    // Return the results.
    return pathfindingResults;
}

/**
 * Finds paths such that users may reach their destination using exactly 1 interchange. Returns an array of Path.
 * 
 * Note that users are not expected to interchange at internal stations.
 * @param from The waypoint that the user wants to depart from
 * @param to The waypoint that the user intends to arrive at
 */
function findPaths_1X(from: Waypoint, to: Waypoint): Array<Path>
{
    // Again, if both are in the same spot, then no need to travel.
    if (from.checkEqual(to))
    {
        return new Array<Path>();
    }

    let pathfindingResults = new Array<Path>();
    for (let i = 0; i < HK18_ALL_LINES.length; i++)
    {
        let L1 = HK18_ALL_LINES[i];
        let L1_BEGIN = L1.getIndexOfWaypoint(from);
        if (L1_BEGIN == -1)
        {
            // L1 does not have the departing endpoint. Check next line.
            continue;
        }

        for (let j = 0; j < HK18_ALL_LINES.length; j++)
        {
            let L2 = HK18_ALL_LINES[j];
            if (L2.checkEqual(L1))
            {
                // This would mean:
                // 1. Both are the same *exact* line
                // 2. Both are the same line but in different direction.
                // Check next line.
                continue;
            }

            let L2_END = L2.getIndexOfWaypoint(to);
            if (L2_END == -1)
            {
                // L2 does not have the arriving endpoint. Check next line.
                continue;
            }

            // Now we begin to check intersection.

            let intersection = L1.findBestXWaypointWithLine(L2);
            if (intersection == null)
            {
                // No intersection. Next!
                continue;
            }

            let L1_INTERSECTION = L1.getIndexOfWaypoint(intersection, L1_BEGIN);
            let L2_INTERSECTION = L2.getIndexOfWaypoint(intersection);
            if (L1_INTERSECTION > L1_BEGIN && L2_INTERSECTION < L2_END)
            {
                // Valid and makes sense.
                // Add it.
                let path = new Path();
                path.addConnection(new Connection(L1, L1_BEGIN, L1_INTERSECTION));
                path.addConnection(new Connection(L2, L2_INTERSECTION, L2_END));
                pathfindingResults.push(path);
            }
        }
    }

    // All paths are found. Leaving.
    return pathfindingResults;
}

/**
 * Finds paths from one place to another which use exactly n interchanges.
 * 
 * Basic sanity constraints apply, such as "can really travel using this path", and "no endpoint interchanges""
 * 
 * You should write your own code if you wish to filter the results by e.g. travel costs.
 * @param from 
 * @param to 
 * @param n
 */
function findPaths_nX(from: Waypoint, to: Waypoint, n: number): Array<Path>
{
    //console.log("nX finder (" + n + ") from " + from.getName() + " to " + to.getName())
    // Basically:
    // f(0) => f(0)
    // f(1) => f(1)
    // f(n) = f(0) + f(n-1) for n >= 2
    /**
     * Remember to process this once again after obtaining the results.
     */
    let tempResults = new Array<Path>();
    if (n <= 0)
    {
        tempResults = findPaths_0X(from, to);
    }
    else if (n == 1)
    {
        tempResults = findPaths_1X(from, to);
    }
    else
    {
        // n >= 2; requires recursion.
        let degree = n - 1;
        for (let i = 0; i < HK18_ALL_LINES.length; i++)
        {
            let current_L1 = HK18_ALL_LINES[i];
            // First check if the user may depart from FROM
            let current_L1_FROM = current_L1.getIndexOfWaypoint(from);
            if (current_L1_FROM == -1)
            {
                // User cannot leave from FROM. Check next.
                continue;
            }
            // For each station down the line, see whether the user may reach the destination by interchanging there (if possible)
            for (let j = current_L1_FROM + 1; j < current_L1.stops.length; j++)
            {
                let currentStop = current_L1.stops[j];
                if (currentStop.isInternal())
                {
                    // We cannot interchange at internal stations.
                    continue;
                }

                let rawResults = findPaths_nX(currentStop, to, degree);
                // rawResults now contain all combinations that can reach the destination.
                // Merge it
                for (let k = 0; k < rawResults.length; k++)
                {
                    // Skip if both connecting lines are the same line.
                    if (current_L1.checkEqual(rawResults[k].connections[0].getLine()))
                    {
                        continue;
                    }

                    let newConnection = new Connection(current_L1, current_L1_FROM, j);
                    rawResults[k].connections.unshift(newConnection);
                    tempResults.push(rawResults[k]);
                }
            }
        }
    }

    // tempResult now contains all raw lines.
    // return for now.
    return tempResults;
}