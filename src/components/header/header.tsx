import { Box, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import headerImageLg from '../../assets/pictures/headerImgLg.png';
import headerImageSm from '../../assets/pictures/headerImgSm.png';
import headerImageXs from '../../assets/pictures/headerImgXs.png';

interface HeaderProps {
    search: string;
    setSearch: (value: string) => void;
    status: string;
    setStatus: (value: string) => void;
}

const Header = (props: HeaderProps) => {
    return (
        <>
            {/* header slot*/}
            <Box sx={{
                width: '100%',
                height: {
                    lg: 180,
                    sm: 180,
                    xs: 120
                },
                backgroundImage: `url(${headerImageLg})`,
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 1100,
                '@media (max-width:1800px)': {
                    backgroundImage: `url(${headerImageSm})`,
                },
                '@media (max-width:900px)': {
                    backgroundImage: `url(${headerImageXs})`,
                },
            }}>
                <Container maxWidth={false} sx={{
                    display: { xs: 'none', md: 'flex' },
                    justifyContent: 'flex-end'
                }}>
                    <Stack sx={{ width: '20%', justifyContent: 'flex-end' }} direction="column" spacing={2}>
                        <SearchAndFilter {...props} />
                    </Stack>
                </Container>
            </Box>

            {/* search and select for small screens */}
            <Box
                sx={{
                    position: { xs: 'fixed' },
                    top: { xs: '120px', sm: '180px', md: 'auto' }, //header height on xs
                    width: '100%',
                    backgroundColor: '#000', // da ne ostane bela pozadina
                    zIndex: 1099, // ispod headera
                    display: { xs: 'flex' }, // samo na xs i sm
                    justifyContent: 'center',
                    py: 2,
                    
                }}
            >
                <Stack direction="column" spacing={2} sx={{ width: '100%', maxWidth: '90%'}}>
                    <SearchAndFilter {...props} />
                </Stack>
            </Box>
        </>
    );
};
// search and filter boxes
const SearchAndFilter = (props: HeaderProps) => (
    <>
        <TextField
            label='Search character'
            variant='outlined'
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white',    // default color for border
                        borderWidth: 3,          
                        height: { xs: 50 },
                    },
                    '&:hover fieldset': {
                        borderColor: '#9DF4A0',  // color on hover 
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#9DF4A0',  // color when focused
                    },
                },
                input: {
                    color: '#9DF4A0',            // text color inside the input
                },
                label: {
                    color: 'white',              // label color -default
                },
                '& label.Mui-focused': {
                    color: '#9DF4A0',            // label color on focused
                },
            }}
        />
        <FormControl variant='outlined'
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white',    //  default border color
                        borderWidth: 3,
                        height: { xs: 50 },
                    },
                    '&:hover fieldset': {
                        borderColor: '#9DF4A0',  //  on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#9DF4A0',  //  on focus
                    },
                },
                '& .MuiInputLabel-root': {
                    color: 'white',              // label color
                    '&.Mui-focused': {
                        color: '#9DF4A0',        // On focus 
                    },
                },
            }}
        >
            <InputLabel sx={{ color: 'white', '&.Mui-focused': { color: '#9DF4A0' } }}>Status</InputLabel>
            <Select
                label='Status'
                value={props.status}
                onChange={(e) => props.setStatus(e.target.value)}
                sx={{
                    color: '#9DF4A0',
                    '& .MuiSvgIcon-root': { color: 'white' },
                }}
            >
                <MenuItem value=''>Any</MenuItem>
                <MenuItem value='alive'>Alive</MenuItem>
                <MenuItem value='dead'>Dead</MenuItem>
                <MenuItem value='unknown'>Unknown</MenuItem>
            </Select>
        </FormControl>
    </>
);

export default Header;