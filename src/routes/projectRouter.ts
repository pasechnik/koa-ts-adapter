import * as Router from 'koa-router';
import { Context, Next } from 'koa';
import * as debug from 'debug';
import { Validator, ValidatorResult } from 'jsonschema';
import { Project } from '../common/typings';
// @ts-ignore
import * as schema from '../../schema/Project.json';
import { createStorage } from '../storage/redis';

// const error = debug('app:post:error');
const log = debug('app:projectRouter');

const validator = new Validator();
export const projectRouter: Router = new Router();

projectRouter.post(
    `/`,
    async (ctx: Context, next: Next): Promise<void> => {
        const validatorResult: ValidatorResult = validator.validate(ctx.request.body, schema);
        log(`Project message is ${validatorResult.valid ? '' : 'NOT '}valid`);

        if (!validatorResult.valid) {
            ctx.status = 400;
            ctx.body = {
                status: 'error',
                data: validatorResult.errors,
            };

            return;
        }

        const project: Project = ctx.request.body;
        const storage = createStorage<string>('project_list');
        await storage.add(project.name);
        const games: string[] = await storage.list();
        await storage.quit();
        ctx.io.to('animals').emit('animal', games);
        // ctx.io.to('animals').emit('animal', `Project "${projectRouter.name}" ist da! `);

        // ALL ABOVE THIS IS NEW
        ctx.status = 201;
        ctx.body = {
            ...ctx.body,
            project,
        };

        await next();
    },
);
