#!/usr/bin/env python
import http.server

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_my_headers()
        http.server.SimpleHTTPRequestHandler.end_headers(self)

    def send_my_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
    
    def do_GET(self):
        if self.path.startswith("/app") or self.path.startswith("/bower") or self.path.startswith("/public"):
            None
        elif self.path == "/route-dict.json":
            None
        else:
            self.path = "/main.html"
        http.server.SimpleHTTPRequestHandler.do_GET(self)
        


if __name__ == '__main__':
    http.server.test(HandlerClass=MyHTTPRequestHandler)