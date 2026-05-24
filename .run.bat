@echo off
title Personal Website — Next.js Dev Server

echo ^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|
echo ^|  Personal Website — Next.js Dev Server          ^|
echo ^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|^|
echo.

if not exist "node_modules" (
    echo [^!] node_modules not found — installing...
    cmd /c npm install
    echo.
)

echo [*] Starting dev server...
cmd /c npm run dev
pause
