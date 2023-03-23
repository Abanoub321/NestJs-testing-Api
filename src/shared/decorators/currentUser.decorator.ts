import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import Users from '../../database/Entity/User.entity';

export const CurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    }
)