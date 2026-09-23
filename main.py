from http.server import HTTPServer,SimpleHTTPRequestHandler

host_port = ("localhost", 1337)

class MyHandler(SimpleHTTPRequestHandler):
    pass

httpd = HTTPServer(host_port,MyHandler)
httpd.serve_forever()