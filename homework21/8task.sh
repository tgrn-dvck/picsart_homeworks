#!/bin/bash

for file in *.bak; do
    if [ -f "$file" ]; then
        new_name="${file%.bak}.old"
        mv "$file" "$new_name"
    fi
done
