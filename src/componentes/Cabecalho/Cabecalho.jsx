import BotaoPrincipal from "../BotaoPrincipal";
import Logo from "../Logo/Logo";
import { Grid } from "@mui/material";

export default function Cabecalho () {
    return ( 

        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center" 
            margin="1rem 0"
        >
            <Logo/>
            <BotaoPrincipal>Novo video</BotaoPrincipal>

        </Grid>
    )
}