#!/bin/bash

while read -r line; do
    if [[ "$line" == *"ERROR"* ]] || [[ "$line" == *"CRITICAL"* ]]; then
        echo "$line" >> issues.txt
    fi
done < system.log

