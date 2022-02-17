import React from 'react'

export const CalendarHeader = ({ onNext, onBack, dateDisplay }) => {
	return (
		<div id='header'>
			<div id='monthDisplay'>{dateDisplay}</div>
			<div>
				<button onClick={onBack} id='backBtn'>
					Back
				</button>
				<button onClick={onNext} id='nextBtn'>
					Next
				</button>
			</div>
		</div>
	)
}
