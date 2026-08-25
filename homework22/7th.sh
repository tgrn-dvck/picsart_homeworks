#!/bin/bash

path="$1"

if [ -e "$path" ]; then
    read -p "Are you sure (yes/no)? " answer

    if [ "$answer" = "yes" ]; then
        rm -rf "$path"
        echo "$path has been deleted."
    else
        echo "Nothing was deleted."
    fi
else
    echo "File or directory does not exist."
fi