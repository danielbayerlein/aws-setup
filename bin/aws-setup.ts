#!/usr/bin/env node
import * as cdk from '@aws-cdk/core'
import { AwsSetupStack } from '../lib/aws-setup-stack'

const app = new cdk.App()
new AwsSetupStack(app, 'AwsSetupStack')
