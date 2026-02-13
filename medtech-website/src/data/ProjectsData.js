import { Code2, Gamepad2, Zap } from 'lucide-react';

export const projectsData = [
  {
    title: 'Paired Associate Task',
    subtitle: 'Interactive Cognitive Assessment Platform',
    description: 'In this game, participants will given pairs of images to study. After studying, one image will appear and the participants needs to find the associated image. This task is designed to assess memory and learning capabilities. We are collaborating with the Simon Lab at UCI to integrate this feature into their HowRU app for cognitive assessment in children.',
    icon: Code2,
    color: 'from-blue-600 to-blue-400',
    bgColor: 'bg-blue-50/50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    tags: ['Cognitive Assessment', 'Memory Research', 'React', 'TypeScript'],
    features: [
      'Real-time performance tracking',
      'Customizable stimulus pairs',
      'Advanced analytics dashboard',
      'Export capabilities for research data'
    ],
    stats: { participants: 250, researchers: 15, publications: 5, universities: 3 },
    status: 'Active',
  },
  {
    title: 'The MST Game',
    subtitle: 'Gamified Mnemonic Similarity Task',
    description: 'A gamified version of the Mnemonic Similarity Task that transforms traditional Alzheimer\'s detection into an engaging experience while maintaining scientific rigor through game mechanics and rewards.',
    icon: Gamepad2,
    color: 'from-purple-600 to-purple-400',
    bgColor: 'bg-purple-50/50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    tags: ['Gamification', 'Alzheimer\'s Research', 'UX Design', 'Animation'],
    features: [
      'Progressive difficulty scaling',
      'Reward and achievement system',
      'Visual feedback and animations',
      'Age-appropriate interface modes'
    ],
    stats: { participants: 400, researchers: 20, publications: 8, universities: 5 },
    status: 'Active',
  },
  {
    title: 'SwitchItUp',
    subtitle: 'Cognitive Flexibility Assessment Tool',
    description: 'An innovative cognitive flexibility assessment platform that evaluates task-switching abilities and executive function through dynamic task-switching paradigms.',
    icon: Zap,
    color: 'from-cyan-600 to-cyan-400',
    bgColor: 'bg-cyan-50/50',
    borderColor: 'border-cyan-200',
    textColor: 'text-cyan-600',
    tags: ['Executive Function', 'Cognitive Flexibility', 'Web App', 'Data Visualization'],
    features: [
      'Multi-paradigm task switching',
      'Response time analytics',
      'Adaptive difficulty algorithms',
      'Comprehensive reporting system'
    ],
    stats: { participants: 180, researchers: 12, publications: 4, universities: 4 },
    status: 'Active',
  },
];