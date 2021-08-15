import { Server, Request, Response, Next } from 'restify';
import { compileFile } from 'pug';
import { resolve } from 'path';
import { getRepresentatives } from './googlecivics/civics';

let indexTemplate = compileFile(resolve(__dirname, '..', 'templates', 'index.pug'));

export function init(server: Server) {
	console.log("Setting up web server");
	server.get("/", index);
	server.post("/", getReps);
}

async function index(_: Request, res: Response, __: Next) {
	res.send(200, indexTemplate());
}

async function getReps(req: Request, res: Response, _: Next) {
	const apiResult = await getRepresentatives(req.body.address);

	
}