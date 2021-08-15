import { resolve } from 'path';
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import { App } from './app';
import { init as siteInit } from './site';

process.on('uncaughtException', err => console.error(err));
process.on('unhandledRejection', err => console.error(err));

const webhost = new MRE.WebHost({
	baseDir: resolve(__dirname, '..', 'public'),
	permissions: [MRE.Permissions.UserInteraction, MRE.Permissions.UserTracking]
});

webhost.ready.then(() => siteInit(webhost.adapter.server));

webhost.adapter.onConnection((context, params) => new App(context, params));
