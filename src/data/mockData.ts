import { ServiceItem, TrackingDetails, FAQItem, Testimonial, CompanyStat } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'express-parcel',
    title: 'MetroExpress',
    tagline: 'Rapid door-to-door courier service across major urban hubs.',
    description: 'Guaranteed rapid courier delivery for documents, personal parcels, and urgent items with real-time GPS tracking and instant delivery confirmation.',
    iconName: 'PackageCheck',
    features: ['Instant Dispatch within 20 mins', 'Live GPS Tracking & SMS Alerts', 'Proof of Delivery (Digital Signature)', 'Up to ₦1,000,000 Included Liability'],
    estimatedDeliveryTime: '2 - 6 Hours Local',
    startingPrice: '₦3,500',
    popularFor: 'Urgent documents, e-commerce orders, legal papers',
    badge: 'Most Popular',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'food-cold-chain',
    title: 'MetroMart',
    tagline: 'Temperature-controlled transport for perishables & catering.',
    description: 'Specialized insulated storage and refrigerated delivery for fresh groceries, hot meals, pharmaceuticals, and perishable goods.',
    iconName: 'ThermometerSnowflake',
    features: ['Active Thermal Sensors (-5°C to 18°C)', 'Food-Grade Sanitized Storage', 'Tamper-Evident Thermal Seals', 'Priority Direct Transport'],
    estimatedDeliveryTime: 'Under 2 Hours',
    startingPrice: '₦4,500',
    popularFor: 'Restaurants, grocery hubs, pharmaceutical supplies',
    badge: 'Climate Controlled',
    imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sme-logistics',
    title: 'MetroBiz',
    tagline: 'End-to-end fulfillment, inventory storage & merchant dispatch.',
    description: 'Tailored for growing businesses with bulk order processing, micro-warehousing, multi-stop drops, and seamless Shopify/WooCommerce API integration.',
    iconName: 'Building2',
    features: ['Dedicated Account Manager', 'Micro-Fulfillment Hub Access', 'Discounted Volume Rates', 'Custom Branded Packaging Options'],
    estimatedDeliveryTime: 'Same Day / Next Day',
    startingPrice: '₦2,500 / parcel (Bulk)',
    popularFor: 'Boutique retailers, online fashion, electronics merchants',
    badge: 'Enterprise Choice',
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80'
  },
  // {
  //   id: 'scheduled-pickups',
  //   title: 'Scheduled Pickups',
  //   tagline: 'Automated daily & weekly recurring route collection.',
  //   description: 'Never worry about daily drops again. Set automated pickup slots for your office or warehouse, and our dedicated fleet arrives on schedule.',
  //   iconName: 'CalendarClock',
  //   features: ['Fixed Daily / Weekly Time Slots', 'Automated Manifest Syncing', 'Dedicated Priority Rider Team', 'Monthly Consolidated Invoicing'],
  //   estimatedDeliveryTime: 'Custom Schedule',
  //   startingPrice: '₦15,000 / week',
  //   popularFor: 'Corporate offices, law firms, manufacturing centers',
  //   imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
  // },
  // {
  //   id: 'business-partnerships',
  //   title: 'Business Delivery Partnerships',
  //   tagline: 'Turnkey fleet outsourcing and long-term logistics agreements.',
  //   description: 'Scale your business operations without investing in vehicles. We provide fully branded, dedicated delivery fleets, drivers, and route optimization.',
  //   iconName: 'Handshake',
  //   features: ['Dedicated Branded Vans & Motorcycles', 'Advanced Route Planning AI', 'Strict SLA Guarantee (99.5%)', 'Dedicated Dispatch Coordinator'],
  //   estimatedDeliveryTime: 'SLA Custom Tailored',
  //   startingPrice: 'Custom Contract',
  //   popularFor: 'Supermarket chains, e-commerce giants, corporate distributors',
  //   badge: 'Custom Contract',
  //   imageUrl: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80'
  // },
  // {
  //   id: 'same-day-delivery',
  //   title: 'Same-Day City Express',
  //   tagline: 'Ultra-fast intraday urban delivery with guaranteed timelines.',
  //   description: 'When tomorrow is too late. Our high-density urban courier network moves across traffic bottlenecks using optimized motorbikes and light vans.',
  //   iconName: 'Zap',
  //   features: ['Guaranteed Under 3 Hours', 'Direct Point-to-Point Transit', 'Real-Time Driver Contact', 'Instant Digital Delivery Verification'],
  //   estimatedDeliveryTime: 'Under 3 Hours',
  //   startingPrice: '₦5,000',
  //   popularFor: 'High-priority contracts, emergency replacement parts, gifts',
  //   badge: 'Ultra Fast',
  //   imageUrl: 'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=800&q=80'
  // }
];

