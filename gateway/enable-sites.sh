#!/bin/sh
rm -rf /etc/nginx/sites-enabled/*
mkdir -p /etc/nginx/sites-enabled/
cp /etc/nginx/servers/$ENVIRONMENT.conf /etc/nginx/sites-enabled/

