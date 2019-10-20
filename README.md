## 探路：港鐵替代路線搜尋器 Pathfinder: Alternative Routes of MTR

<!--
<p>
    <a href="https://materializecss.com" target="_blank"><img alt="Materialize CSS Link" src="https://img.shields.io/badge/Uses-Materialize%20CSS-blue"></a>
    <a href="https://shields.io" target="_blank"><img alt="Shields.IO Link" src="https://img.shields.io/badge/Uses-Shields.io-blue"></a>
    <a href="https://hitcounter.pythonanywhere.com/" target="_blank"><img alt="Hitcounter Link" src="https://img.shields.io/badge/Uses-Hit Counter-blue"></a>
</p>
-->

![MaterializeCSS](https://img.shields.io/badge/Uses-Materialize%20CSS-blue)
![ShieldsIO](https://img.shields.io/badge/Uses-Shields.io-blue)
![Hits](https://hitcounter.pythonanywhere.com/nocount/tag.svg?url=https%3A%2F%2Ftrafficguide.github.io%2Falt-routes%2F)

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