import React from 'react';
import {Stack, Typography} from "@mui/joy";

export const TopBar = () => {
    return <Stack
        bgcolor="var(--joy-palette-neutral-200, #DDE7EE)"
        width="100%"
        position="fixed"
        top={0}
        height="55px"
        justifyContent="center"
        alignItems="stretch"
        borderBottom={`1px solid var(--joy-palette-neutral-400, #9FA6AD)`}
        sx={{ px: 1, pt: 0.5, pb: 1 }}
    >
        <Typography level="h2" fontWeight="bolder">Cat app</Typography>
    </Stack>
}