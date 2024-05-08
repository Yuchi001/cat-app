import React from 'react';
import {CircularProgress, Stack} from "@mui/joy";

export const LoadingCircle = () => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            height="100%"
            width="100%"
        >
            <CircularProgress />
        </Stack>
    );
}