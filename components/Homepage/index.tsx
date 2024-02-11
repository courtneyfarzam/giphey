'use client';

import { TrendingGifs } from '@/components/Giphy/index';

const Homepage = () => {

    return (
			<>
				<section id='home'>
					<div>
						<h1>Trending</h1>
                        <TrendingGifs />
					</div>
				</section>
			</>
		);
};

export default Homepage;
