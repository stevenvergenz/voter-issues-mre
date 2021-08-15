import { Server, Request, Response, Next } from 'restify';
import { getRepresentatives } from './googlecivics/civics';

export function init(server: Server) {
	console.log("Setting up web server");
	server.get("/", index);
}

async function index(_: Request, res: Response, __: Next) {
	console.log("Web request made");
	const result = await getRepresentatives('1 Microsoft Way, Redmond, WA, 98052');
	return res.json(200, result);
}