#!/bin/bash

read -p "Enter host: " host

ports=(22 80 443)

for port in "${ports[@]}"; do
    if (echo > /dev/tcp/"$host"/"$port") 2>/dev/null; then
        echo "Port $port is open"
    else
        echo "Port $port is closed"
    fi
done


