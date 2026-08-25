#!/bin/bash

lines=0
words_count=0
characters=0

while read -r line; do
    ((lines++))

    read -ra words <<< "$line"
    ((words_count += ${#words[@]}))

    ((characters += ${#line}))
done < test.txt

echo "Total lines: $lines"
echo "Total words: $words_count"
echo "Total characters: $characters"
