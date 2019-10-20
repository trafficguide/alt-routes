## 探路：港鐵替代路線搜尋器 Pathfinder: Alternative Routes of MTR

![MaterializeCSS](https://img.shields.io/badge/Uses-Materialize%20CSS-blue)
![ShieldsIO](https://img.shields.io/badge/Uses-Shields.io-blue)
![HitCounter](https://img.shields.io/badge/Uses-Hit_Counter-blue)
![Hits](https://hitcounter.pythonanywhere.com/nocount/tag.svg?url=https%3A%2F%2Ftrafficguide.github.io%2Falt-routes%2F)

This is the Repo of 【探路】.

### Motivation

It is no longer true to say that "MTR services are fault-tolerant". The entire MTR network may just suddenly shut down with no prior notice. And when that happens, the servers of the different bus providers shut down too, because there is simply too many people looking up bus route information.

We have relied on MTR too much, and that unhealthy reliance has implications. Remember that time when [MTR unexpectedly shuts down right at the morning commute, resulting in colossal amounts of work-hour lost](https://www.hk01.com/%E7%A4%BE%E6%9C%83%E6%96%B0%E8%81%9E/247480/%E6%B8%AF%E9%90%B5%E5%9B%9B%E7%B7%9A%E6%95%85%E9%9A%9C-%E6%B8%AF%E9%90%B5%E7%99%B1%E7%98%93-%E4%BA%A4%E9%80%9A%E5%B9%B9%E9%81%93%E8%BB%8A%E7%A6%8D-%E5%BC%95%E7%88%86%E4%B8%8A%E7%8F%AD%E6%99%82%E9%96%93%E5%A4%A7%E6%B7%B7%E4%BA%82)? And your daily struggle to breathe inside MTR compartments during rush-hours? It has been embarrasing.

You could feel the need of public transport rising year after year. Afterall, several other railways are being planned, and will probably enter service in the future. And since those new railways aim to extend the railway web even further, there will be more people taking the railway (in normal circumstances). And this usually means more people at the "core part" of the railway system, which means more congestion.

I personally feel that the currently-available apps for searching public transport are too heavy-weight. They have so much information in their cloud database that it takes seconds to calculate solutions for the query. They have fancy UI that does animations, which are pretty much eye candies with no real content. They require connection to the Internet, which makes them unreliable when your Internet speed drops for whatever reason. And perhaps most importantly, advertisements.

And there are probably countless fellow citizens here, perhaps living next door to you, who wants to take buses instead of the MTR, but have absolutely no idea where to begin, perhaps getting acustomed to the MTR services for too long and so have insufficient knowledge of **alternative routes** that exist right below their noses all this time.

### Response to the Call, and Specs of this Project

And therefore, I have taken it upon myself to jumpstart the entire movement of taking buses instead of relying on the MTR, not by simply making posts on LIHKG to explain the possible routes to take (it could get tedious and repetitive at times, I know), but to use my somewhat-sufficient knowledge on information technology to create a machine (this Pathfinder project) that answers the queries of those in need.

And, as a result, there are several characteristics to this project that differentiates it from other competing projects/apps:

- Cross-platform compatibility: this "app" is simply a webpage with JavaScript running, and can be run in both PC and mobile
- Simplified representation: this pathfinder stores only the approximate location that bus routes pass through, but never the exact locations; details of the routes may be found in provided links
- Offline operation: the database is loaded as part of the JavaScript and hence can still be used to find paths even when the phone is offline
- Straightforward UI: just choose where you want to travel from and to as if you are taking the MTR, and the pathfinder will show the results to you
- Special parameters for pathfinding: allows you to exclude rush-hour "special routes" from showing up when searching for regular routes; or allows you to search for midnight routes only
- No Internet beyond necessity: Only the Badges and the hit-count uses the Internet for communication, and that's all of the Internet traffic
- Ad-free: no advertisements in the page whatsoever

Furthermore, the entire scripting part is largely done using TypeScript, which provides more rigorous error-checking than what JavaScript may provide, speeding up development considerably.

The use of other libraries is not encouraged but tolerated considering that some features may be impossible to do without the use of said libraries.

### Limitations of this Project

Since this is hosted using GitHub Pages, and that GitHub Pages disallow the use of any server-side code, no PHP or JSP files (or other server-side files) can be used. This also means that no MySQL databases may be used. We have to take the "standalone offline database" approach during development, granting this Pathfinder some unexpected perks in the process.

### Currently-completed features

- Pathfinding
- Interchange suggestions
- Interchange concessions (infrastructure only)
- Search modes (commuter mode and night mode)

### Possible general improvements

- Add more lines
- Add concession info
- Extend the pathfinder to include more places (mostly the Light Rail network)

### Possible algorithmetic improvements

- Translatable: replace strings with objects that returns translated strings according to a global language flag
- Path equivalence: eliminate paths that contain the same/similar sequence(s) of waypoints to make the results more meaningful
- Path order reduction: in a path, walking connections should not constitute the order of the path; e.g., for "Bus -> Walk -> Bus", the order should be 2, not 3
- ETA integration: connect with data.gov.hk and obtain CTB/NWFB approx. ETA info for search results that involves CTB/NWFB routes
- Travel time estimation: this is a bit hard to formulate...

### Possible UI improvements

- Add a page favicon

### Possible feature improvements

- Construct a system with UI to allow others to directly add lines without relying on manual Typescript input (explained below)

## Effort Coordination

We don't call it "management" since it would imply the existence of a 大台, which is not the case.

This is the list of efforts that I can think about, and that others may be able to help out in. Just fork the repo and do the work!

### Overall Effort

Handles the general direction of the Pathfinder project.

- Hoster: [trafficguide](https://github.com/trafficguide)
- Effort Coordinator: [trafficguide](https://github.com/trafficguide), [Vectorial1024](https://github.com/Vectorial1024)

### Typescript-level Data Entry

Inputs transit routes' pathways into `src/linelibrary.ts` file. The inputter should have good knowledge of the local area so to be able to add in appropriate waypoints for routes. May need to modify `src/waypointlibrary.ts` to add or fine-tune available waypoints.

You will have to contact trafficguide to give you permission to also modify the Google Sheets so to tick on the checkboxes that indicates whether the routes are added.

- Inputter (Shatin and Tai Wai): [Vectorial1024](https://github.com/Vectorial1024)

### Pathfinder Algorithm Fine-tuning

Adjusts the existing pathfinding algorithm to give better and more sensical results. May also need to modify `src/waypointlibrary.ts` to produce more accurate results.

- Fine-tuner: [Vectorial1024](https://github.com/Vectorial1024)

### UI Design

Enhances the current UI using CSS and other related features.

- Contributor: [xtaaaal](https://github.com/xtaaaal)
- Fine-tuner: [Vectorial1024](https://github.com/Vectorial1024)

### Pathfinder Promotion

IDK, 文宣?

- (None)

## Documentation

Documentation should be sufficient inside the individual source files. Or you can just read the code to understand what's going on.