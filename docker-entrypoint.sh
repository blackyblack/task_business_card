#!/bin/sh
set -eu

npm run db:prepare
exec node dist/src/main.js
