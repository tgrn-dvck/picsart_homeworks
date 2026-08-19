#!/bin/bash

ips=("1.1.1.1" "8.8.8.8" "1.1.1.1" "10.0.0.1")

declare -A counts

for ip in "${ips[@]}";do    
    counts[$ip]=$((counts[$ip]+1))
done

for ip in "${!counts[@]}";do
    echo "$ip: ${counts[$ip]}"
done


