import { SynthUtils, expect as expectCDK, haveResource } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'
import * as AwsSetup from '../lib/aws-setup-stack'

describe('AwsSetupStack', () => {
  const EMAIL = 'test@example.com'

  beforeAll(() => {
    process.env.EMAIL = EMAIL
  })

  test('matches snapshot', () => {
    const app = new cdk.App()
    const stack = new AwsSetup.AwsSetupStack(app, 'MyTestStack')
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot()
  })

  test('BillingAlert', () => {
    const app = new cdk.App()
    const stack = new AwsSetup.AwsSetupStack(app, 'MyTestStack')
    const AMOUNT = 50

    expectCDK(stack).to(
      haveResource('AWS::SNS::Subscription', {
        Endpoint: EMAIL
      })
    )

    expectCDK(stack).to(
      haveResource('AWS::CloudWatch::Alarm', {
        Threshold: AMOUNT
      })
    )
  })
})
