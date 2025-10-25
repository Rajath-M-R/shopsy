#!/bin/bash

echo "🚀 Starting Shopsy Server..."
echo ""
echo "Choose your server option:"
echo "1. Express.js Server (Port 3001)"
echo "2. Python HTTP Server (Port 8000)"
echo "3. Node.js Serve (Port 3000)"
echo "4. Exit"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "Starting Express.js server..."
        node server.js
        ;;
    2)
        echo "Starting Python HTTP server..."
        python3 simple_server.py
        ;;
    3)
        echo "Starting Node.js serve..."
        npx serve public -l 3000
        ;;
    4)
        echo "Goodbye!"
        exit 0
        ;;
    *)
        echo "Invalid choice. Please run the script again."
        exit 1
        ;;
esac
