#!/bin/bash
cd /home/kavia/workspace/code-generation/privguard-ai-45591-adea22ca/privguard_ai
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

