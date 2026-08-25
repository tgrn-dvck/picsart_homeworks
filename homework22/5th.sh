#!/bin/bash

urls=("https://google.com" "https://github.com" "https://facebook.com")

for url in "${urls[@]}"; do
    status=$(curl -s -o /dev/null -w "%{http_code}" "$url")
    echo "$url - HTTP status: $status"
done
