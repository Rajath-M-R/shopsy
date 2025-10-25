@echo off
echo 🚀 Starting Shopsy Website Preview...
echo.
echo Choose your preview method:
echo 1. Open preview.html directly in browser
echo 2. Start Python HTTP server (Port 8000)
echo 3. Start Express.js server (Port 3001)
echo 4. Start Node.js serve (Port 3000)
echo 5. Exit
echo.
set /p choice="Enter your choice (1-5): "

if "%choice%"=="1" (
    echo Opening preview.html in your default browser...
    start preview.html
    echo ✅ Website opened in browser!
    echo 📱 You can now view the Shopsy website
) else if "%choice%"=="2" (
    echo Starting Python HTTP server...
    python simple_server.py
) else if "%choice%"=="3" (
    echo Starting Express.js server...
    node server.js
) else if "%choice%"=="4" (
    echo Starting Node.js serve...
    npx serve . -l 3000
) else if "%choice%"=="5" (
    echo Goodbye!
    exit
) else (
    echo Invalid choice. Please run the script again.
    pause
)