export const SAMPLE_TRACKINGS: Record<string, TrackingDetails> = {
  'MTL-884920': {
    trackingId: 'MTL-884920',
    senderName: 'Apex Electronics Tech Hub',
    recipientName: 'Victoria Island Innovations Ltd',
    origin: 'Lagos Mainland Logistics Hub',
    destination: 'Victoria Island, Lagos',
    currentStatus: 'Out for Delivery',
    estimatedDelivery: 'Today at 3:45 PM',
    weight: '3.4 kg',
    serviceType: 'Same-Day City Express',
    courierName: 'David O. (Rider #204)',
    courierPhone: '+234 802 112 8849',
    courierRating: 4.9,
    steps: [
      {
        status: 'Order Booked',
        location: 'Lagos Dispatch Hub',
        timestamp: 'Jul 27, 2026 - 08:30 AM',
        completed: true,
        description: 'Shipment manifest generated and assigned to Metro Rider.'
      },
      {
        status: 'Picked Up',
        location: 'Ikeja Industrial Zone',
        timestamp: 'Jul 27, 2026 - 10:15 AM',
        completed: true,
        description: 'Package inspected, barcoded, and secured in climate box.'
      },
      {
        status: 'In Transit',
        location: 'Third Mainland Transit Corridor',
        timestamp: 'Jul 27, 2026 - 12:40 PM',
        completed: true,
        description: 'Package scanned at Central Sorting Node #4.'
      },
      {
        status: 'Out for Delivery',
        location: 'Victoria Island Sector 2',
        timestamp: 'Jul 27, 2026 - 02:10 PM',
        completed: true,
        active: true,
        description: 'Courier David O. is en route to recipient address.'
      },
      {
        status: 'Delivered',
        location: 'Victoria Island, Lagos',
        timestamp: 'Estimated 03:45 PM',
        completed: false,
        description: 'Awaiting recipient signature and OTP code confirmation.'
      }
    ]
  },
  'MTL-992011': {
    trackingId: 'MTL-992011',
    senderName: 'Lumina Gourmet Bistro',
    recipientName: 'Sarah Jenkins',
    origin: 'Kilimani Central',
    destination: 'Westlands, Nairobi',
    currentStatus: 'Delivered',
    estimatedDelivery: 'Delivered Today at 1:12 PM',
    weight: '1.2 kg',
    serviceType: 'Food & Cold Chain Logistics',
    courierName: 'Emmanuel M. (Rider #109)',
    courierPhone: '+254 712 990 123',
    courierRating: 5.0,
    steps: [
      {
        status: 'Order Booked',
        location: 'Kilimani Kitchen',
        timestamp: 'Jul 27, 2026 - 11:45 AM',
        completed: true,
        description: 'Temperature seal verified.'
      },
      {
        status: 'Picked Up',
        location: 'Bistro Dispatch Bay',
        timestamp: 'Jul 27, 2026 - 12:05 PM',
        completed: true,
        description: 'Insulated thermal box locked.'
      },
      {
        status: 'In Transit',
        location: 'Ngong Road Express',
        timestamp: 'Jul 27, 2026 - 12:30 PM',
        completed: true,
        description: 'Direct courier route in progress.'
      },
      {
        status: 'Out for Delivery',
        location: 'Westlands Commercial Tower',
        timestamp: 'Jul 27, 2026 - 12:55 PM',
        completed: true,
        description: 'Driver at venue security gate.'
      },
      {
        status: 'Delivered',
        location: 'Westlands, Nairobi',
        timestamp: 'Jul 27, 2026 - 01:12 PM',
        completed: true,
        description: 'Received by recipient. Signature & photo proof logged.'
      }
    ]
  }
};

export const CITIES_LIST = [
  'Lagos', 'Abuja', 'Port Harcourt', 'Kano', 'Ibadan',
  'Nairobi', 'Mombasa', 'Accra', 'Kumasi', 'Johannesburg',
  'Cape Town', 'Kigali', 'Dar es Salaam'
];

