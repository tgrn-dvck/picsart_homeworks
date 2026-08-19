#!/bin/bash

while true; do
    read -p "Enter email: " email

    if [[ "$email" =~ ^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$ ]]; then
        echo "Valid email address."
        break
    else
        echo "Invalid email address. Please try again."
    fi
done

