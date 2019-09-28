/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'College of Engineering, Kidangoor',
        logo: '/images/logo.png',
        siteUrl: 'https://www.ce-kgr.org/',
        mobLogo: '/images/moblogo.png',
        description:
            ' College of Engineering, Kidangoor (CEK), Kottayam is one among the premier institutions in the state. The college is governed by the Co-operative Academy of Professional Education established by the Government of Kerala. The admissions are based on the rank obtained by the students in the State Entrance examinations and functioning of the college is according to the rules and regulations formulated by the Government of Kerala. Now the institution is glistening with outstanding records in both academic and extracurricular fields backed by excellent faculty and full-fledged facilities.',
        currentPlacementYear: 2019,
        navLinks: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'About Us',
                link: '/about',
                children: [
                    {
                        name: 'The College',
                        link: '/about/the-college'
                    },
                    {
                        name: 'The Principal',
                        link: '/about/the-principal'
                    },
                    {
                        name: 'CAPE',
                        link: '/about/cape'
                    },

                    {
                        name: 'HOD',
                        link: '/about/hod'
                    }
                ]
            },
            {
                name: 'Research',
                link: '/research',
                children: [
                    {
                        name: 'Projects',
                        link: '/research/projects'
                    },
                    {
                        name: 'Publications',
                        link: '/research/publications'
                    }
                ]
            },
            {
                name: 'Academics',
                link: '/academics',
                children: [
                    {
                        name: 'Admissions',
                        link: '/academics/admission'
                    },
                    {
                        name: 'UG Programme',
                        link: '/academics/ugprogramme'
                    },
                    {
                        name: 'PG Programme',
                        link: '/academics/pgprogramme'
                    },
                    {
                        name: 'Syllabus',
                        link:
                            'https://ktu.edu.in/eu/acd/academicRegulation.htm?=d%2FoY2W6v3%2FgC8nqDvJQEH%2FPo1Vgvv0tN%2Be4eMVkD6M8GrmcoIlMugwKVVJWmeG8H'
                    },
                    {
                        name: 'IQAC',
                        link: '/academics/iqac'
                    },
                    {
                        name: 'Academic Calender',
                          link: '/academics/academicalender'
                    }
                ]
            },
            {
                name: 'Departments',
                link: '/departments',
                children: [
                    {
                        name: 'Civil Engineering',
                        link: '/departments/civil-engineering'
                    },
                    {
                        name: 'Electrical & Electronics Engineering',
                        link:
                            '/departments/electrical-and-electronics-engineering/'
                    },
                    {
                        name: 'Electronics & Instrumentation Engineering',
                        link:
                            '/departments/electronics-and-instrumentation-engineering'
                    },
                    {
                        name: 'Electronics & Communication Engineering',
                        link:
                            '/departments/electronics-and-communication-engineering'
                    },
                    {
                        name: 'Computer Science Engineering',
                        link: '/departments/computer-science-and-engineering'
                    },
                    {
                        name: 'Information Technology',
                        link: '/departments/information-technology'
                    },
                    {
                        name: 'Humanities and Science',
                        link: '/departments/applied-science-and-humanities'
                    }
                ]
            },
            {
                name: 'Facilities',
                link: '/facilities',
                children: [
                    {
                        name: 'Central Computer Facility',
                        link: '/facilities/ccf'
                    },
                    {
                        name: 'Library',
                        link: '/facilities/library'
                    },
                    {
                        name: 'Office',
                        link: '/facilities/office'
                    },
                    {
                        name: 'Transport',
                        link: '/facilities/transport'
                    },
                    {
                        name: 'Hostel',
                        link: '/facilities/hostel'
                    },
                    {
                        name: 'Other',
                        link: '/facilities/other'
                    }
                ]
            },
            {
                name: 'Placement',
                link: '/placement'
            },
            {
                name: 'Contact',
                link: '/contact'
            }
        ]
    },
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1080
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/data`
            }
        },
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-yaml`,
        `gatsby-plugin-less`
    ]
};