export const COMPANY_STATS: CompanyStat[] = [
  {
    label: 'Deliveries Completed',
    value: 2850000,
    suffix: '+',
    description: 'Packages & freight units delivered on-time safely'
  },
  {
    label: 'Active Business Partners',
    value: 12400,
    suffix: '+',
    description: 'SMEs & corporate clients trusting our supply chain'
  },
  {
    label: 'Cities & Urban Hubs',
    value: 48,
    suffix: '',
    description: 'Metropolitan coverage across key commercial corridors'
  },
  {
    label: 'On-Time Delivery Rate',
    value: 99.4,
    suffix: '%',
    description: 'Monitored 24/7 via automated GPS routing intelligence'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Chidi Okonkwo',
    role: 'Head of Operations',
    company: 'PayPulse Commerce',
    category: 'E-commerce',
    quote: 'Switching our merchant fulfillment to Metro Transit Logistics reduced our package dispatch delay from 24 hours to under 3 hours. Their scheduled pickups and live API tracking changed how our customers rate us.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    location: 'Lagos, Nigeria'
  },
  {
    id: '2',
    name: 'Aminat Bello',
    role: 'Founder & CEO',
    company: 'GourmetFresh Organics',
    category: 'SME',
    quote: 'The Cold Chain delivery service from Metro Transit Logistics is second to none. Our organic groceries and meal kits arrive crisp, cold, and right on schedule every single day.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    location: 'Abuja, Nigeria'
  },
  {
    id: '3',
    name: 'David Wanjiku',
    role: 'Supply Chain Director',
    company: 'Apex Industrial Parts',
    category: 'Enterprise',
    quote: 'When industrial machinery needs emergency replacement parts, Metro Transit Logistics Same-Day Express delivers with absolute precision. Their drivers are disciplined, punctual, and highly professional.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    location: 'Nairobi, Kenya'
  },
  {
    id: '4',
    name: 'Kofi Mensah',
    role: 'Managing Partner',
    company: 'LegalSphere Chambers',
    category: 'Corporate',
    quote: 'We send high-priority confidential legal documentation daily. Metro Transit digital OTP verification and dedicated courier dispatch give us total peace of mind.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    location: 'Accra, Ghana'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How do I book a delivery with Metro Transit Logistics?',
    answer: 'Booking is effortless! You can request an instant quote right on our website, use our quick booking calculator, or register an enterprise SME account for automated API dispatch and scheduled daily pickups.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'What geographic areas and cities do you serve?',
    answer: 'Metro Transit Logistics operates across 48+ metropolitan cities including Lagos, Abuja, Port Harcourt, Nairobi, Mombasa, Accra, Johannesburg, and Kigali, connecting key business hubs and residential zones.'
  },
  {
    id: 'faq-3',
    category: 'Business & SMEs',
    question: 'Do you offer specialized delivery rates and credit terms for businesses?',
    answer: 'Yes! Our SME Business Partnership program offers volume-discounted rates (up to 35% savings), dedicated account managers, weekly consolidated invoicing, and priority rider allocation.'
  },
  {
    id: 'faq-4',
    category: 'Booking & Quotes',
    question: 'How much does delivery cost and how is it calculated?',
    answer: 'Pricing is transparently calculated based on parcel weight, package dimensions, pickup/drop-off distance, service tier (Express, Cold Chain, Standard), and any added value services like declared insurance.'
  },
  {
    id: 'faq-5',
    category: 'Tracking & Safety',
    question: 'How can I track my shipment in real time?',
    answer: 'Once your order is booked, you receive a unique tracking ID (e.g. MTL-884920). Enter this number in our top bar or Hero tracking widget to view live GPS location updates, driver phone contact, and digital proof of delivery.'
  },
  {
    id: 'faq-6',
    category: 'Tracking & Safety',
    question: 'Is my package insured against loss or damage?',
    answer: 'All Metro Transit Logistics standard shipments include built-in liability coverage up to ₦1,000,000. For high-value goods, electronics, or delicate cargo, you can opt for comprehensive declared-value insurance during quote creation.'
  },
  {
    id: 'faq-7',
    category: 'Booking & Quotes',
    question: 'What are your pickup hours and cutoff times?',
    answer: 'Our urban courier fleet operates 24/7. Same-Day Express orders placed before 3:00 PM are guaranteed for same-day delivery. Scheduled merchant pickups can be configured for morning or evening drops.'
  }
];
