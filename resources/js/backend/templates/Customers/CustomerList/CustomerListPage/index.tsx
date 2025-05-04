"use client";

import { useState } from "react";

import List from "./List";
import { Customer } from "@/backend/types/customer";
import { customers } from "@/backend/mocks/customers";
import { useSelection } from "@/backend/hooks/useSelection";
import Layout from "@/backend/components/Layout";
import Search from "@/backend/components/Search";
import Tabs from "@/backend/components/Tabs";
import Dropdown from "@/backend/components/Dropdown";
import Button from "@/backend/components/Button";
import DeleteItems from "@/backend/components/DeleteItems";
import NoFound from "@/backend/components/NoFound";


const views = [
    { id: 1, name: "Active" },
    { id: 2, name: "New" },
];

const CustomerListPage = () => {
    const [search, setSearch] = useState("");
    const [view, setView] = useState(views[0]);
    const {
        selectedRows,
        selectAll,
        handleRowSelect,
        handleSelectAll,
        handleDeselect,
    } = useSelection<Customer>(customers);

    return (
        <Layout title="Customer list">
            <div className="card">
                {selectedRows.length === 0 ? (
                    <div className="flex items-center min-h-12">
                        <div className="pl-5 text-h6 max-lg:pl-3 max-md:mr-auto">
                            Customers
                        </div>
                        <Search
                            className="w-70 ml-6 mr-auto max-md:hidden"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name of email"
                            isGray
                        />
                        {search === "" && (
                            <>
                                <Tabs
                                    className="max-md:hidden"
                                    items={views}
                                    value={view}
                                    setValue={setView}
                                />
                                <Dropdown
                                    className="hidden max-md:block"
                                    items={views}
                                    value={view}
                                    setValue={setView}
                                />
                            </>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center">
                        <div className="mr-6 pl-5 text-h6">
                            {selectedRows.length} customer
                            {selectedRows.length !== 1 ? "s" : ""} selected
                        </div>
                        <Button
                            className="mr-auto"
                            isStroke
                            onClick={handleDeselect}
                        >
                            Deselect
                        </Button>
                        <DeleteItems
                            counter={selectedRows.length}
                            onDelete={() => {}}
                            isLargeButton
                        />
                    </div>
                )}
                {search !== "" ? (
                    <NoFound title="No customers found" />
                ) : (
                    <div className="p-1 pt-3 max-lg:px-0">
                        <List
                            selectedRows={selectedRows}
                            onRowSelect={handleRowSelect}
                            items={customers}
                            selectAll={selectAll}
                            onSelectAll={handleSelectAll}
                        />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default CustomerListPage;
