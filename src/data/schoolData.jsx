// High-fidelity generated assets
export const IMAGES = {
  heroCampus: '/src/assets/images/hero_school_campus_1790598104920.jpg',
  smartClass: '/src/assets/images/facility_smart_class_1790598117192.jpg',
  scienceLab: '/src/assets/images/facility_science_lab_1790598131040.jpg',
  sportsField: '/src/assets/images/facility_sports_field_1790598146321.jpg',
  libraryHall: '/src/assets/images/facility_library_hall_1790598159775.jpg',
  assemblyLife: '/src/assets/images/school_assembly_life_1790598637784.jpg',
  culturalFest: '/src/assets/images/school_cultural_fest_1790598654769.jpg',
  kidsActivity: '/src/assets/images/school_kids_activity_1790598669530.jpg',
  stemRobotics: '/src/assets/images/school_stem_robotics_1790598684053.jpg'
};

export const CAMPUS_GALLERY = [
  {
    id: 'gal-1',
    title: 'Morning Assembly & Student Community',
    category: 'Student Life',
    image: IMAGES.assemblyLife,
    caption: 'Disciplined morning assembly fostering unity, moral values, and collective leadership.'
  },
  {
    id: 'gal-2',
    title: 'Grand Main Academic Building & Lawns',
    category: 'Campus',
    image: IMAGES.heroCampus,
    caption: 'Expansive CBSE campus with modern architectural facilities and lush landscaped lawns.'
  },
  {
    id: 'gal-3',
    title: 'Annual Cultural Fest & Stage Performances',
    category: 'Events & Arts',
    image: IMAGES.culturalFest,
    caption: 'Vibrant stage celebrations nurturing music, classical dance, dramatics, and artistic expression.'
  },
  {
    id: 'gal-4',
    title: 'Pre-Primary Activity & Playroom',
    category: 'Student Life',
    image: IMAGES.kidsActivity,
    caption: 'Safe, stimulating environment for early sensory exploration and playful foundational learning.'
  },
  {
    id: 'gal-5',
    title: 'STEM Robotics & Computer Innovation Lab',
    category: 'Academics & Labs',
    image: IMAGES.stemRobotics,
    caption: 'Hands-on programming, robotic engineering kits, and interactive logic development.'
  },
  {
    id: 'gal-6',
    title: 'Hi-Tech 4K Smart Classroom',
    category: 'Academics & Labs',
    image: IMAGES.smartClass,
    caption: 'Digitally enhanced visual lessons on 75-inch touch panels with ergonomic study seating.'
  },
  {
    id: 'gal-7',
    title: 'Modern Science & STEM Laboratories',
    category: 'Academics & Labs',
    image: IMAGES.scienceLab,
    caption: 'State-of-the-art physics, chemistry, and biology research apparatus for empirical inquiry.'
  },
  {
    id: 'gal-8',
    title: 'Outdoor Athletics & Sports Arena',
    category: 'Sports',
    image: IMAGES.sportsField,
    caption: 'Full-size basketball courts, football grass turf, and cricket practice pitches.'
  },
  {
    id: 'gal-9',
    title: 'Enriched Knowledge & Reading Library',
    category: 'Campus',
    image: IMAGES.libraryHall,
    caption: 'Quiet academic reading sanctuary housing over 16,000+ curated volumes and research journals.'
  }
];

export const SCHOOL_INFO = {
  name: 'ABC Public School',
  subtitle: 'Premier CBSE Co-Educational Senior Secondary Institution',
  tagline: 'Excellence in Education • Shaping Character, Intellect & Future',
  established: 1998,
  affiliation: 'CBSE Affiliated • Code: 2130891 • Senior Secondary',
  address: 'Knowledge Park II, Institutional Area, New Delhi - 110001',
  phonePrimary: '+91 98765 43210',
  phoneSecondary: '+91 98765 01234',
  email: 'admissions@abcpublicschool.edu.in',
  officeHours: 'Monday – Saturday: 8:00 AM – 3:30 PM',
  principalName: 'Dr. Ramesh Chandra Sharma',
  principalQualification: 'Ph.D in Education, M.Sc (Physics), 25+ Years Experience',
  stats: [
    { label: 'Pass Rate in CBSE Boards', value: '100%' },
    { label: 'Years of Proven Pedagogy', value: '28+' },
    { label: 'Enrolled Young Minds', value: '1,850+' },
    { label: 'Qualified Mentors & Faculty', value: '72+' },
  ]
};

