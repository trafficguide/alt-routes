var results_DirectCount = -1;
var results_InterchangeCount = -1;
var global_results = new Array();
/**
 * Finds paths that the user may take to travel from one place to another.
 * @param from
 * @param to
 */
function findPathsBetween(from, to) {
    var allResults = new Array();
    // A flag to allow "display all options" fir the earliest order of solutions.
    var isVirgin = true;
    results_DirectCount = 0;
    results_InterchangeCount = 0;
    var maxDegree = 2;
    if (shouldConduct_3X) {
        maxDegree = 3;
    }
    for (var currentDegree = 0; currentDegree <= maxDegree; currentDegree++) {
        var degreeResults = findPaths_nX(from, to, currentDegree);
        // Begin allocating results to two arrays
        var betterThanPrevious = new Array();
        var completelyNewResult = new Array();
        for (var i = 0; i < degreeResults.length; i++) {
            var currentPath = degreeResults[i];
            var indexToSimilarity = -1;
            // Find whether some (n-1)X path is similar to this nX path
            for (var j = 0; j < allResults.length; j++) {
                var currentCheckPath = allResults[j];
                var currentCheckCon = currentCheckPath.getConnections();
                var hasSimilarity = false;
                // See whether the degree result path contains some lines from the check path
                for (var k = 0; k < currentCheckCon.length; k++) {
                    if (currentPath.pathIsContainingLine(currentCheckCon[k].getLine())) {
                        hasSimilarity = true;
                        break;
                    }
                }
                if (hasSimilarity) {
                    indexToSimilarity = j;
                    break;
                }
            }
            if (indexToSimilarity != -1) {
                // Something similar.
                // Check cost also.
                if (currentPath.getTotalAdjustedCost() < allResults[indexToSimilarity].getTotalAdjustedCost()) {
                    betterThanPrevious.push(currentPath);
                }
            }
            else {
                // Nothing similar. Add to the "new items" list
                completelyNewResult.push(currentPath);
            }
        }
        // All results from this degree has been checked.
        // Now review both piles to filter by min-cost.
        // However, if the current degree is 0, we can add everything into it.
        var degreeMinCost = Infinity;
        if (isVirgin) {
            // Skip everything if it is virgin but there's nothing to display.
            // This may occur when you need at least 1 interchange to get to your destinations
            if (completelyNewResult.length > 0) {
                // You used up that
                isVirgin = false;
                // Filter by average first if there are more than 8 entries to display.
                if (completelyNewResult.length > 10) {
                    var sum = 0.0;
                    for (var i = 0; i < completelyNewResult.length; i++) {
                        sum += completelyNewResult[i].getTotalAdjustedCost();
                    }
                    var average = sum / completelyNewResult.length;
                    for (var i = completelyNewResult.length - 1; i >= 0; i--) {
                        if (completelyNewResult[i].getTotalAdjustedCost() > average) {
                            completelyNewResult.splice(i, 1);
                        }
                    }
                    // List of Completely-New-Results ready.
                }
            }
        }
        else {
            // Filter by minimizing the cost
            for (var i = 0; i < completelyNewResult.length; i++) {
                if (completelyNewResult[i].getTotalAdjustedCost() < degreeMinCost) {
                    degreeMinCost = completelyNewResult[i].getTotalAdjustedCost();
                }
            }
            for (var i = completelyNewResult.length - 1; i >= 0; i--) {
                if (completelyNewResult[i].getTotalAdjustedCost() > degreeMinCost) {
                    completelyNewResult.splice(i, 1);
                }
            }
        }
        // Filter by comparison: suggested paths should be better than "similar" paths found previously.
        if (betterThanPrevious.length > 0) {
            degreeMinCost = Infinity;
            // BetterPile
            for (var i = 0; i < betterThanPrevious.length; i++) {
                if (betterThanPrevious[i].getTotalAdjustedCost() < degreeMinCost) {
                    degreeMinCost = betterThanPrevious[i].getTotalAdjustedCost();
                }
            }
            for (var i = betterThanPrevious.length - 1; i >= 0; i--) {
                if (betterThanPrevious[i].getTotalAdjustedCost() > degreeMinCost) {
                    betterThanPrevious.splice(i, 1);
                }
            }
        }
        // All results are ready.
        // Merge.
        var tempBucket = [].concat(betterThanPrevious, completelyNewResult);
        if (currentDegree == 0) {
            results_DirectCount = tempBucket.length;
        }
        else {
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
function findPathsDirect_nX(from, to, n) {
    if (n <= 0) {
        return findPaths_0X(from, to);
    }
    else if (n == 1) {
    }
    else {
    }
}
/**
 * Finds paths such that users may reach their destination without any interchanges. Returns an array of Path.
 * @param from
 * @param to
 */
function findPaths_0X(from, to) {
    // Check if both place are the same.
    // If both place are the same, then no need to travel at all; just walk to there!
    if (from.checkEqual(to)) {
        // Same place. No query needed. Return empty array.
        return new Array();
    }
    // Begin search!
    var pathfindingResults = new Array();
    for (var i = 0; i < HK18_ALL_LINES.length; i++) {
        var currentLine = HK18_ALL_LINES[i];
        var index_BEGIN = -1;
        var index_END = -1;
        for (var j = 0; j < currentLine.stops.length; j++) {
            var currentWaypoint = currentLine.stops[j];
            if (currentWaypoint.checkEqual(from)) {
                for (var k = j + 1; k < currentLine.stops.length; k++) {
                    if (currentLine.stops[k].checkEqual(to)) {
                        // Mainly to counter the circular lines.
                        // Valid path found
                        index_BEGIN = j;
                        index_END = k;
                        break;
                    }
                }
                if (index_BEGIN != -1 && index_END != -1) {
                    break;
                }
            }
        }
        if (index_END > index_BEGIN && index_BEGIN > -1) {
            var connection = new Connection(currentLine, index_BEGIN, index_END);
            var path = new Path();
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
function findPaths_1X(from, to) {
    // Again, if both are in the same spot, then no need to travel.
    if (from.checkEqual(to)) {
        return new Array();
    }
    var pathfindingResults = new Array();
    for (var i = 0; i < HK18_ALL_LINES.length; i++) {
        var L1 = HK18_ALL_LINES[i];
        var L1_BEGIN = L1.getIndexOfWaypoint(from);
        if (L1_BEGIN == -1) {
            // L1 does not have the departing endpoint. Check next line.
            continue;
        }
        for (var j = 0; j < HK18_ALL_LINES.length; j++) {
            var L2 = HK18_ALL_LINES[j];
            if (L2.checkEqual(L1)) {
                // This would mean:
                // 1. Both are the same *exact* line
                // 2. Both are the same line but in different direction.
                // Check next line.
                continue;
            }
            var L2_END = L2.getIndexOfWaypoint(to);
            if (L2_END == -1) {
                // L2 does not have the arriving endpoint. Check next line.
                continue;
            }
            // Now we begin to check intersection.
            var intersection = L1.findBestXWaypointWithLine(L2);
            if (intersection == null) {
                // No intersection. Next!
                continue;
            }
            var L1_INTERSECTION = L1.getIndexOfWaypoint(intersection, L1_BEGIN);
            var L2_INTERSECTION = L2.getIndexOfWaypoint(intersection);
            if (L1_INTERSECTION > L1_BEGIN && L2_INTERSECTION < L2_END) {
                // Valid and makes sense.
                // Add it.
                var path = new Path();
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
function findPaths_nX(from, to, n) {
    //console.log("nX finder (" + n + ") from " + from.getName() + " to " + to.getName())
    // Basically:
    // f(0) => f(0)
    // f(1) => f(1)
    // f(n) = f(0) + f(n-1) for n >= 2
    /**
     * Remember to process this once again after obtaining the results.
     */
    var tempResults = new Array();
    if (n <= 0) {
        tempResults = findPaths_0X(from, to);
    }
    else if (n == 1) {
        tempResults = findPaths_1X(from, to);
    }
    else {
        // n >= 2; requires recursion.
        var degree = n - 1;
        for (var i = 0; i < HK18_ALL_LINES.length; i++) {
            var current_L1 = HK18_ALL_LINES[i];
            // First check if the user may depart from FROM
            var current_L1_FROM = current_L1.getIndexOfWaypoint(from);
            if (current_L1_FROM == -1) {
                // User cannot leave from FROM. Check next.
                continue;
            }
            // For each station down the line, see whether the user may reach the destination by interchanging there (if possible)
            for (var j = current_L1_FROM + 1; j < current_L1.stops.length; j++) {
                var currentStop = current_L1.stops[j];
                if (currentStop.isInternal()) {
                    // We cannot interchange at internal stations.
                    continue;
                }
                var rawResults = findPaths_nX(currentStop, to, degree);
                // rawResults now contain all combinations that can reach the destination.
                // Merge it
                for (var k = 0; k < rawResults.length; k++) {
                    // Skip if both connecting lines are the same line.
                    if (current_L1.checkEqual(rawResults[k].connections[0].getLine())) {
                        continue;
                    }
                    var newConnection = new Connection(current_L1, current_L1_FROM, j);
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
