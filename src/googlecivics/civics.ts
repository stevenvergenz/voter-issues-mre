import fetch from 'node-fetch';
import { CIVICS_API_KEY } from '../config';
import { RepresentativeInfoResponse } from './types';

export async function getRepresentatives(streetAddress: string): Promise<RepresentativeInfoResponse> {
	const result = await fetch('https://www.googleapis.com/civicinfo/v2/representatives' +
		`?key=${CIVICS_API_KEY}` +
		`&address=${encodeURIComponent(streetAddress)}` +
		'&includeOffices=true' +
		'&levels=country' +
		'&roles=legislatorLowerBody&roles=legislatorUpperBody',
		{});
	return (await result.json()) as RepresentativeInfoResponse;
}