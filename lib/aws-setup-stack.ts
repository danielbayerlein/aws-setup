import * as cdk from '@aws-cdk/core'
import { BillingAlert } from '@moralesl/billing-alert'
import 'dotenv/config'

export class AwsSetupStack extends cdk.Stack {
  constructor (scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    new BillingAlert(this, 'BillingAlert', {
      amount: 50,
      emails: [process.env.EMAIL!]
    })
  }
}
