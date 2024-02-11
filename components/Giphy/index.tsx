import { useState } from 'react';
import { Grid, Gif } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';
import ResizeObserver from 'react-resize-observer';

const gf = new GiphyFetch(`${process.env.NEXT_PUBLIC_API_KEY}`);


// TRENDING GIFS --------------------------------------------- //
export const TrendingGifs = () => {
	const fetchGifs = (offset: number) => gf.trending({ type: 'gifs', limit: 30, offset });

    const [width, setWidth] = useState(window.innerWidth);

    const [modalGif, setModalGif] = useState();
	
    return (
			<>
				{/* Grid of trending gifs */}
				<Grid
					onGifClick={(gif: any, e: any) => {
						console.log('gif', gif);
						e.preventDefault();
						setModalGif(gif);
					}}
					key='trending'
					columns={3}
					width={width}
					gutter={6}
					fetchGifs={() => fetchGifs(0)}
				/>
				{/* Click on the gif and view in modal */}
				{modalGif && (
					<div
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							background: 'rgba(0, 0, 0, .8)',
						}}
						onClick={(e) => {
							e.preventDefault();
							setModalGif(undefined);
						}}
					>
						<Gif gif={modalGif} width={500} />
					</div>
				)}

				<ResizeObserver
					onResize={({ width }) => {
						setWidth(width);
					}}
				/>
			</>
		);
};


