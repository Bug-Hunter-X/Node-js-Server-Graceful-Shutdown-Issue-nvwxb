# Node.js Server Graceful Shutdown Issue

This repository demonstrates a potential issue with graceful server shutdown in Node.js.  If there are pending asynchronous operations when `server.close()` is called, the server might not shut down completely, potentially leading to resource leaks.

## Bug Description

The provided `bug.js` file contains a simple HTTP server. However, it lacks proper handling for asynchronous operations during shutdown. This can lead to the server failing to exit completely, as there might be lingering operations preventing its termination.

## Solution

The `bugSolution.js` file provides a solution to address the issue.  It uses `server.on('close', ...)` to ensure that the server has fully stopped before exiting the process.  It also shows proper error handling.