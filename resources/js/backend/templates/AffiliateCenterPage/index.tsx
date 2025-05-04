"use client";

import Insights from "./Insights";
import Performance from "./Performance";
import CampaignEarning from "./CampaignEarning";
import CreateLink from "./CreateLink";
import Layout from "@/backend/components/Layout";
import PopularProducts from "@/backend/components/PopularProducts";
import { popularProducts } from "@/backend/mocks/products";
import ProductView from "@/backend/components/ProductView";



const AffiliateCenterPage = () => {
    return (
        <Layout title="Affiliate center">
            <Insights />
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Performance />
                    <CampaignEarning />
                </div>
                <div className="col-right">
                    <CreateLink />
                    <PopularProducts
                        title="Popular products"
                        items={popularProducts}
                    />
                    <ProductView />
                </div>
            </div>
        </Layout>
    );
};

export default AffiliateCenterPage;
