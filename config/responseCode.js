const errorResponses = {
    METHOD_NOT_ALLOWED: {
        message: 'Method Not Allowed'
    },
    UNAUTHORIZED: {
        message: 'Unauthorized'
    },
    NOT_FOUND: {
        message: 'Not Found'
    },
    INTERNAL_SERVER_ERROR: {
        message: 'Internal Server Error'
    },
};
  
const errors = {
    METHOD_NOT_ALLOWED: 'METHOD_NOT_ALLOWED',
    UNAUTHORIZED: 'UNAUTHORIZED',
    NOT_FOUND: 'NOT_FOUND',
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
}

const getErrorResponse = (code) => {
    return errorResponses[code]
}

module.exports = {
    getErrorResponse,
    errors
}
