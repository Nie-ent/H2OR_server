import createHttpError from 'http-errors';

export const notFoundMiddleware = () => {
    throw new createHttpError.NotFound('Route not found');
};
