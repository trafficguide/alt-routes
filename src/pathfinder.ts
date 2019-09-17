let results_DirectCount = -1;
let results_InterchangeCount = -1;

function findPathsBetween(from: Waypoint, to: Waypoint): Array<Path>
{
    let allResults = Array<Path>();
    let minCost = Infinity;

    // Find 0-interchange paths (i.e. direct paths)
    let paths_0X = findPaths_0X(from, to);
    results_DirectCount = paths_0X.length;

    // Analyze: find minimum costs
    for (let i = 0; i < paths_0X.length; i++)
    {
        let cost = paths_0X[i].getTotalAdjustedCost();
        if (cost < minCost)
        {
            minCost = cost;
        }
    }

    // 0X paths analysis complete.
    allResults = paths_0X;
    console.log("0X gives min cost = " + minCost);

    // Find 1-interchange paths
    let paths_1X = findPaths_1X(from, to, minCost);
    results_InterchangeCount = paths_1X.length;

    // Analyse: again, find minimum costs
    for (let i = 0; i < paths_1X.length; i++)
    {
        let cost = paths_1X[i].getTotalAdjustedCost();
        if (cost < minCost)
        {
            minCost = cost;
        }
    }

    // 1X paths analysis complete.
    allResults = allResults.concat(paths_1X);
    console.log("1X gives min cost = " + minCost);

    // Rare, but: find 2-interchange paths
    let paths_2X = findPaths_nX(from, to, 2, [], minCost);
    results_InterchangeCount += paths_2X.length;

    // Analyse: again, find minimum costs
    for (let i = 0; i < paths_2X.length; i++)
    {
        let cost = paths_2X[i].getTotalAdjustedCost();
        if (cost < minCost)
        {
            minCost = cost;
        }
    }

    // 2X paths analysis complete.
    allResults = allResults.concat(paths_2X);

    // Finally complete.
    return allResults;
}

/**
 * Finds paths such that users may reach their destination without any interchanges. Returns an array of Path.
 * @param from 
 * @param to 
 */
function findPaths_0X(from: Waypoint, to: Waypoint): Array<Path>
{
    if (from == to || from.isNeighborOf(to))
    {
        return [];
    }
    //console.log("0X finder from " + from.getName() + " to " + to.getName())
    let results = Array<Path>();
    let allLinesCount = HK18_ALL_LINES.length;
    for (let i = 0; i < allLinesCount; i++)
    {
        let line = HK18_ALL_LINES[i];
        let stops = line.stops;
        let j = 0;
        let startIndex = -1;
        let endIndex = -1;
        for (; j < stops.length; j++)
        {
            if (stops[j] == from || stops[j].isNeighborOf(from))
            {
                startIndex = j;
                //console.log("Found " + line.getName() + " FROM " + startIndex);
                break;
            }
        }
        if (j == stops.length)
        {
            // Line does not contain FROM. Next line.
            continue;
        }
        for (; j < stops.length; j++)
        {
            if (stops[j] == to || stops[j].isNeighborOf(to))
            {
                endIndex = j;
                //console.log("Found " + line.getName() + " TO " + endIndex);
                break;
            }
        }
        if (j == stops.length)
        {
            // Line does not contain TO after FROM. Next line.
            continue;
        }

        // This indicates that this line indeed brings people from FROM to TO.
        // Form connection information
        let connection = new Connection(line, startIndex, endIndex);
        let path = new Path();
        path.addConnection(connection);
        results.push(path);
        //console.log(path)
    }

    return results;
}

/**
 * Finds paths such that users may reach their destination using exactly 1 interchange. Returns an array of Path.
 * 
 * Note that users are not expected to interchange at internal stations.
 * @param from The waypoint that the user wants to depart from
 * @param to The waypoint that the user intends to arrive at
 * @param costBound As a reference, indicates the maximum cost of paths permitted by the algorithm.
 */
