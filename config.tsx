
import { GiphyFetch } from '@giphy/js-fetch-api';
import 'isomorphic-fetch';

export const fetchGifs = () => {
    
    const gf = new GiphyFetch(`${process.env.NEXT_PUBLIC_API_KEY}`);
    return {
        fetchTrending: (offset: number) => gf.trending({ type: 'gifs', limit: 30, offset: 20 }),
    };
};