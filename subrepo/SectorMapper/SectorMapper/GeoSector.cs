using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using GeoConvertLib;

namespace SectorMapper
{
    public class GeoSector
    {
        public string DisplayedName { get; private set; }
        public string VariableName { get; private set; }
        private List<GCS_WCS84> boundingPts;

        public GeoSector(string displayedName, List<GCS_WCS84> boundary)
        {
            DisplayedName = displayedName;
            boundingPts = boundary;
        }

        public bool PointIsInSector(GCS_WCS84 point)
        {
            if (boundingPts.Count < 3)
            {
                // It is never a proper polygon to begin with.
                return false;
            }
            // It is unlikely, but check if the point is one of the several bounding points
            foreach (GCS_WCS84 vertex in boundingPts)
            {
                if (point == vertex)
                {
                    return true;
                }
            }
            if (boundingPts.Count == 3)
            {
                // It's actually a triangle, delegating to our custom method
                return PointIsInsideTriangle(point, boundingPts[0], boundingPts[1], boundingPts[2]);
            }
            // It's a polygon...
            // Split it up to many triangles
            GCS_WCS84 origin = boundingPts[0];
            for (int i = 1; i < boundingPts.Count - 1; i++)
            {
                if (PointIsInsideTriangle(point, origin, boundingPts[i], boundingPts[i + 1]))
                {
                    // When it is in one of the sub-triangles, it is within the polygon.
                    return true;
                }
            }
            // It is not inside the polygon if it is not inside of any of the sub-triangles.
            return false;
        }

        private bool PointIsInsideTriangle(GCS_WCS84 p0, GCS_WCS84 p1, GCS_WCS84 p2, GCS_WCS84 p3)
        {
            // p0 is the point we are querying.
            // p1 to 3 are the bounding points of the triangle.

            // Cache some info first
            double p0_Lat = p0.Latitude;
            double p0_Lng = p0.Longitude;

            // Lat is x, long is y

            // First calculate the magnitude of cross products of the three "edge-vectors" wrt to the query point
            // p1 to p2, therefore p2 - p1
            double cross1 = (p0_Lng - p1.Longitude) * (p2.Latitude - p1.Latitude) - (p0_Lat - p1.Latitude) * (p2.Longitude - p1.Longitude);
            // p2 to p3
            double cross2 = (p0_Lng - p2.Longitude) * (p3.Latitude - p2.Latitude) - (p0_Lat - p2.Latitude) * (p3.Longitude - p2.Longitude);
            // p3 to p1 (notice the direction)
            double cross3 = (p0_Lng - p3.Longitude) * (p1.Latitude - p3.Latitude) - (p0_Lat - p3.Latitude) * (p1.Longitude - p3.Longitude);

            // Then verify that the signs of the magnitudes are the same
            // 0 can be ignored
            // When all effective signs are the same, the query point is inside.
            // Otherwise, it is outside.

            /*
             * Optimizing the logic:
             * Sum all the Math.Sign() results
             * Then consider the sum magnitude:
             * 3 => inside
             * 2 => still inside; the point is on edge
             * 1 => point is outside
             * (The case where the query point is exactly a boundary vertex is taken care of.)
             */
            return Math.Abs(Math.Sign(cross1) + Math.Sign(cross2) + Math.Sign(cross3)) > 1;
        }
    }
}
