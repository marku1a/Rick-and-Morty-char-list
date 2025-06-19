import { useCallback, useEffect, useRef, useState } from 'react';
import CharCard from './components/cards/CharCard';
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material';
import './App.css';
import { fetchCharacters } from './components/api/fetchCharacters';
import { Character } from './types/Characters';
import Header from './components/header/header';

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]); // state for storing list of chars
  const [loading, setLoading] = useState(true);                 // state for loading indicator
  const [error, setError] = useState<string | null>(null);      // state to store error msg
  //state for search and status
  const [search, setSearch] = useState('');                     
  const [status, setStatus] = useState('');  
  // debounce                   
  const [debounceSearch, setDebounceSearch] = useState(search); // For updating search results while typing
  // for pagination
  const [page, setPage] = useState(1);
  const [morePages, setMorePages] = useState(true);


  // for updating/showing search results while typing
  useEffect(() => {
    const handler = setTimeout(() => setDebounceSearch(search), 350);   // 350ms debounce before calling API, so we don't call it for each letter
    return () => clearTimeout(handler);
  }, [search]);

  // for resetting pagination when filters change
  useEffect(() => {
    setCharacters([]);
    setPage(1);
    setMorePages(true);
  }, [debounceSearch, status])

  // for fetching characters
  useEffect(() => {
    setLoading(true);
    fetchCharacters(page, debounceSearch, status)
      .then(data => {
          setCharacters((prev) => (page === 1 ? data.characters : [...prev, ...data.characters]));
          setMorePages(!!data.nextPage);
          setLoading(false);
      })
      .catch(error => {
        setError("Failed to fetch characters from API.");
        setLoading(false);
      });
  }, [page, debounceSearch, status]);


  // for infinity scrolling
  // observes the last char card and triggers loading next page when it comes into view
  const observer = useRef<IntersectionObserver | null>(null);

  const lastCharacterRef = useCallback((node: HTMLDivElement | null) => {
    if (loading || !morePages) return;                         // don't observe if loading or no more pages
    if (observer.current) observer.current.disconnect();       // disconnect previous observer

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && morePages) {
        setPage(prev => prev + 1);                             // load next page when last element is visible
      }
    });

    if (node) observer.current.observe(node);                  // start observing the new node
  }, [loading, morePages]);
   

  return (
    <Box sx={{ bgcolor: "#1e1e1e", minHeight: '100vh'}}>
      <Header search = {search} setSearch = {setSearch} status = {status} setStatus = {setStatus}/>
      <Container maxWidth={'xl'} sx={{ py: 10, bgcolor: "#04B1CD", pt: { xs: '300px', sm: '360px', md: '200px', lg: '200px'}}}>
        <Grid container spacing={5} justifyContent = 'center'>
          {characters.map((character, index) => (
            <Grid key = {character.id} sx = {{xs: 6, sm: 6, md: 4, lg: 3, xl: 3}}>
              <div ref={index === characters.length - 1 ? lastCharacterRef : null}>
                <CharCard character = {character} />
              </div>
            </Grid>
          ))}
        </Grid>
        {loading && <CircularProgress />}
        {error && <Typography color = "error">{error}</Typography>}
      </Container>
    </Box>
  );
};

export default App;
