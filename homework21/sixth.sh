#!/bin/bash

stop_process() {
    pid=$(pgrep "$1")

    if [ -n "$pid" ]; then
        echo "Stopping process: $pid"
    else
        echo "Process not found"
    fi
}

stop_process "nginx"
