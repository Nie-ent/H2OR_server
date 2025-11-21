export const prismaErrorMiddleware = (err, req, res, next) => {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
            case 'P2002': {
                const target = err.meta?.target;
                const detail = Array.isArray(target)
                    ? target.join(', ')
                    : target.split('_').join(' ');
                return next(createHttpError.Conflict(`Duplicate value for ${detail}`));
            }
            default:
                return next(createHttpError.InternalServerError('Database error'));
        }
    }
    return next(err);
};
