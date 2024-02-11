import CategorySection from '@/components/Categories/index';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Giphey | Categories',
    description: 'Categories',
};

const categories = () => {
    return (
    <>
    <CategorySection />;
    </>
    )
};

export default categories;