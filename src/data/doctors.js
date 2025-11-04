// In a real app, this would come from an API
export const allDoctors = [
  {
    id: 1,
    name: 'Dr. Anya Sharma',
    specialty: 'Cardiology',
    philosophy: 'My philosophy is to treat the whole patient, not just the heart. Compassionate, preventative care is the key to long-term health.',
    bio: 'Dr. Anya Sharma is a board-certified cardiologist with over 15 years of experience. She completed her residency at Mount Sinai Hospital and is a fellow of the American College of Cardiology. Her research in preventative cardiology has been published in several prestigious medical journals.',
    education: ['MD, Johns Hopkins University', 'Residency, Mount Sinai Hospital'],
    certifications: ['Board Certified in Cardiology', 'Board Certified in Internal Medicine'],
    insurance: ['BlueCross', 'Aetna', 'Cigna', 'UnitedHealthcare'],
    virtual: true,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea19c2b0?w=500'
  },
  {
    id: 2,
    name: 'Dr. Ben Carter',
    specialty: 'Orthopedics',
    philosophy: 'Movement is life. My goal is to use the latest minimally-invasive techniques to get you back to doing what you love, faster.',
    bio: 'Dr. Ben Carter is a leading orthopedic surgeon specializing in sports medicine and joint replacement. He is the head team physician for the city\'s professional soccer team and is renowned for his expertise in ACL reconstruction and robotic-assisted knee replacement.',
    education: ['MD, Stanford University', 'Residency, Rush University Medical Center'],
    certifications: ['Board Certified in Orthopedic Surgery', 'Sports Medicine Fellowship'],
    insurance: ['BlueCross', 'Aetna', 'Cigna', 'UnitedHealthcare'],
    virtual: false,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500'
  },
  // ... (the rest of your doctors from the array) ...
  {
    id: 3,
    name: 'Dr. Chloe Tan',
    specialty: 'Pediatrics',
    philosophy: 'Caring for children is a privilege. I partner with parents to create a fun, stress-free environment for happy, healthy kids.',
    bio: 'Dr. Tan is a beloved pediatrician known for her gentle demeanor and thorough approach. She has a special interest in childhood nutrition and developmental milestones, ensuring every child gets the best possible start in life.',
    education: ['MD, UCSF', 'Residency, Boston Children\'s Hospital'],
    certifications: ['Board Certified in Pediatrics'],
    insurance: ['BlueCross', 'Aetna', 'Cigna', 'UnitedHealthcare'],
    virtual: true,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500'
  },
  {
    id: 4,
    name: 'Dr. David Lee',
    specialty: 'Neurology',
    philosophy: 'The brain is complex, but my approach is simple: listen, test, and treat with compassion.',
    bio: 'Dr. David Lee specializes in treating complex neurological conditions, including epilepsy, Parkinson\'s disease, and stroke. He is actively involved in clinical trials for new migraine treatments.',
    education: ['MD, PhD, Yale University', 'Residency, Mass General Hospital'],
    certifications: ['Board Certified in Neurology'],
    insurance: ['BlueCross', 'Aetna', 'Cigna', 'UnitedHealthcare'],
    virtual: true,
    image: 'https://images.unsplash.com/photo-1537368910025-70035079f32d?w=500'
  },
  {
    id: 5,
    name: 'Dr. Emily White',
    specialty: 'Oncology',
    philosophy: 'Fighting cancer requires a team. I am your guide, your advocate, and your partner every step of the way.',
    bio: 'Dr. White is a medical oncologist with a focus on breast and lung cancer. She leads the hospital\'s survivorship program and is a strong proponent of integrating holistic wellness with traditional cancer therapies.',
    education: ['MD, Duke University', 'Fellowship, MD Anderson Cancer Center'],
    certifications: ['Board Certified in Oncology', 'Board Certified in Internal Medicine'],
    insurance: ['BlueCross', 'Aetna', 'Cigna', 'UnitedHealthcare'],
    virtual: false,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500'
  },
  {
    id: 6,
    name: 'Dr. Marcus Cole',
    specialty: 'Cardiology',
    philosophy: 'Preventative care is the key to long-term heart health. Let\'s build a plan together.',
    bio: 'Dr. Cole is an interventional cardiologist known for his skill in advanced, non-surgical procedures. He believes in empowering patients with knowledge to make informed decisions about their lifestyle and treatment.',
    education: ['MD, Columbia University', 'Fellowship, Cleveland Clinic'],
    certifications: ['Board Certified in Cardiology', 'Interventional Cardiology'],
    insurance: ['BlueCross', 'Aetna', 'Cigna', 'UnitedHealthcare'],
    virtual: true,
    image: 'https://plus.unsplash.com/premium_photo-1661759750054-d54030d10b00?w=500'
  },
];

// Get a unique list of specialties for the dropdown
export const specialties = [...new Set(allDoctors.map(doc => doc.specialty))];