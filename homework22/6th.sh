#!/bin/bash

declare -A hits

while read -r ip; do
    hits[$ip]=$(( hits[$ip] + 1 ))
done < access.log

for ip in "${!hits[@]}"; do
    if [ "${hits[$ip]}" -gt 3 ]; then
        echo "WARNING: $ip appeared ${hits[$ip]} times!"
    else
        echo "$ip: ${hits[$ip]} requests"
    fi
done
