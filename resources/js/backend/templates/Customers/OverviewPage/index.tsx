"use client";


import Overview from "./Overview";
import TrafficСhannel from "./TrafficСhannel";
import ActiveTimes from "./ActiveTimes";
import ShareProducts from "./ShareProducts";
import RefundRequests from "./RefundRequests";
import Countries from "./Countries";
import Messages from "./Messages";
import { devicesChartData, devicesGenderData } from "@/backend/mocks/charts";
import Layout from "@/backend/components/Layout";
import CardChartPie from "@/backend/components/CardChartPie";

const OverviewPage = () => {
    return (
        <Layout title="Dashboard">
            <div className="flex max-lg:flex-col">
                <div className="col-left">
                    <Overview />
                    <TrafficСhannel />
                    <ActiveTimes />
                    <ShareProducts />
                </div>
                <div className="col-right">
                    <RefundRequests />
                    <CardChartPie title="Devices" data={devicesChartData} />
                    <Countries />
                    <Messages />
                    <CardChartPie title="Gender" data={devicesGenderData} />
                </div>
            </div>
        </Layout>
    );
};

export default OverviewPage;
