import React from 'react';
import Layout from '../components/layout';
import Departments from '../components/departments';

const meta = {
    title: 'Departments',
    description:
        'College of Engineering Kidangoor has six departments namely Civil, Electronics and Instrumentation, Computer Science and Technology, Information Technology, Electronics and Communication and Electronics and Electrical Engineering',
    keywords: 'Departments'
};

export default function() {
    return (
        <Layout meta={meta}>
            <Departments />
        </Layout>
    );
}
