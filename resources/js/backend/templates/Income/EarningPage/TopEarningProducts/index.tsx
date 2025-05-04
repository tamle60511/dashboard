import Card from "@/backend/components/Card";
import Product from "@/backend/components/Product";
import Button from "@/backend/components/Button";

import { popularProducts } from "@/backend/mocks/products";

const TopEarningProducts = () => {
    return (
        <Card classHead="!pl-3" title="Top-earning products">
            <div className="flex flex-col gap-1">
                {popularProducts.map((product) => (
                    <Product value={product} key={product.id} />
                ))}
            </div>
            <div className="pt-6 px-3 pb-3">
                <Button className="w-full" href="/products" as="link" isStroke>
                    All products
                </Button>
            </div>
        </Card>
    );
};

export default TopEarningProducts;
