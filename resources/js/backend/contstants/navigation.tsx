export const navigation = [
    {
        title: 'Dashboard',
        icon: 'dashboard',
        href: '/',
    },
    {
        title: 'Content Management',
        icon: 'product-think',
        list: [
            {
                title: 'Blog Posts',
                href: '/blog',
            },
            {
                title: 'Drafts',
                href: '/blog/drafts',
                counter: 2,
            },
            {
                title: 'Certifications',
                href: '/certifications',
            },
            {
                title: 'Factory Gallery',
                href: '/gallery',
            },
        ],
    },
    {
        title: 'Customer Contacts',
        icon: 'profile',
        list: [
            {
                title: 'Contact List',
                href: '/contacts',
            },
            {
                title: 'New Inquiries',
                href: '/contacts/new',
                counter: 5, // Number of unprocessed contacts
            },
            {
                title: 'Newsletter Subscribers',
                href: '/newsletter',
            },
        ],
    },
    {
        title: 'Company Capabilities',
        icon: 'chart',
        list: [
            {
                title: 'Production Process',
                href: '/capabilities/process',
            },
            {
                title: 'Equipment',
                href: '/capabilities/equipment',
            },
            {
                title: 'Featured Projects',
                href: '/capabilities/projects',
            },
        ],
    },
    {
        title: 'Settings',
        icon: 'promote',
        list: [
            {
                title: 'Company Profile',
                href: '/settings/company-profile',
            },
            {
                title: 'User Management',
                href: '/settings/users',
            },
            {
                title: 'Email Configuration',
                href: '/settings/email-config',
            },
        ],
    },
];

export const navigationUser = [
    {
        title: 'My shop',
        icon: 'bag',
        href: '/shop',
    },
    {
        title: 'Edit profile',
        icon: 'edit-profile',
        href: '/settings',
    },
    {
        title: 'Analytics',
        icon: 'chart',
        href: '/customers',
    },
    {
        title: 'Affiliate center',
        icon: 'chain-think',
        href: '/affiliate-center',
    },
    {
        title: 'Explore creators',
        icon: 'grid',
        href: '/explore-creators',
    },
    {
        title: 'Upgrade to Pro',
        icon: 'star-fill',
        href: '/upgrade-to-pro',
    },
];
