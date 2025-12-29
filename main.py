from http.server import HTTPServer,SimpleHTTPRequestHandler


host_port = ('localhost',1336)

class MyHandler(SimpleHTTPRequestHandler):
    pass

httpd = HTTPServer(host_port,MyHandler)
httpd.serve_forever()