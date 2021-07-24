import { api } from '../../services/api';

import style from '/styles/IdeaPage.module.css';

import TopButtonWrapper from '../../components/TopButtonWrapper';
import { Comment } from '../../components/Comment';
import { CommentEntry } from '../../components/CommentEntry';
import DefaultPageLayout from '../../components/DefaultPageLayout';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import Head from 'next/head';
import { VoteBox } from '../../components/VoteBox';

export default function IdeaPage(props) {
	const [idea, setIdea] = useState(props.idea || {});

	const router = useRouter();
	const { id } = router.query;

	let [comments, setComments] = useState([]);

	const refresh = useCallback(() => {
		api.get(`/idea/${id}/comments`).then((res) => setComments(res.data));
		if (!idea) {
			api.get('/ideas_ids').then((res) => setIdea(res.data));
		}
	}, [id, idea]);

	useEffect(() => refresh(), [id, idea, refresh]);

	function addCallback(res) {
		refresh();
	}

	return (
		<DefaultPageLayout>
			<Head>
				<title>{(idea && idea.title) || 'StartUpIdeas'}</title>
			</Head>
			<TopButtonWrapper />
			<div>
				<div className='paper-like' id={style.idea}>
					<div>
						<h1>{(idea && idea.title) || 'loading...'}</h1>
						<p>{(idea && idea.description) || 'loading...'}</p>
					</div>
					<VoteBox id={id} />
				</div>
				<div className='paper-like'>
					<CommentEntry id={idea && idea.id} addCallback={addCallback} />
					{comments.map((item) => {
						return <Comment key={item.id} {...item}></Comment>;
					})}
					{!comments.length ? (
						<div
							style={{
								fontFamily: "'Kalam', cursive",
								color: '#0007',
								textAlign: 'center',
							}}
						>
							It looks like there are no comments yet... Would you like to be
							the first?
						</div>
					) : (
						<div></div>
					)}
				</div>
			</div>
			{/* <div style={{ marginTop: '30px', paddingBottom: '4px' }}>
				<h3>May interest you</h3>
			</div> */}
			{/* <IdeasLoader /> */}
		</DefaultPageLayout>
	);
}

export async function getStaticProps(context) {
	const [idea] = await Promise.all([api.get('/idea/' + context.params.id)]);
	return {
		props: { idea: idea.data },
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	// Call an external API endpoint to get posts
	const res = await api.get('/ideas_ids');
	const ids = await res.data;

	// Get the paths we want to pre-render based on posts
	const paths = ids.map((id) => ({
		params: { id: '' + id.id },
	}));

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: true };
}
