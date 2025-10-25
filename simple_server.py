#!/usr/bin/env python3
"""
Simple HTTP server to serve the Shopsy application
Run with: python simple_server.py
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Configuration
PORT = 8000
HOST = 'localhost'

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

    def do_GET(self):
        # Serve index.html for all routes (SPA support)
        if self.path == '/' or not os.path.exists(self.path[1:]):
            self.path = '/index.html'
        return super().do_GET()

def main():
    # Change to the public directory
    os.chdir('public')
    
    # Create server
    with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
        print(f"🚀 Shopsy server is running!")
        print(f"📱 Access the app at: http://{HOST}:{PORT}")
        print(f"🌐 Open in browser: http://{HOST}:{PORT}")
        print(f"📁 Serving files from: {os.getcwd()}")
        print(f"⏹️  Press Ctrl+C to stop the server")
        
        # Try to open browser automatically
        try:
            webbrowser.open(f'http://{HOST}:{PORT}')
        except:
            pass
        
        # Start server
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print(f"\n⏹️  Server stopped. Thank you for using Shopsy!")

if __name__ == '__main__':
    main()
