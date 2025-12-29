const http = require('http');
const url = require('url');


function parseRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            try {
                resolve(JSON.parse(body || '{}'));
            } catch (error) {
                resolve(body || '{}')
            }
        });
        req.on('error', (error) => {
            reject(error);
        });
    });
}


const routes = {};


function addRoute(method, path, handler) {
    if (!routes[method]) {
        routes[method] = {};
    }
    routes[method][path] = handler;
}


async function handleRequest(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method.toUpperCase();
    const query = parsedUrl.query;
    let body = {}

    if(method !== "GET") {
        try{
          body = await parseRequestBody(req);
        }
        catch (error){
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Invalid request body' }));
            return;
        }
    }


    
    if (routes[method] && routes[method][pathname]) {
        const handler = routes[method][pathname];
        try {
            
            handler(req, res, body, query);
        } catch (error) {
            
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Internal server error' }));
            console.error(error);
        }
    } else {
        
        res.statusCode = 404;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Not found' }));
    }
}


const server = http.createServer(handleRequest);

// get
function get(path, handler) {
    addRoute('GET', path, handler);
}

// post
function post(path, handler) {
    addRoute('POST', path, handler);
}

// Имитация use
function use(handler) {
    // add logic midlware
    for (const method in routes){
        for (const route in routes[method]){
            const originalHandler = routes[method][route]
            routes[method][route] = (req,res,body,query) => {
              handler(req,res,body,query,originalHandler);
            };
        }
    }
}

// export
module.exports = {
    server,
    get,
    post,
    use,
};