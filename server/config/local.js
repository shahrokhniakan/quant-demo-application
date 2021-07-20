export default {
  name: 'overledger-demo-application-backend',
  server: {
    port: 8081,
  },
  envFilePassword: 'password',
  userPoolId: 'us-east-1_xfjNg5Nv9',
  provider: {
    network: 'https://auth.overledger.io/'
  },
};
