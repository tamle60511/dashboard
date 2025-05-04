"use client";

import { useState } from "react";
import Layout from "@/backend/components/Layout";
import Search from "@/backend/components/Search";
import Select from "@/backend/components/Select";
import Button from "@/backend/components/Button";
import DeleteItems from "@/backend/components/DeleteItems";
import NoFound from "@/backend/components/NoFound";
import Dropdown from "@/backend/components/Dropdown";
import List from "./List";
import { ProductDraft } from "@/backend/types/product";
import { useSelection } from "@/backend/hooks/useSelection";

import { draftsProducts } from "@/backend/mocks/products";

const timeCreateOptions = [
    { id: 1, name: "Newest first" },
    { id: 2, name: "Oldest first" },
    { id: 3, name: "A-Z" },
    { id: 4, name: "Z-A" },
];

const ScheduledPage = () => {
    const [search, setSearch] = useState("");
    const [timeCreate, setTimeCreate] = useState(timeCreateOptions[0]);
    const {
        selectedRows,
        selectAll,
        handleRowSelect,
        handleSelectAll,
        handleDeselect,
    } = useSelection<ProductDraft>(draftsProducts);

    return (
        <Layout title="Scheduled">
            <div className="card">
                {selectedRows.length === 0 ? (
                    <div className="flex items-center max-md:h-12">
                        <div className="pl-5 text-h6 max-md:mr-auto max-lg:pl-3">
                            {draftsProducts.length} scheduled product
                            {draftsProducts.length !== 1 ? "s" : ""}
                        </div>
                        <Search
                            className="w-70 ml-6 mr-auto max-lg:w-60 max-lg:ml-3 max-md:hidden"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search products"
                            isGray
                        />
                        {search === "" && (
                            <>
                                <Select
                                    className="min-w-45 max-md:hidden"
                                    value={timeCreate}
                                    onChange={setTimeCreate}
                                    options={timeCreateOptions}
                                />
                                <Dropdown
                                    className="hidden max-md:block"
                                    items={timeCreateOptions}
                                    value={timeCreate}
                                    setValue={setTimeCreate}
                                />
                            </>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center">
                        <div className="mr-6 pl-5 text-h6">
                            {selectedRows.length} product
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
                        <Button className="ml-2" isBlack>
                            Reschedule
                        </Button>
                    </div>
                )}
                {search !== "" ? (
                    <NoFound title="No products found" />
                ) : (
                    <div className="p-1 pt-3 max-lg:px-0">
                        <List
                            selectedRows={selectedRows}
                            onRowSelect={handleRowSelect}
                            items={draftsProducts}
                            selectAll={selectAll}
                            onSelectAll={handleSelectAll}
                        />
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default ScheduledPage;
