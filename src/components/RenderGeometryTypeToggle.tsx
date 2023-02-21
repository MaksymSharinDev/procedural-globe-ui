import { useCallback, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { RenderGeometry } from "../enums";

export function RenderGeometryTypeToggle() {
  const [isRenderQuad, setIsRenderQuad] = useState(true);
  const handleRenderGeometryChange =
    useCallback(
      (event: React.MouseEvent<HTMLElement>, newRenderGeometry: RenderGeometry) => {
        setIsRenderQuad(newRenderGeometry === RenderGeometry.Quad);
      }, [setIsRenderQuad])
  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={isRenderQuad ? RenderGeometry.Quad : RenderGeometry.Flat}
        exclusive
        onChange={handleRenderGeometryChange}
        aria-label="quad/flat rendering toggle"

      >
        <ToggleButton
          style={{ width: "50%", padding: "24px" }}
          value={RenderGeometry.Quad} aria-label="quad rendering">
          {RenderGeometry.Quad}
        </ToggleButton>
        <ToggleButton
          style={{ width: "50%", padding: "24px" }}
          value={RenderGeometry.Flat} aria-label="flat rendering">
          {RenderGeometry.Flat}
        </ToggleButton>
      </ToggleButtonGroup>
    </>)
}
