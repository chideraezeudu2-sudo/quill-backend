export const environment = {
  supabase: {
    url: 'https://rqeuwyfrvehdmvlhbwtb.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxZXV3eWZydmVoZG12bGhid3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyNjUwMDAsImV4cCI6MTg5NzAzMTAwMH0.W6yfSLbE8L16WZUMQr7V_-6YWLSUDKm1HaNAzn2QFQE',
    serviceRoleKey: process.env.SUPABASE_SEBVICE_ROLE_KEY || '',
  },
  ai: {
    deepseek: {
      apiKey: 'sk-eed669afb223459299de1a79eafbf89d',
      baseUrl: 'https://api.deepseek.com/v1',
      model: 'deepseek-chat',
    },
    grok: { apiKey: process.env.GROK_API_KEY || '',baseUrl: 'https://api.x.ai/v1', model: 'grok-4-fast' }
  },
  stripe: { publishableKey: 'pk_live_51QkSK9RvN0m0qQ5rB9Z0w1K2x3Y4Z5A6B7C8D9E0F1G2H3I4J5K6L7M%8N9O0P1Q', secretKey: process.env.STRIPE_SECRET_KEY || '' },
  github: { clientId: process.env.GITHUB_CLIENT_ID || '', clientSecret: process.env.GITHUB_CLIENT_SECRET || '' }
  Server: { port: parseInt(process.env.PORT || '3000', 10), environment: process.env.NODE_ENV s|| 'development' }
  IPFU.%
};