'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
	<section className={`${styles.paddings} relative z-10`}>
		<div className='gradient-02 z-0' />
		<motion.div
			variants={staggerContainer}
			initial='hidden'
			whileInView='show'
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
		>
			<TypingText title='| About Trree' textStyles='text-center' />
			<motion.p
				variants={fadeIn('up', 'tween', 0.2, 1)}
				className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
			>
				Welcome to{' '}
				<span className='font-extrabold text-white'>Trree Quest</span> , the
				game that lets you have fun and make a difference at the same time.
				We're excited to share with you an immersive and engaging metaverse
				experience that not only provides hours of entertainment, but also helps
				to combat climate change. With Trree Quest, players can explore{' '}
				<span className='font-extrabold text-white'>
					a beautiful virtual world,
				</span>{' '}
				plant and preserve virtual trees, and compete with other players to make
				the <span className='font-extrabold text-white'>biggest impact.</span>{' '}
				Step into the virtual world and explore your tree in{' '}
				<span className='font-extrabold text-white'>AR/VR</span> like never
				before! A thrilling experience awaits!
			</motion.p>
			<motion.img
				variants={fadeIn('up', 'tween', 0.3, 1)}
				src='/arrow-down.svg'
				alt='arrow down'
				className='w-[18px] h-[28px] object-contain mt-[28px]'
			/>
		</motion.div>
	</section>
);

export default About;
