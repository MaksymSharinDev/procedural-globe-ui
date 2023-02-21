import { useCallback, useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { RenderType } from "../enums";

export function RenderTypeToggle() {
  const [selectedRenderType, setSelectedRenderType] = useState(RenderType.Surface);

  const handleRenderTypeChange =
    useCallback(
      (event: React.MouseEvent<HTMLElement>, newRenderType: RenderType) => {
        setSelectedRenderType(newRenderType);
      }, [setSelectedRenderType])

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={selectedRenderType}
        exclusive
        onChange={handleRenderTypeChange}
        aria-label="rendering types toggle"

      >
        {Object.values(RenderType).map((renderingType) =>
          <ToggleButton
            style={{ width: "50%", padding: "15px" }}
            value={renderingType} aria-label={renderingType}>
            {renderingType}
          </ToggleButton>
        )}

      </ToggleButtonGroup>
    </>)
}