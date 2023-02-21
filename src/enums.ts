enum RenderGeometry {
    Quad = "Quad",
    Flat = "Flat",
}

enum RenderType {
    Surface = "Surface",
    Temperature = "Temperature",
    Humidity = "Humidity",
    TemperatureAndHumidity = "Temperature And Humidity"
}

enum RenderOption {
    Equator = "Equator",
    PrimeMeridian = "Prime Meridian",
    ExtraLattitudeLines = "Extra Lattitude Lines",
    PlateVectors = "Plate Vectors",
    PlateBoundaries = "Plate Boundaries",
    LandBoundaries = "Land Boundaries",
    ElevationLines = "Elevation Lines",
    WindVectors = "Wind Vectors",
}

/*
Number of regions: 
Number of plates: 
Seed: 
Jitter: 
Sphere rotation: 
Axial Tilt: 
Procession: 
SeaLevel: 
*/
// use more readable names reorder



export { RenderGeometry, RenderType, RenderOption };