export const INITIAL_ENQUIRIES = [
  {
    id: 'ENQ-1001',
    parentName: 'Rajesh Kumar Verma',
    studentName: 'Aarav Verma',
    gradeSeeking: 'Class 6th to 8th (Middle)',
    phone: '9812345678',
    email: 'rajesh.verma@gmail.com',
    address: 'Sector 15, Block B, New Delhi',
    preferredTime: 'Morning (10 AM - 12 PM)',
    message: 'We are looking for admission in Class 6. Want to know about bus route for Sector 15 and curriculum details.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    status: 'new',
    notes: 'Parent asked about transport facility.'
  },
  {
    id: 'ENQ-1002',
    parentName: 'Sunita Sharma',
    studentName: 'Ananya Sharma',
    gradeSeeking: 'Class 11th / 12th (Science - PCM/PCB)',
    phone: '9876512345',
    email: 'sunita.sharma92@yahoo.com',
    address: 'Vasant Kunj, Plot 42',
    preferredTime: 'Evening (4 PM - 6 PM)',
    message: 'Need details for JEE/NEET integrated coaching with 11th Science stream and lab facilities.',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 1).toISOString(),
    status: 'contacted',
    notes: 'Called parent on Aug 8. Scheduled school campus visit.'
  },
  {
    id: 'ENQ-1003',
    parentName: 'Manoj Gupta',
    studentName: 'Priya Gupta',
    gradeSeeking: 'Nursery / Playgroup',
    phone: '9988776655',
    email: 'manojgupta.biz@gmail.com',
    address: 'Mayur Vihar Phase 1',
    preferredTime: 'Afternoon (1 PM - 3 PM)',
    message: 'Is playgroup/nursery seat available for academic year 2026-27? What is the minimum age criteria?',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    status: 'new',
    notes: ''
  }
];

export const ACADEMIC_PROGRAMS = [
  {
    id: 'prog-1',
    title: 'Pre-Primary Wing (Nursery & KG)',
    grades: 'Nursery, LKG, UKG',
    ageGroup: '3 to 5 Years',
    curriculum: 'Early Years Foundation & Play-Way',
    ratio: '1:15 Teacher-Student Ratio',
    description: 'Nurturing curiosity through interactive multisensory play, motor-skill development, phonics, and caring pastoral mentorship.',
    highlights: ['Montessori Equipment', 'Smart Activity Room', 'Phonics & Speech Training', 'Safe Indoor Play Atrium'],
    iconName: 'Baby'
  },
  {
    id: 'prog-2',
    title: 'Primary Wing (Classes 1st to 5th)',
    grades: 'Class 1st to 5th',
    ageGroup: '6 to 10 Years',
    curriculum: 'CBSE Foundation & Experiential Learning',
    ratio: '1:20 Teacher-Student Ratio',
    description: 'Strong academic foundation in Mathematics, Science, Languages, Environmental Studies, Digital Literacy, and Ethical Values.',
    highlights: ['Interactive Digital Smart Boards', 'Language Enrichment Lab', 'Junior STEM & Coding Basics', 'Art, Music & Yoga Periods'],
    iconName: 'BookOpen'
  },
  {
    id: 'prog-3',
    title: 'Middle Wing (Classes 6th to 8th)',
    grades: 'Class 6th to 8th',
    ageGroup: '11 to 13 Years',
    curriculum: 'CBSE Analytical & Experimental Pedagogy',
    ratio: '1:25 Teacher-Student Ratio',
    description: 'Transitioning to analytical inquiry, hands-on scientific experiments, social sciences, public speaking, and sports conditioning.',
    highlights: ['Specialized Science & Math Labs', 'Python & Robotics Workshops', 'Competitive Olympiad Coaching', 'Debate & Dramatics Society'],
    iconName: 'GraduationCap'
  },
  {
    id: 'prog-4',
    title: 'Senior Secondary (Classes 9th to 12th)',
    grades: 'Class 9th to 12th',
    ageGroup: '14 to 18 Years',
    curriculum: 'CBSE Board with Specialized Streams',
    ratio: '1:25 Teacher-Student Ratio',
    description: 'Rigorous CBSE curriculum with dedicated streams: Science (PCM/PCB), Commerce, and Humanities with integrated entrance guidance.',
    highlights: ['Integrated JEE / NEET Guidance', 'Advanced Commerce & Economics Lab', 'Dedicated Career Guidance Cell', '100% Board First-Division Track'],
    iconName: 'Award'
  }
];

