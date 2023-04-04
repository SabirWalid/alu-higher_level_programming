#!/bin/bash

# Take the URL as the first argument to the script
url="$1"

# Send a request to the URL and store the response in a variable
response=$(curl -sI "$url")

# Use grep to extract the Content-Length header from the response
# and awk to extract the size of the body in bytes
size=$(echo "$response" | grep -i "Content-Length" | awk '{print $2}' | tr -d '\r')

# Display the size of the body in bytes
echo "Size of the body in bytes: $size"
