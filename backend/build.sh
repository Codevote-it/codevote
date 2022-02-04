#!/bin/bash
sudo docker build -t eu.gcr.io/codevote/codevote-api .
# Configure docker to use Google authentication
gcloud auth configure-docker -q
sudo docker push eu.gcr.io/codevote/codevote-api
