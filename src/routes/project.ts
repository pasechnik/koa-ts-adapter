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
    async (ctx: Context, next: Next): Promise<Context> => {
        // validate the incoming request
        //   - return early if invalid
        // save the new game to storage
        // get all the games we know about

        // ALL BELOW THIS IS NEW
        log('Request: ', ctx.request.body);
        // message.name = ctx.request.body.name || '';

        const validatorResult: ValidatorResult = validator.validate(ctx.request.body, schema);
        log(`message is ${validatorResult.valid ? '' : 'NOT '}valid`);

        // const errors = await validate(message, validatorOptions);

        if (!validatorResult.valid) {
            ctx.status = 400;
            ctx.body = {
                status: 'error',
                data: validatorResult.errors,
            };

            return ctx;
        }

        const project: Project = ctx.request.body;

        // ALL ABOVE THIS IS NEW
        ctx.status = 201;
        ctx.body = {
            ...ctx.body,
            project,
        };

        await next();

        return ctx;
    },
);
