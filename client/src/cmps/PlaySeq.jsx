import React, { useState, useEffect } from 'react'
import { bulb } from './Bulb';

export function PlaySeq({ seq }) {
	const [currLight, setCurrLight] = useState();

	function wait(ms) {
		var start = Date.now(),
			now = start;
		while (now - start < ms) {
			now = Date.now();
		}
	}
	return (
		<div>
			{seq}
			{
				seq.map((el) => {
					// (el ? setCurrLight(el) : null);
					// setCurrLight(el);
						console.log('NEXT NUMBER IS:', el)
						wait(1000);
				}

				)
			}
		</div>
	)
}