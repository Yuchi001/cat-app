import React, {useEffect, useState} from 'react';
import {Cat} from "../../api/Models/Cat";
import {GetCatsByBreed} from "../../api/Api";
import {
    Button,
    Card,
    CircularProgress,
    Divider,
    Grid,
    LinearProgress,
    Option,
    Select,
    Slider,
    Stack,
    Typography
} from "@mui/joy";
import {CatBreeds} from "../../api/routes.types";
import {Breed} from "../../api/Models/Breed";
import {LoadingCircle} from "../LoadingCircle/LoadingCircle";

export const MainPage = () => {
    const [cats, SetCats] = useState<Cat[]>([]);
    const [breed, SetBreed] = useState<Breed | undefined>(undefined);
    const [breedId, SetBreedId] = useState<string>("");
    const [loading, SetLoading] = useState(false);

    useEffect(() => {
        refreshCats();
    }, [breedId]);

    const refreshCats = () => {
        SetLoading(true);
        GetCatsByBreed(breedId, 10).then((fetchedCats) => {
            if(fetchedCats.length === 0) return;

            SetCats(fetchedCats);
            SetBreed(fetchedCats[0].breeds[0]);
        }).finally(() => SetLoading(false));
    };

    const handleChange = (
        event: React.SyntheticEvent | null,
        newValue: string | null,
    ) => {
        if(newValue === null) return;
        SetBreedId(newValue);
    };

    return <Stack spacing={1} height="85vh" alignItems="center" sx={{ pt: '75px', px: 1 }}>
        <Grid container width="100%" height="100%" spacing={1} flexGrow={0}>
            <Grid xs={12} md={3}>
                <Card sx={{ height: '100%' }}>
                    <Typography level="h2" fontWeight="bold">
                        General info
                    </Typography>
                    <Divider />
                    {loading && <LoadingCircle />}
                    {breed && !loading && <Stack spacing={2}>
                        <Stack>
                            <Typography level="body-xs" fontSize={14}>Breed name</Typography>
                            <Typography>{breed.name}</Typography>
                        </Stack>
                        <Stack>
                            <Typography level="body-xs" fontSize={14}>Description</Typography>
                            <Typography>{breed.description}</Typography>
                        </Stack>
                        <Stack>
                            <Typography level="body-xs" fontSize={14}>Temperament</Typography>
                            <Typography>{breed.temperament}</Typography>
                        </Stack>
                        <Stack>
                            <Typography level="body-xs" fontSize={14}>Origin</Typography>
                            <Typography>{breed.origin}</Typography>
                        </Stack>
                        <Stack>
                            <Typography level="body-xs" fontSize={14}>Countries</Typography>
                            <Typography>{breed.country_codes}</Typography>
                        </Stack>
                        <Stack>
                            <Typography level="body-xs" fontSize={14}>Life span (in years)</Typography>
                            <Typography>{breed.life_span}</Typography>
                        </Stack>
                    </Stack>}
                </Card>
            </Grid>
            <Grid container xs={12} md={6} direction="column" sx={{ height: '100%' }}>
                <Grid container>
                    <Grid xs={12} md={9} lg={10}>
                        <Select onChange={handleChange}>
                            {CatBreeds.map((element, index) =>
                                <Option value={element.breedId} key={index}>
                                    {element.breedName}
                                </Option>
                            )}
                        </Select>
                    </Grid>
                    <Grid xs={12} md={3} lg={2}>
                        <Button onClick={refreshCats} fullWidth>Refresh cats</Button>
                    </Grid>
                </Grid>
                <Grid container columns={5}>
                    {loading && <LoadingCircle />}
                    {breed && !loading && cats.map((element, index) => (
                        <Grid key={index}>
                            <img style={{ borderRadius: '10px' }} src={element.url} height={150} width="auto" />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid xs={12} md={3}>
                <Card sx={{ height: '100%' }}>
                    <Typography level="h2" fontWeight="bold">
                        Stats
                    </Typography>
                    <Divider />
                    {loading && <LoadingCircle />}
                    {breed && !loading && <Stack spacing={2}>
                        <Stack spacing={1}>
                            <Typography level="body-xs" fontSize={14}>Adaptability</Typography>
                            <LinearProgress determinate value={breed.adaptability * 20} />
                        </Stack>
                        <Stack spacing={1}>
                            <Typography level="body-xs" fontSize={14}>Affection level</Typography>
                            <LinearProgress determinate value={breed.affection_level * 20} />
                        </Stack>
                        <Stack spacing={1}>
                            <Typography level="body-xs" fontSize={14}>Energy level</Typography>
                            <LinearProgress determinate value={breed.energy_level * 20} />
                        </Stack>
                        <Stack spacing={1}>
                            <Typography level="body-xs" fontSize={14}>Health issues</Typography>
                            <LinearProgress determinate value={breed.health_issues * 20} />
                        </Stack>
                        <Stack spacing={1}>
                            <Typography level="body-xs" fontSize={14}>Inteligence</Typography>
                            <LinearProgress determinate value={breed.intelligence * 20} />
                        </Stack>
                        <Stack spacing={1}>
                            <Typography level="body-xs" fontSize={14}>Stranger friendly</Typography>
                            <LinearProgress determinate value={breed.stranger_friendly * 20} />
                        </Stack>
                    </Stack>}
                </Card>
            </Grid>
        </Grid>
    </Stack>
}