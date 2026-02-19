import { Code2, Gamepad2, Zap } from 'lucide-react';

export const projectsData = [
  {
    title: 'The MST Game',
    subtitle: 'Gamified Mnemonic Similarity Task',
    description: 'In collaboration with the Stark Lab, we are gamifying the Mnemonic Similarity Task (MST) to revolutionize early Mild Cognitive Impairment (MCI) detection. Our UCI funded software transforms traditional clinical assessments into repeatable engaging digital experience. ',
    icon: Gamepad2,
    color: 'from-purple-600 to-purple-400',
    bgColor: 'bg-purple-50/50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-600',
    tags: ['Gamification', 'MCI Research', 'UX Design', 'Animation'],
    features: [
      'Repeatable imdempotent testing for MCI',
      'Graitfying reward and achievement system',
      'High definition graphics',
      'Scalable data storage with Amazon Web Services'
    ],
    stats: { participants: 400, researchers: 20, publications: 8, universities: 5 },
    status: 'Active',
  },
  {
    title: 'Paired Associate Task',
    subtitle: 'Interactive Cognitive Assessment Platform',
    description: 'We are developing the Paired Associate Task, a new memory-assessment for Simon Lab\'s HowRU app.The interactive task allows researchers to measure attention, memory encoding, and recall in children. Participants will given pairs of images and are asked to identify a relevant image.',
    icon: Code2,
    color: 'from-blue-600 to-blue-400',
    bgColor: 'bg-blue-50/50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-600',
    tags: ['Cognitive Assessment', 'Memory Research', 'React', 'TypeScript'],
    features: [
      'Integrated solution in pre-existing platform',
      'Export ready data collection',
      'Interactive gameplay',
    ],
    stats: { participants: 250, researchers: 15, publications: 5, universities: 3 },
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
      'Real time data collection',
      'Portable software across all devices',
    ],
    stats: { participants: 180, researchers: 12, publications: 4, universities: 4 },
    status: 'Active',
  },
];