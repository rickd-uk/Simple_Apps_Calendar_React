import React, { useState } from 'react'

export const NewEventModal = ({ onSave, onClose }) => {
	const [title, setTitle] = useState('')
	const [error, setError] = useState(false)

	return (
		<>
			<div id='newEventModal'>
				<h2>New Event</h2>

				<input
					className={error ? 'error' : ''}
					id='eventTitleInput'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder='Event Title'
				/>

				<button
					id='saveBtn'
					onClick={() => {
						if (title) {
							setError(false)
							onSave(title)
						} else {
							setError(true)
						}
					}}>
					Save
				</button>
				<button id='cancelBtn' onClick={onClose}>
					Cancel
				</button>
			</div>

			<div id='backdropModal'></div>
		</>
	)
}
