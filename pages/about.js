import Head from 'next/head';
import Image from 'next/image';
import DefaultPageLayout from '../components/DefaultPageLayout';
import Header from '../components/Header';

import style from '../styles/About.module.css';

export default function about() {
	return (
		<div className={style.page}>
			<Head>
				<title>StartUpIdeas</title>
			</Head>
			<Header noMargin={true} />
			<div>
				<div className={style.hero}></div>
			</div>

			<div className={`${style.big_display} ${style.cover}`}>
				<div className='big-display-inside'>
					<h1 className='sparse-bright'>
						<Image src='/images/logo-dark.svg' width={350} height={80} />
					</h1>
					<h3 className='cursive'>More people, more ideas to try</h3>
					<div className={style.thanks}>
						Photo by{' '}
						<a href='https://unsplash.com/@billy_huy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
							Billy Huynh
						</a>{' '}
						on{' '}
						<a href='https://unsplash.com/@billy_huy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
							Unsplash
						</a>{' '}
					</div>
				</div>

				<div className='cover-buttons-wrapper top right'>
					<a>
						<div className='hover-button'>
							<div>Sign in</div>
						</div>
					</a>
					<a>
						<div className='hover-button'>
							<div>Login</div>
							<i className='arrow arrow-right'></i>
						</div>
					</a>
				</div>

				<a href='#about-section'>
					<div className={style.about_warning}>
						<div>About</div>
						<i className='arrow arrow-down'></i>
					</div>
				</a>
			</div>
			<div className='big-display center-h' id='about-section'>
				<h3>What is it about?</h3>
				<div className={style.cards_wrapper}>
					<div className={style.card}>
						A bunch of people want to start a company, create something brand
						new and be successful, but have no idea of what to produce.
					</div>
					<div className={style.card}>
						It will be so easier if there\&apos;s a place where to talk with
						other creative problem-solver people, isn&apos;t?
					</div>
					<div className={style.card}>
						And this is our mission: To group so many entrepreneur that
						brilliant ideas simply pop up based on the previous ones
					</div>
				</div>
			</div>
			<div className='big-display dark'>
				<h3>Will your idea be stole?</h3>
				<div className='center-h margin-1'>
					<div>
						<p>Basically, not.</p>
						<p>
							You can think you have a outstanding never-thought idea, that just
							occur to one person in a million, but it means that 7800 people
							had this idea. So why it&apos;s not out there? Because it&apos;s
							hard to have a company.
						</p>
						<p>
							A great idea still very important, but what determines the overall
							success is the ability of throw away the initial bias and envolve
							the product.
						</p>
						<p>
							Google, for instance, started by the Larry Page&apos;s (crazy)
							idea of download all the internet.
						</p>
					</div>
				</div>
			</div>
			<div className='big-display'>
				<div className='center-h margin-1'>
					<p>
						Each user can contribute in multiple ideas = More ideas than users
					</p>
				</div>
			</div>
		</div>
	);
}
