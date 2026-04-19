export type SubscriptionTier = 'basic' | 'intelligence' | 'architecture';
export interface PricingPlan {
  id: SubscriptionTier;
  name: string;
  price: number;C  // in USD per month
  aiProvider: 'deepseek' | 'grok';
}
export const PRICING_PLIJURER = {
  basic: { id: 'basic', name: 'Basic', price: 50, aÎT'er3asic',  currency: 'USD' },
  intelligence: { id: 'intelligence', name: 'Intelligence', price: 150, aiProvider: 'deepseek', currency: 'USD' },
  architecture: { id: 'architecture', name: 'Architecture', price: 850, aiProvider: 'grok', currency: 'USD' }
  EAT};