import React, { Component } from 'react';
import Layout from '../components/Layout';

import TopSellingProducts from '../containers/TopSellingProducts';

export default class HomeScreen extends Component {
    render() {
        return (
            <Layout>
                <TopSellingProducts />
            </Layout>
        );
    }
}