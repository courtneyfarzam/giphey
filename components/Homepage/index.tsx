'use client';

import { Grid } from "@giphy/react-components";
import 'isomorphic-fetch';

import { fetchGifs } from '@/config';

const Homepage = () => {

    return (
        <>
            <section
                id='home'
            >
                <div>
                    <h1>Trending</h1>
                    {/* Wall of Gifs Goes Heeeeeere */}
                    <Grid
                        key='trending'
                        columns={3}
                        width={800}
                        fetchGifs={() => fetchGifs().fetchTrending(0)}
                        gutter={6} 
                    />                  
                </div>
            </section>
        </>
    );
};

export default Homepage;
