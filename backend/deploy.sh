#!/bin/bash
export ENV_VARS=$(paste -sd, .env)
gcloud run deploy codevote-api \
            --image "eu.gcr.io/codevote/codevote-api:latest" \
            --region "europe-west1" \
            --platform "managed" \
            --allow-unauthenticated \
            --memory=256MiB \
            --project=codevote \
            --set-env-vars=$ENV_VARS
