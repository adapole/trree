'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
	<motion.nav
		variants={navVariants}
		initial='hidden'
		whileInView='show'
		className={`${styles.xPaddings} py-8 relative`}
	>
		<div className='absolute w-[50%] inset-0 gradient-01' />
		<div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
			<button
				type='button'
				onClick={() => {
					window.open('https://discord.gg/25d7pNwF', '_blank');
				}}
			>
				<img
					src='/discord.svg'
					alt='discord'
					className='w-[24px] h-[24px] object-contain'
				/>
			</button>

			<h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
				TRREE.Q
			</h2>
			<button
				type='button'
				onClick={() => {
					window.open('https://twitter.com/Silvanus_tree', '_blank');
				}}
			>
				<img
					src='/twitter.svg'
					alt='twitter'
					className='w-[24px] h-[24px] object-contain'
				/>
			</button>
		</div>
	</motion.nav>
);

export default Navbar;
