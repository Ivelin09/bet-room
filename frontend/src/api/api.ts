
const host =
    process.env.NODE_ENV === 'production'
        ? ''
        : 'http://localhost:4000/api/v1';

interface RequestOptions {
    method: string;
    headers: {
        'Access-Control-Allow-Origin': string;
        'content-type'?: string;
        'x-authorization'?: string;
    };
    body?: string;
}

const request = async (
    method: string,
    url: string,
    data?: any
): Promise<any> => {
    const options: RequestOptions = {
        method,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    };

    if (data) {
        options.headers['content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if (localStorage['x-authorization']) {
        const token = localStorage['x-authorization'];
        options.headers['x-authorization'] = token;
    }

    try {
        const res = await fetch(host + url, options);
        const responseData = await res.json();

        if (!res.ok) {
            throw new Error(responseData.message);
        }

        if (res.status === 401) {
            localStorage.removeItem('access_info');
        }

        return responseData;
    } catch (error: any) {
        throw new Error(error.message);
    }
};

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const patch = request.bind(null, 'PATCH');
const del = request.bind(null, 'DELETE');

export { get, post, put, patch, del };
