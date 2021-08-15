import fetch from 'node-fetch';
import { CIVICS_API_KEY } from '../config';

export async function getRepresentatives(streetAddress: string) {
	const result = await fetch('https://www.googleapis.com/civicinfo/v2/representatives' +
		`?key=${CIVICS_API_KEY}` +
		`&address=${encodeURIComponent(streetAddress)}` +
		'&includeOffices=true' +
		'&levels=country' +
		'&roles=legislatorLowerBody&roles=legislatorUpperBody',
		{});
	return result.json();
}