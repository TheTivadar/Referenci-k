import Stripe from 'stripe';

export const stripe = new Stripe(
'sk_test_51NPO6pHndPwFL0XeRi4bitGakQEc0ecF5dJDalDuFNXsDPL1w3MasmdO0oz3zlfleUAniALadBhjjLRa2hH1Wmd800xtaEMMFH',
  {
    apiVersion: '2024-09-30.acacia',
    typescript: true,
  }
);