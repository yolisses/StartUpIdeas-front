import { useEffect, useState } from 'react';
import { api } from '../services/api';

import style from '/styles/ConfigPage.module.css';
import { retrieveId, retrieveName, retrieveToken } from '../contexts/auth';
import DefaultPageLayout from '../components/DefaultPageLayout';

import Image from 'next/image';

export default function ConfigPage() {
	const [changingName, setChangingName] = useState(false);
	const [newName, setNewName] = useState(false);

	const [user, setUser] = useState({ name: retrieveName() });

	useEffect(() => {
		const route = '/user/' + retrieveId();
		console.log({ route });
		api.get('/user/' + retrieveId()).then((res) => {
			setUser(res.data);
			console.log(res.data);
		});
	}, [changingName]);

	const changeName = () => {
		api
			.put(
				'/user',
				{ name: newName },
				{
					headers: { authorization: retrieveToken() },
				}
			)
			.then((res) => {
				console.log(res);
				setChangingName(false);
			});
	};

	return (
		<DefaultPageLayout>
			<div className='paper-like'>
				<div className={style.username_config}>
					<Image src='/images/user.svg' alt='user' width={100} height={100} />
					<div className={style.change_name_wrapper}>
						{changingName ? (
							<>
								<input
									type='text'
									value={newName}
									onChange={(e) => setNewName(e.target.value)}
								/>
								<div className={style.button_spacer}>
									<button onClick={() => setChangingName(false)}>Cancel</button>
									<button onClick={changeName} className='btn-strong'>
										Save
									</button>
								</div>
							</>
						) : (
							<>
								<h2>{user.name}</h2>
								<button
									onClick={() => {
										setChangingName(true);
										setNewName(user.name);
									}}
									style={{ marginLeft: '10px' }}
								>
									Change name
								</button>
							</>
						)}
					</div>
				</div>
			</div>
		</DefaultPageLayout>
	);
}
