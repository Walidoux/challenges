#!/bin/bash

total=0
compressed=0
uncompressed=0
default_compression=0
zlib_compression=0
lzma_compression=0

# recusively determine SWF types and count them in cwd

for file in *.swf
do
  ((total++))

  # weither file is compressed with the help of SWF format signature
  if head -c 3 "$file" | grep -q "FWS\|CWS\|ZWS"; then
    ((compressed++))

    if head -c 3 "$file" | grep -q "CWS"; then
      ((zlib_compression++))
    elif head -c 3 "$file" | grep -q "ZWS"; then
      ((lzma_compression++))
    else
      ((default_compression++))
    fi
  else
    ((uncompressed++))
    echo "$file is not compressed"
  fi
done

echo "Total SWF files: $total"
echo "Compressed files: $compressed"
echo "Uncompressed files: $uncompressed"
echo "Default compression: $default_compression"
echo "Zlib compression: $zlib_compression"
echo "LZMA compression: $lzma_compression"