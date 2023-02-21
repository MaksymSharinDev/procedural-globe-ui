import { useState } from "react";
import { Box, Chip, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Theme, useTheme } from "@mui/material";
import { RenderOption } from "../enums";

export function RenderMultiSelect() {
  const theme = useTheme();
  function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
      fontWeight: personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    };
  }
  const [renderOptions, setRenderOptions] = useState<string[]>([]);
  return (
    <>
      <InputLabel

        id="render-options-select"> Overlays </InputLabel>
      <Select
        labelId="render-options-select-label"
        id="render-options-select"
        sx={{ height: "100px" }}
        multiple
        value={renderOptions}
        onChange={(event) => { setRenderOptions(event.target.value as string[]); }}
        input={<OutlinedInput id="render-options-select" label="Render Options" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {selected.map((value) => (
              <Chip
                key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={(() => {
          const ITEM_HEIGHT = 48;
          const ITEM_PADDING_TOP = 8;
          return {
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
              },
            }
          };
        })()}
      >
        {Object.values(RenderOption).map((RenderOption) => (
          <MenuItem
            key={RenderOption}
            value={RenderOption}
            style={getStyles(RenderOption, renderOptions, theme)}
          >
            {RenderOption}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
