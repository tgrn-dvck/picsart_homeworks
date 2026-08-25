#!/bin/bash

read -p "Enter filename: " file

if [ -f "$file" ]; then

    read -p "Enter word to search for: " word

    until grep -q "$word" "$file"; do
        echo "Word not found."
        read -p "Enter another word: " word
    done

    line=$(grep -n -m 1 "$word" "$file" | cut -d: -f1)

    echo "The word '$word' is on line $line of the file."

else
    echo "File does not exist."
fi