function findPaths_1X(from: Waypoint, to: Waypoint, costBound: number): Array<Path>
{
    if (from == to || from.isNeighborOf(to))
    {
        return [];
    }
    //console.log("1X finder from " + from.getName() + " to " + to.getName())
    let results = Array<Path>();
    let allLinesCount = HK18_ALL_LINES.length;
    for (let i = 0; i < allLinesCount; i++)
    {
        let L1 = HK18_ALL_LINES[i];
        let L1_stops = L1.stops;
        let L1_startIndex = -1;
        for (let j = 0; j < L1_stops.length; j++)
        {
            if (L1_stops[j] == from || L1_stops[j].isNeighborOf(from))
            {
                L1_startIndex = j;
                break;
            }
        }
        if (L1_startIndex == -1)
        {
            // User cannot depart from FROM using L1. Next line!
            continue;
        }
        for (let j = 0; j < allLinesCount; j++)
        {
            if (j == i)
            {
                // Same line. Should have used the 0X version.
                continue;
            }

            let L2 = HK18_ALL_LINES[j];
            let L2_stops = L2.stops;
            let L2_endIndex = -1;
            for (let k = 0; k < L2_stops.length; k++)
            {
                if (L2_stops[k] == to || L2_stops[k].isNeighborOf(to))
                {
                    L2_endIndex = k;
                    break;
                }
            }
            if (L2_endIndex == -1)
            {
                // Users cannot reach To using L2. Next line!
                continue;
            }

            // Now we are going to find the intersection, if any.
            let L1_interIndex = -1;
            let L2_interIndex = -1;
            for (let k = 0; k < L2_stops.length; k++)
            {
                let currentStop = L2_stops[k];
                if (currentStop.isInternal())
                {
                    // Internal stations are excluded.
                    // Never interchange at internal stops. They are for counting only.
                    continue;
                }
                let tempIndex = L1.getIndexOfWaypoint(currentStop);
                if (tempIndex != -1 && L1_interIndex == -1)
                {
                    // L1 contains the current stop, which is a member of L2
                    // Both line intersects.
                    L1_interIndex = tempIndex;
                    L2_interIndex = k;
                }
            }
            if (L1_interIndex == -1)
            {
                // No intersection found. Next!
                continue;
            }

            // Both intersects!
            // Check if intersection is meaningful:
            // 1. L1 intersection should be strictly after FROM
            // 2. L2 intersection should be strictly before TO
            // Note that we have already excluded internal stations some lines above.
            if (L1_interIndex > L1_startIndex && L2_interIndex < L2_endIndex)
            {
                // Valid! Pack it into a nice Path object.
                let path = new Path();
                path.addConnection(new Connection(L1, L1_startIndex, L1_interIndex));
                path.addConnection(new Connection(L2, L2_interIndex, L2_endIndex));
                if (path.getTotalAdjustedCost() < costBound)
                {
                    console.log("Path of " + L1.getName() + " -> " + L2.getName() + " = " + path.getTotalAdjustedCost())
                    // Further restrict the cost, to make these lines viable compared to direct lines (if exists)
                    //console.log(path);
                    results.push(path);
                }
            }
        }
    }

    // We still aim to minimize the travel cost, since having to interchange is in itself a huge drawback of 1X lines.
    let minCost = Infinity;
    for (let i = 0; i < results.length; i++)
    {
        let calcCost = results[i].getTotalAdjustedCost();
        if (calcCost < minCost)
        {
            minCost = calcCost;
        }
    }
    for (let i = results.length - 1; i >= 0; i--)
    {
        if (results[i].getTotalAdjustedCost() > minCost)
        {
            results.splice(i, 1);
        }
    }

    // All is done. Return the results.
    return results;
}

/**
 * Finds paths such that users may reach their destination using exactly n interchanges. Returns an array of Path.
 * 
 * This is a generalized form, combining both findPaths_0X and findPaths_1X to reach higher interchange counts.
 * @param from The waypoint that the user wants to depart from
 * @param to The waypoint that the user intends to arrive at
 * @param n The number of remaining permitted interchanges; used for recursion indication
 * @param lineBanList An array of lines that are already being considered (and hence do not require repetition)
 * @param costBound As a reference, indicates the maximum cost of paths permitted by the algorithm.
 */
