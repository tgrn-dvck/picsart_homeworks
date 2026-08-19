#!/bin/bash


files=("/etc/passwd" "/etc/hosts" "/etc/resolv.conf")

for file in "${files[@]}"; do
    if [ ! -e "$file" ] || [ ! -r "$file" ]; then
        echo "ALARM: $file does not exist or is not readable!"
    else
        echo "OK: $file exists and is readable."
    fi
done

