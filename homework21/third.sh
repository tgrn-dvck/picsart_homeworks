#!/bin/bash


while true; do
    echo "1. Check network"
    echo "2. View processes"
    echo "3. Exit"

    read -p "Enter choice: " choice

    case "$choice" in
        1)
            echo "Network is ok"
            ;;
        2)
            echo "Processes are normal"
            ;;
        3)
            echo "Exiting..."
            break
            ;;
        *)
            echo "Invalid output"
            ;;
    esac
done

