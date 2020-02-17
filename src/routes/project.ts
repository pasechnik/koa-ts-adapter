import * as Router from 'koa-router';
import { Context, Next } from 'koa';
import * as debug from 'debug';
import { Validator, ValidatorResult } from 'jsonschema';
import { Project } from '../common/typings';
// @ts-ignore
import * as schema from '../../schema/Project.json';

// const error = debug('app:post:error');
const log = debug('app:project');

const validator = new Validator();
export const project: Router = new Router();

project.post(
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

        ctx.io.to('animals').emit('animal', `Project "${project.name}" ist da! `);

        // ALL ABOVE THIS IS NEW
        ctx.status = 201;
        ctx.body = {
            ...ctx.body,
            project,
        };

        await next();
    },
);
