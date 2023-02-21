
import { Box, Card, CardContent, CardHeader, Container, createTheme, FormControl, Slider, Stack, ThemeProvider, Typography } from "@mui/material";

import { RenderMultiSelect } from "./components/RenderMultiSelect";
import { RenderGeometryTypeToggle } from "./components/RenderGeometryTypeToggle";
import { RenderTypeToggle } from "./components/RenderTypeSelect";
import { useEffect, useState, lazy } from "react";
import { getWorldGraphGenerator } from "procedural-globe-lib"
import { Coordinates, SphereMesh } from "procedural-globe-lib/dist/Models/SphereMesh";
const Sphere = lazy(() => import('./components/Sphere'));

function App() {
  const theme = createTheme();
  const [coordinates, setCordinates] = useState<Coordinates[]>([])
  const [tasselationPoints, setTasselationPoints] = useState(100)
  const [jitter, setJitter] = useState(0)
  const [seed, setSeed] = useState(0)
  useEffect(() => {
    const worldGraphGenerator = getWorldGraphGenerator(tasselationPoints, jitter, seed, false)
    const coordinates = worldGraphGenerator.next().value as Coordinates[]
    setCordinates(coordinates)
    // const coordinates = SphereMesh.makeSphere(tasselationPoints,0, () => 0.5) 
    // setLatLong (coordinates.map((c: Coordinates) => [c.latitude, c.longitude]))
  }, [tasselationPoints, jitter, seed])

  return (
    <div className="App">
      {
        /*
        Using: Typescript, Meterial UI for React components library,
        Notes: all not in order of importance, decide the orderings due to significance and use frequency, comment the why of the choices you make.
        Requirements:
        - switch for setting "quad/flat"
        - select for Render Standard, Render Temperature, Render Humidity, Render Surface, Render Temperature&Humidity.
        - select multiple for Plate vectors Plate boundaries Land Boundaries Elevation Lines Wind vectors Normal vectors Equator Extra Lattitude Lines Prime Meridian
        */
      }
      {/*
      MUI need to provide theme
      */}
      <ThemeProvider theme={theme}>

        {
          //component to make childrens of the same size from MUI
        }
        <Container maxWidth="xl" >
          <Box display={"flex"} marginTop={"50"}>
            <Box display={"flex"} flexDirection={"column"} width={"100%"}   >
              <Card
                sx={{ margin: 1 }}
              >
                <CardHeader title={"Render Options"} />
                <CardContent>
                  <Box display={"flex"} justifyContent={"start"} >
                    <FormControl sx={{ m: 1, minWidth: 300 }} >
                      <RenderGeometryTypeToggle />
                    </FormControl>
                  </Box>
                  <Box display={"flex"} justifyContent={"start"} >
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                      <RenderTypeToggle />
                    </FormControl>
                  </Box>

                </CardContent>
              </Card>
              <Card
                sx={{ margin: 1 }}
              >
                <CardHeader title={"Parameters"} />
                <CardContent>
                  <Box display={"flex"} height={300} margin={1} justifyContent={"space-around"} >
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} minWidth={"30%"} >

                      <Slider

                        min={0}
                        max={100}
                        value={tasselationPoints}
                        step={10}
                        onChange={(e, v) => setTasselationPoints(v as number)}
                        orientation={"vertical"}
                        valueLabelDisplay="on"
                        marks={true}
                      />
                      <Typography margin={1}
                      > {"tasselation"} </Typography>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} minWidth={"30%"} >
                      <Slider
                        min={-1}
                        max={1}
                        value={jitter}
                        step={0.2}
                        onChange={(e, v) => setJitter(v as number)}
                        orientation={"vertical"}
                        valueLabelDisplay="on"
                        marks={true}
                      />
                      <Typography margin={1}
                      > {"jitter"} </Typography>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} minWidth={"30%"} >
                      <Slider

                        min={0}
                        max={100}
                        value={seed}
                        step={10}
                        onChange={(e, v) => setSeed(v as number)}
                        orientation={"vertical"}
                        valueLabelDisplay="on"
                        marks={true}
                      />
                      <Typography margin={1}
                      > {"seed"} </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
            <Box display={"flex"} flexDirection={"column"} width={"100%"}   >
              <Box display={"flex"} justifyContent={"end"} >
                <FormControl sx={{ m: 1, width: "100%", minHeight: 150 }}>
                  <RenderMultiSelect />
                </FormControl>
              </Box>
              <Box display={"flex"} justifyContent={"center"} >
                {coordinates[1]
                  &&
                  <Sphere
                    data={coordinates}
                  />}
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App;