export const FACILITIES = [
  {
    id: 'fac-1',
    title: 'Hi-Tech Smart Classrooms',
    category: 'Academics',
    description: 'Equipped with 75-inch 4K interactive digital touchscreen panels, ergonomic seating, and high-speed campus fiber Wi-Fi.',
    image: IMAGES.smartClass,
    iconName: 'Monitor',
    features: ['4K Interactive Touch Panels', 'Acoustic Sound Treatment', 'Air-Filtered Climate Control']
  },
  {
    id: 'fac-2',
    title: 'Modern Science & STEM Research Labs',
    category: 'Innovation',
    description: 'Separate Physics, Chemistry, Biology, and Robotics laboratories with precision instruments for practical inquiry.',
    image: IMAGES.scienceLab,
    iconName: 'FlaskConical',
    features: ['Digital Microscopes & Sensors', 'Safety Fume Hoods & First Aid', 'Robotics & 3D Prototyping']
  },
  {
    id: 'fac-3',
    title: 'Athletic Sports & Fitness Arena',
    category: 'Sports',
    description: 'Full-size basketball court, cricket net pitches, badminton arenas, 200m athletic track, and indoor games auditorium.',
    image: IMAGES.sportsField,
    iconName: 'Trophy',
    features: ['FIBA-Standard Basketball Court', 'Cricket Turf Practice Nets', 'Dedicated Certified NIS Coaches']
  },
  {
    id: 'fac-4',
    title: 'Enriched Knowledge & Digital Library',
    category: 'Academics',
    description: 'Over 16,000+ curated volumes, international periodicals, academic research journals, and digital e-reader terminals.',
    image: IMAGES.libraryHall,
    iconName: 'Library',
    features: ['16,000+ Physical Titles', 'Quiet Study Reading Pods', 'Subscription to National Journals']
  },
  {
    id: 'fac-5',
    title: 'GPS-Tracked Safe Transport Fleet',
    category: 'Safety',
    description: 'Fleet of 22 modern air-conditioned buses covering all major National Capital Region routes with female attendants and speed governors.',
    image: IMAGES.heroCampus,
    iconName: 'Bus',
    features: ['Real-Time GPS Parent Tracking App', 'CCTV Cameras on All Buses', 'Female Conductors & Verified Drivers']
  },
  {
    id: 'fac-6',
    title: '24/7 Security & Medical Health Center',
    category: 'Safety',
    description: 'Gated access with 120+ CCTV surveillance cameras, biometric attendance check-in, and an on-campus nurse infirmary.',
    image: IMAGES.assemblyLife,
    iconName: 'ShieldCheck',
    features: ['120+ High-Definition CCTVs', 'Full-time Resident Qualified Nurse', 'Doctor-on-Call & Ambulance Link']
  }
];

