"use client";

import Layout from "@/backend/components/Layout";
import RefundRequests from "@/backend/components/RefundRequests";
import PopularProducts from "@/backend/components/PopularProducts";
import Balance from "./Balance";
import RecentEarnings from "./RecentEarnings";
import Transactions from "./Transactions";
import Countries from "./Countries";

import { popularProducts } from "@/backend/mocks/products";

const EarningPage = () => {
    return (
        <Layout title="Earning">
            <div className="flex max-lg:block">
                <div className="col-left">
                    <Balance />
                    <RecentEarnings />
                    <Transactions />
                </div>
                <div className="col-right">
                    <Countries />
                    <RefundRequests />
                    <PopularProducts
                        title="Top-earning products"
                        items={popularProducts}
                    />
                </div>
            </div>
        </Layout>
    );
};

export default EarningPage;