function findPaths_nX(from: Waypoint, to: Waypoint, n: number, lineBanList: Array<Line>, costBound: number): Array<Path>
{
    //console.log("nX finder (" + n + ") from " + from.getName() + " to " + to.getName())
    // Basically:
    // f(0) => f(0)
    // f(1) => f(1)
    // f(n) = f(0) + f(n-1) for n >= 2
    let results = new Array<Path>();
    if (n <= 0)
    {
        let tempResult = findPaths_0X(from, to);
        // Need to exclude possibility of some results overapping with the lineStack.
        for (let i = 0; i < tempResult.length; i++)
        {
            if (lineBanList.indexOf(tempResult[i].connections[0].getLine()) == -1)
            {
                // Line unused previously. Add it.
                results.push(tempResult[i]);
            }
        }
        return results;
    }

    if (n == 1)
    {
        let tempResult = findPaths_1X(from, to, costBound);
        // Need to exclude possibility of some results overapping with the lineStack.
        for (let i = 0; i < tempResult.length; i++)
        {
            let currentPath = tempResult[i];
            let notInvolvedInLinestack = true;
            for (let j = 0; j < 2; j++)
            {
                if (lineBanList.indexOf(currentPath.connections[j].getLine()) != -1)
                {
                    notInvolvedInLinestack = false;
                }
            }
            if (notInvolvedInLinestack)
            {
                results.push(currentPath);
            }
        }
        return results;
    }

    for (let i = 0; i < HK18_ALL_LINES.length; i++)
    {
        let L1 = HK18_ALL_LINES[i];
        if (lineBanList.indexOf(L1) != -1)
        {
            // It is already being considered. Move on.
            continue;
        }
        let L1_beginCheckIndex = L1.getIndexOfWaypoint(from);
        if (L1_beginCheckIndex == -1)
        {
            // Line does not call at FROM, user will never be able to leave using Line
            continue;
        }

        // Here, user definitely can depart from FROM.
        // But will he ever reach the destination with paths satisfying the above parameters?
        // There's no easy way to find out except brute-force checking everyone.

        // For each waypoint of L1:
        let L1_stops = L1.getStops();
        let degree = n - 1;
        let newBanList = lineBanList.concat(L1);
        for (let j = L1_beginCheckIndex + 1; j < L1_stops.length; j++)
        {
            // Conduct search
            let checkingStop = L1_stops[j];
            if (checkingStop.isInternal())
            {
                // Interchanging at internal stations is banned. Next ine.
                continue;
            }

            // Find the possible results
            let probableResults = findPaths_nX(checkingStop, to, degree, newBanList, costBound);
            if (probableResults.length == 0)
            {
                // No results. Next.
                continue;
            }
            // Have results. Prepend/unshift the paths to include this line, then filter by cost bound.
            let thisConnection = new Connection(L1, L1_beginCheckIndex, j);
            for (let k = 0; k < probableResults.length; k++)
            {
                let currentResult = probableResults[k];
                currentResult.connections.unshift(thisConnection);
                // Add to result if the final cost is lower than costBound.
                if (currentResult.getTotalAdjustedCost() < costBound)
                {
                    console.log("Adding path result:")
                    console.log(currentResult);
                    results.push(currentResult);
                }
            }
        }

        /*
        let stops = L1.getStops();
        let degree = n - 1;
        let tempLineStack = lineBanList.concat(L1);
        //console.log("LineStack = " + tempLineStack)
        let fromIndex = -1;
        // Check from index = 1 (exclude the 1st) so that the line is effective.
        for (let j = L1_fromIndex + 1; j < stops.length; j++)
        {
            // First check that L1 is contains FROM.
            if (stops[j] == from || stops[j].isNeighborOf(from))
            {
                fromIndex = j;
                break;
            }
        }
        if (fromIndex == -1)
        {
            // User can never depart from FROM using L1. Next line.
            continue;
        }
        
        // We know the user may depart at some index -> FROM.
        // But at which waypoint should the user interchange?
        // Check every waypoint down the line.
        for (let j = fromIndex + 1; j < stops.length; j++)
        {
            
        }
        */
    }

    // Again, having to interchange is a very significant cost already, so we aim to minimize the travel cost.
    let minCost = Infinity;
    for (let i = 0; i < results.length; i++)
    {
        let calcCost = results[i].getTotalAdjustedCost();
        if (calcCost < minCost)
        {
            minCost = calcCost;
        }
    }
    for (let i = results.length - 1; i >= 0; i--)
    {
        if (results[i].getTotalAdjustedCost() > minCost)
        {
            results.splice(i, 1);
        }
    }

    // Here, we need additional work.
    // Sometimes, you may obtain results where several lines travel along the same path towards the destination.
    // The algorithm may wrongly identify several interchange points and suggests interchanges,
    // but as we humans observe the results, we find that those suggestions are quite similar.
    // We need to eliminate results that are similar.

    let tempResults = results;
    results = [];
    // Transfer tempResults back to results
    for (let i = 0; i < tempResults.length; i++)
    {
        let shouldAdd = true;
        for (let j = 0; j < results.length; j++)
        {
            if (!tempResults[i].isDistinctComparedToOther(results[j]))
            {
                shouldAdd = false;
                break;
            }
        }
        if (shouldAdd)
        {
            results.push(tempResults[i]);
        }
    }

    // Supposedly, all is done. Return the results.
    return results;
}