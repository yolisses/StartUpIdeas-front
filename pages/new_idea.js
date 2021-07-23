import { useState } from 'react';
import { retrieveToken } from '../contexts/auth';
import { api } from '../services/api';

import { TextInput } from '../components/TextInput';

import style from '/styles/NewIdeaPage.module.css';

import DefaultPageLayout from '../components/DefaultPageLayout';

export default function NewIdeaPage(props) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const sendIdea = () => {
		api
			.post(
				`/idea`,
				{ title, description },
				{ headers: { authorization: retrieveToken() } }
			)
			.then((res) => {
				if (props.addCallback) props.addCallback(res);
				props.history.push('/');
			});
	};

	return (
		<DefaultPageLayout>
			<h3 className={style.message}>
				{/* <Icon type="idea" /> */}A new idea to be improved!
			</h3>
			<div className={style.form}>
				<div className='paper-like'>
					<div>
						<label htmlFor={style.input}>Title</label>
						<TextInput
							id='title-input'
							value={title}
							// placeholder="e.g. a app to write a book based on mindmapping (snowflake technique)"
							onChange={(e) => setTitle(e.target.value)}
							singleLine={true}
						/>
						{/* <div className="little-instruction">Please, be specific</div> */}
					</div>
					<div>
						<label htmlFor='description-input'>Description</label>
						<TextInput
							id='description-input'
							additionalRows={1}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
						{/* <div className='little-instruction'>
							Remember that the others may not know what are you talking about
						</div> */}
					</div>
					<div>
						<button onClick={sendIdea} className='btn-strong'>
							Send
						</button>
					</div>
				</div>
			</div>
		</DefaultPageLayout>
	);
}
