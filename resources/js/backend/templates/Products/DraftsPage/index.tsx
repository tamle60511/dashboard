"use client";

import { useState } from "react";
import Layout from "@/backend/components/Layout";
import Search from "@/backend/components/Search";
import Tabs from "@/backend/components/Tabs";
import Button from "@/backend/components/Button";
import DeleteItems from "@/backend/components/DeleteItems";
import NoFound from "@/backend/components/NoFound";
import List from "./List";
import Grid from "./Grid";
import { ProductDraft } from "@/backend/types/product";
import { useSelection } from "@/backend/hooks/useSelection";

import { draftsProducts } from "@/backend/mocks/products";

const views = [
    { id: 1, name: "grid" },
    { id: 2, name: "list" },
];

const DraftsPage = () => {
    const [search, setSearch] = useState("");
    const [view, setView] = useState(views[1]);
    const {
        selectedRows,
        selectAll,
        handleRowSelect,
        handleSelectAll,
        handleDeselect,
    } = useSelection<ProductDraft>(draftsProducts);

    return (
        <Layout title="Drafts">
            <div className="card">
                {selectedRows.length === 0 ? (
                    <div className="flex items-center">
                        <div className="pl-5 text-h6 max-lg:pl-3 max-md:mr-auto">
                            Products
                        </div>
                        <Search
                            className="w-70 ml-6 mr-auto max-md:hidden"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search products"
                            isGray
                        />
                        {search === "" && (
                            <Tabs
                                items={views}
                                value={view}
                                setValue={setView}
                                isOnlyIcon
                            />
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
                            Publish
                        </Button>
                    </div>
                )}
                {search !== "" ? (
                    <NoFound title="No products found" />
                ) : (
                    <div className="p-1 pt-3 max-lg:px-0">
                        {view.id === 1 ? (
                            <Grid
                                selectedRows={selectedRows}
                                onRowSelect={handleRowSelect}
                                items={draftsProducts}
                            />
                        ) : (
                            <List
                                selectedRows={selectedRows}
                                onRowSelect={handleRowSelect}
                                items={draftsProducts}
                                selectAll={selectAll}
                                onSelectAll={handleSelectAll}
                            />
                        )}
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default DraftsPage;
