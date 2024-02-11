import SearchSection from '@/components/Search/index';

import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Giphey | Search',
	description: 'Search and Results',
};

const search = () => {
	return (
		<>
			<SearchSection />;
		</>
	);
};

export default search;