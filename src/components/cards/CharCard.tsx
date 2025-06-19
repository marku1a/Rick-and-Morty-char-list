import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Character } from '../../types/Characters';

type Props = {character: Character};

const CharCard = ({character}: Props) => {          //cards for character showcase
    return (
        <Card sx = {{
            maxWidth: 200,
            bgcolor: '#1e1e1e',
            color: '#9DF4A0',
            borderRadius: 3,
            border: 3,
            borderColor: '#9DF4A0',
            position: 'relative',
            boxShadow: 3,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 6,
            }
        }}>
            <CardMedia
                component = 'img'
                height = '200'
                image = {character.image}
                alt =  {character.name}

            />
            <Box                              //for more info about the character on mouseover    
                sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '95%',
                height: '100%',
                bgcolor: 'rgba(0,0,0,0.7)', 
                color: '#9DF4A0',
                opacity: 0,                   // hidden default
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                textAlign: 'left',
                p: 1.5,
                
                transition: 'opacity 0.3s ease',
                "&:hover": {
                    opacity: 1,               // show on mouseover
                }
                }}
            >
                <Typography variant="h6">Status: {character.status}</Typography>
                <Typography variant="h6">Species: {character.species}</Typography>
                <Typography variant="h6">Gender: {character.gender}</Typography>
                <Typography variant="h6">Location: {character.location}</Typography>
            </Box>
            <CardContent sx = {{maxHeight: 30, minHeight: 30, px: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Box textAlign="center">
                    <Typography variant="button" 
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        textAlign: 'center',
                        whiteSpace: 'wrap',
                        }}>{character.name}</Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CharCard;