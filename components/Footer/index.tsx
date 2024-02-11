'use client';   // Use client-side rendering

import Link from 'next/link'; 

const Footer = () => {      // Footer component
    return (
			<footer>
				<div>
					<p>
						made with <span>❤</span> and js | 
                        <Link href='https://github.com/courtneyfarzam/giphy'>
                            courtney farzam
                        </Link>
					</p>
				</div>
			</footer>
		);
};  // End of Footer component

export default Footer;  // Export Footer component