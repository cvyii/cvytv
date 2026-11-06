@echo off
cd /d "%~dp0"
echo CvyTV local test server
 echo.
echo Find the laptop IPv4 address below, then open http://YOUR-IP:8080 on the Hisense TV browser.
echo Keep this window open while testing. Press Ctrl+C to stop the server.
echo.
ipconfig
 echo.
py -m http.server 8080 --bind 0.0.0.0
pause
