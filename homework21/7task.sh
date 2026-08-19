#!/bin/bash

encoded="THiS_iS_A_TExT"

decoded="${encoded//_/ }"
decoded="${decoded,,}"

echo "$decoded"