export const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Online Enquiry & Registration',
    desc: 'Fill out our streamlined online admission enquiry form with student and parent details. Receive your unique Enquiry ID instantly.'
  },
  {
    step: '02',
    title: 'Campus Tour & Counseling',
    desc: 'Visit our campus for an interactive orientation and guided tour of classrooms, science labs, and sports facilities with our academic counselors.'
  },
  {
    step: '03',
    title: 'Assessment & Interaction',
    desc: 'A friendly, informal aptitude interaction designed to understand the child’s learning interests and foundational readiness.'
  },
  {
    step: '04',
    title: 'Document Verification & Enrollment',
    desc: 'Submit birth certificate, transfer certificate (TC), photographs, and secure the seat with official student enrollment kit.'
  }
];

export const NOTICES = [
  {
    id: 'not-1',
    title: 'Admissions Open for Session 2026-27 (Nursery to Class XI)',
    date: 'August 12, 2026',
    category: 'Admission',
    description: 'Online registration and prospectus downloads are now live. Early-bird registration forms available for Nursery & Grade 1.',
    isImportant: true,
    fileSize: '1.2 MB'
  },
  {
    id: 'not-2',
    title: 'Annual Inter-School STEM & Robotics Exhibition 2026',
    date: 'August 08, 2026',
    category: 'Event',
    description: 'Students from Classes 6 to 12 can showcase working science models. Top three winning teams represent school at State Science Conclave.',
    isImportant: false,
    fileSize: '850 KB'
  },
  {
    id: 'not-3',
    title: 'CBSE Term 1 Examination Date Sheet & Guidelines Released',
    date: 'August 04, 2026',
    category: 'Academics',
    description: 'Class 10th and 12th board aspirants can download the Term 1 examination schedule. Preparatory schedule begins next week.',
    isImportant: true,
    fileSize: '620 KB'
  },
  {
    id: 'not-4',
    title: 'Parent-Teacher Meeting (PTM) & Holistic Progress Review',
    date: 'July 28, 2026',
    category: 'Notice',
    description: 'Scheduled on Saturday from 8:30 AM to 1:00 PM. Parents can check individual time slots allotted in the parent portal.',
    isImportant: false,
    fileSize: '410 KB'
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    parentName: 'Alok Nath Pandey',
    studentClass: 'Parent of Harshita (Class 10th - Scored 98.4%)',
    content: 'The dedication of teachers at ABC Public School is unmatched. From conceptual foundation to personal exam mentoring, my daughter flourished in an encouraging, disciplined environment.',
    rating: 5
  },
  {
    id: 't-2',
    parentName: 'Dr. Meenakshi Sundaram',
    studentClass: 'Parent of Ishaan (Class 4th)',
    content: 'We relocated from Bangalore and were looking for a CBSE school that balances academic rigor with creative arts and sports. The smart classrooms and robotics labs exceeded our expectations.',
    rating: 5
  },
  {
    id: 't-3',
    parentName: 'Vikramjit Singh',
    studentClass: 'Parent of Gurpreet (Class 12th Commerce)',
    content: 'Excellent guidance by the commerce faculty. The career counseling cell helped him prepare for CUET and Delhi University admissions with clarity. Highly recommended school.',
    rating: 5
  }
];

export const FACULTY_LEADERS = [
  {
    name: 'Mrs. Sunita Bhattacharya',
    role: 'Vice Principal & Head of Academics',
    experience: '22+ Years in CBSE Curriculum',
    qualification: 'M.Ed, M.A. (English Literature)',
    bio: 'Oversees pedagogical standardisation, faculty development, and international school collaboration programs.'
  },
  {
    name: 'Mr. Arvind Saxena',
    role: 'Head of Senior Science & STEM',
    experience: '18+ Years Mentoring IIT/NEET Aspirants',
    qualification: 'M.Tech, B.Ed',
    bio: 'Led the school physics team to 3 National Science Olympiad gold medals and authored CBSE reference modules.'
  },
  {
    name: 'Mrs. Rohini Mehra',
    role: 'Head of Pre-Primary & Primary Wing',
    experience: '16+ Years in Early Childhood Pedagogy',
    qualification: 'B.Ed, Certified Montessori Specialist',
    bio: 'Specialist in phonics-based language acquisition, sensory-motor learning, and joyful early childhood development.'
  }
];
