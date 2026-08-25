#!/bin/bash

factorial() {
    n=$1

    if [ "$n" -le 1 ]; then
        echo 1
    else
        result=$(factorial $((n - 1)))
        echo $((n * result))
    fi
}

factorial "$1"
