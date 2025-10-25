@echo off
echo 🚀 Starting Shopsy Server...
echo.
echo Choose your server option:
echo 1. Express.js Server (Port 3001)
echo 2. Python HTTP Server (Port 8000)
echo 3. Node.js Serve (Port 3000)
echo 4. Exit
echo.
set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" (
    echo Starting Express.js server...
    node server.js
) else if "%choice%"=="2" (
    echo Starting Python HTTP server...
    python simple_server.py
) else if "%choice%"=="3" (
    echo Starting Node.js serve...
    npx serve public -l 3000
) else if "%choice%"=="4" (
    echo Goodbye!
    exit
) else (
    echo Invalid choice. Please run the script again.
    pause
)
