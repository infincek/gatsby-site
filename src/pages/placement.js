import React from 'react';
import Layout from '../components/layout';
import PlacementList from '../components/placement-list';

const meta = {
    title: 'Placements',
    description:'',
    keywords: 'Departments'
};

export default function() {
    return (
        <Layout meta={meta}>
            <div className="section">
                <div className="container">
                    <div className="title">
                        <h2 className="underlined">Placements</h2>
                    </div>
                    <div className="contents">
                        <div className="row">
                            <PlacementList />
                        </div>
                    </div>
                </div>
                
            </div>
        </Layout>
    );
}
