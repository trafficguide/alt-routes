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

- asdf

Information of bus routes are all scattered, or are otherwise not available

I think people may have underappreciated the 

 Since the railways we may currently plan are "peripheral railways", transporting people from the "outer rims" to main trunk lines, 
This means there will be even more congestion 

This is the Repo of 【探路】. The UI is built using HTML. The internal features such as pathfinding are all written using TypeScript and then compiled to JavaScript. This ensures that the JavaScript is, at very most of the time, free of any syntax errors.

Due to the limitation of GitHub Pages, all server-side code is disabled. This means that PHP and JSP files will not work. This also means that the only thing that works is Javascript/TypeScript.

I personally prefer to keep this project clean of other libraries and dependencies, but will tolerate them when necessary.

### Currently-completed features

- Path-finding
- Interchange suggestions
- Interchange concessions (infrastructure only)
- Search modes (commuter mode and night mode)

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
- Effort Coordinator: [Vectorial1024](https://github.com/Vectorial1024)

### Typescript-level Data Entry

Inputs transit routes' pathways into linelibrary.ts file. The inputter should have good knowledge of the local area so to be able to add in appropriate waypoints for routes. May need to modify waypointlibrary.ts to add or fine-tune available waypoints.

You will have to contact trafficguide to give you permission to also modify the Google Sheets so to tick on the checkboxes that indicates whether the routes are added.

- Inputter (Shatin and Tai Wai): [Vectorial1024](https://github.com/Vectorial1024)

### Pathfinder Algorithm

Adjusts the existing pathfinding algorithm to give better and more sensical results. May also need to modify waypointlibrary.ts to produce more accurate results.

- Programmer: [Vectorial1024](https://github.com/Vectorial1024)

### UI Design

Enhances the current UI using CSS and other related features.

- Contributor: [xtaaaal](https://github.com/xtaaaal)
- Fine-tuner: [Vectorial1024](https://github.com/Vectorial1024)

### Pathfinder Promotion

IDK, 文宣?

- (None)

## Documentation

Documentation should be sufficient inside the individual source files. Or you can just read the code to understand what's going on.