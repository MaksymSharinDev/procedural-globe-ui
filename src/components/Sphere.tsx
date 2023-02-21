import Globe, { GlobeMethods } from 'react-globe.gl';
import { useCallback, useEffect, useRef, useState } from "react";
import { MeshStandardMaterial } from "three";
import { Box, Button, Icon, IconButton } from '@mui/material';
import { Coordinates } from 'procedural-globe-lib/dist/Models/SphereMesh';
import { ArrowDownwardRounded, ArrowLeftRounded, ArrowRightRounded, ArrowUpward, ArrowUpwardRounded, CenterFocusStrongRounded, East, NordicWalkingRounded, North, NorthRounded, South, West } from '@mui/icons-material';


function Sphere({ data }: { data: Coordinates[] }) {
    const globeEl = useRef()
    const [viewLat, setViewLat] = useState(0)
    const [viewLng, setViewLng] = useState(0)
    const [viewAlt, setViewAlt] = useState(1.5)

    // limit digits to 2

    const round =
        useCallback(
            (num: number, digits: number) => {
                const factor = Math.pow(10, digits)
                const result = Math.round(num * factor) / factor
                return result
            }, [])
    useEffect(() => {
        const globe = globeEl.current as GlobeMethods
        if (!globe) return
        globe?.pointOfView(
            { lat: viewLat, lng: viewLng, altitude: viewAlt }, 250
        )
    }, [viewLat, viewLng, viewAlt, globeEl])

    const onCameraChange = useCallback(() => {
        const globe = globeEl.current as GlobeMethods
        if (!globe) return
        const { lat, lng, altitude } = globe.pointOfView()
        setViewLat(lat)
        setViewLng(lng)
        setViewAlt(altitude)
    }, [globeEl])

    return (
        <>

            <Globe
                globeMaterial={
                    new MeshStandardMaterial({
                        color: "rgba(64, 64, 64, 1)",
                    })
                }
                // transparent
                backgroundColor="rgba(0, 0, 0, 0)"
                width={600}
                height={600}
                labelsData={
                    data.map(({ latitude, longitude }) => ({
                        latitude: round(latitude, 2),
                        longitude: round(longitude, 2),
                    }))
                }
                labelLat={(d: Coordinates) => d.latitude}
                labelLng={(d: Coordinates) => d.longitude}
                labelColor={() => "rgba(255, 255, 255, 1)"}
                labelDotRadius={1}
                labelResolution={5}
                labelText={(d: Coordinates) => `* \n ${d.latitude
                    },\n ${d.longitude}`}
                labelSize={2}
                labelIncludeDot={true}
                enablePointerInteraction={true}
                // use grids
                showGraticules={true}
                ref={globeEl}
            // onGlobeClick={onCameraChange}
            // onZoom={onCameraChange}
            />
            {
                // camera controls increase/ decrease lat/long arrows
                // zoom in and out
                // material icons, MUI Framework React Components
                // a circle 4 arrows, plus and minus buttons
            }
            <Box display={"flex"} justifyContent={"center"}
                position={"relative"} right={"15%"} 
            >
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"} minWidth={"30%"} >
                    <Button
                        sx={{
                            minWidth: "40px",
                            width: "40px",
                            minHeight: "40px",
                            height: "40px",
                            padding: "0px",
                            margin: "0px",
                        }}
                    >
                        <North />
                    </Button>
                    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} >
                        <Button
                            sx={{
                                minWidth: "40px",
                                width: "40px",
                                minHeight: "40px",
                                height: "40px",
                                padding: "0px",
                                margin: "0px",
                            }}
                        >
                            <West />
                        </Button>
                        <Button
                            sx={{
                                minWidth: "40px",
                                width: "40px",
                                minHeight: "40px",
                                height: "40px",
                                padding: "0px",
                                margin: "0px",
                            }}
                        >
                            <CenterFocusStrongRounded />
                        </Button>
                        <Button
                            sx={{
                                minWidth: "40px",
                                width: "40px",
                                minHeight: "40px",
                                height: "40px",
                                padding: "0px",
                                margin: "0px",
                            }}
                        >
                            <East />
                        </Button>
                    </Box>
                    <Button
                        sx={{
                            minWidth: "40px",
                            width: "40px",
                            minHeight: "40px",
                            height: "40px",
                            padding: "0px",
                            margin: "0px",
                        }}
                    >
                        <South />
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Sphere;

// pnpm peer dependency solution: flag pee