import React, { useState } from 'react';
import { X, Star, Crown, Gift, Zap, Users } from 'lucide-react';
import { VipMember } from '@/types';

interface VipProgramProps {
  isOpen: boolean;
  onClose: () => void;
}

const VipProgram: React.FC<VipProgramProps> = ({ isOpen, onClose }) => {
  const [currentMember] = useState<VipMember>({
    id: '1',
    name: 'Demo User',
    email: 'demo@experimente.store',
    points: 2500,
    tier: 'Silver',
    joinDate: '2024-01-15'
  });

  const tierBenefits = {
    Bronze: {
      icon: <Star className="w-6 h-6" />,
      color: 'from-amber-600 to-amber-700',
      benefits: ['5% discount on all orders', 'Early access to sales', 'Birthday special offer'],
      pointsRequired: 0
    },
    Silver: {
      icon: <Crown className="w-6 h-6" />,
      color: 'from-gray-400 to-gray-600',
      benefits: ['10% discount on all orders', 'Free shipping', 'Exclusive Silver member events', 'Priority customer support'],
      pointsRequired: 1000
    },
    Gold: {
      icon: <Gift className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-600',
      benefits: ['15% discount on all orders', 'Free express shipping', 'Monthly exclusive merchandise', 'Personal shopping assistant', 'Meet & greet opportunities'],
      pointsRequired: 5000
    },
    Platinum: {
      icon: <Zap className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      benefits: ['20% discount on all orders', 'Free worldwide shipping', 'Limited edition items access', 'Backstage passes to concerts', 'Personal stylist consultation', 'VIP customer hotline'],
      pointsRequired: 10000
    }
  };

  const nextTier = currentMember.tier === 'Bronze' ? 'Silver' : 
                   currentMember.tier === 'Silver' ? 'Gold' : 
                   currentMember.tier === 'Gold' ? 'Platinum' : null;

  const nextTierPoints = nextTier ? tierBenefits[nextTier as keyof typeof tierBenefits].pointsRequired : 0;
  const pointsToNext = nextTier ? Math.max(0, nextTierPoints - currentMember.points) : 0;
  const progress = nextTier ? ((currentMember.points - tierBenefits[currentMember.tier as keyof typeof tierBenefits].pointsRequired) / (nextTierPoints - tierBenefits[currentMember.tier as keyof typeof tierBenefits].pointsRequired)) * 100 : 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-xl">
            <div className="flex items-center space-x-3">
              <Crown className="w-8 h-8" />
              <h2 className="text-2xl font-bold">VIP Loyalty Program</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Current Status */}
            <div className="bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Welcome back, {currentMember.name}!</h3>
                  <p className="text-gray-600">Member since {new Date(currentMember.joinDate).toLocaleDateString()}</p>
                </div>
                <div className={`p-3 rounded-full bg-gradient-to-r ${tierBenefits[currentMember.tier as keyof typeof tierBenefits].color} text-white`}>
                  {tierBenefits[currentMember.tier as keyof typeof tierBenefits].icon}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{currentMember.points.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Points</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600">{currentMember.tier}</div>
                  <div className="text-sm text-gray-600">Current Tier</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">
                    {nextTier ? pointsToNext.toLocaleString() : '0'}
                  </div>
                  <div className="text-sm text-gray-600">
                    {nextTier ? `Points to ${nextTier}` : 'Max Tier Reached!'}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              {nextTier && (
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{currentMember.tier}</span>
                    <span>{nextTier}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Tier Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-2" />
                VIP Tiers & Benefits
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(tierBenefits).map(([tier, info]) => (
                  <div 
                    key={tier}
                    className={`p-6 rounded-xl border-2 ${
                      currentMember.tier === tier 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-200 bg-white'
                    } hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">{tier}</h4>
                      <div className={`p-2 rounded-full bg-gradient-to-r ${info.color} text-white`}>
                        {info.icon}
                      </div>
                    </div>
                    
                    <div className="text-sm text-purple-600 font-medium mb-3">
                      {info.pointsRequired === 0 ? 'Starting tier' : `${info.pointsRequired.toLocaleString()} points`}
                    </div>
                    
                    <ul className="space-y-2">
                      {info.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <Star className="w-3 h-3 text-purple-400 mt-1 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Earn Points */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How to Earn Points</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Shopping</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 1 point per $1 spent</li>
                    <li>• Double points on pre-orders</li>
                    <li>• Triple points on limited editions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Engagement</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 100 points for product reviews</li>
                    <li>• 50 points for social media shares</li>
                    <li>• 200 points on your birthday</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipProgram;