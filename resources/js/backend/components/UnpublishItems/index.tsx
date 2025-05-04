import { useState } from "react";
import Button from "../Button";
import Icon from "../Icon";
import Modal from "../Modal";
import Image from "../Image";
import { releasedProducts } from "@/backend/mocks/products";

type UnpublishItemsProps = {
    items?: number[];
    image?: string;
    onClick: () => void;
    isLargeButton?: boolean;
};

const UnpublishItems = ({
    items = [],
    image,
    onClick,
    isLargeButton,
}: UnpublishItemsProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            {isLargeButton ? (
                <Button className="ml-3" isBlack onClick={() => setOpen(true)}>
                    Unpublish
                </Button>
            ) : (
                <button className="action" onClick={() => setOpen(true)}>
                    <Icon name="trash" />
                    Unpublish
                </button>
            )}
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="flex flex-wrap gap-5 mb-8 max-md:gap-3">
                    {image ? (
                        <div className="relative w-20 h-20 rounded-2xl overflow-hidden">
                            <Image
                                className="object-cover opacity-100"
                                src={image}
                               
                                alt=""
                            />
                        </div>
                    ) : (
                        releasedProducts
                            .filter((product) => items.includes(product.id))
                            .map((product) => (
                                <div
                                    className="relative w-20 h-20 rounded-2xl overflow-hidden"
                                    key={product.id}
                                >
                                    <Image
                                        className="object-cover"
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </div>
                            ))
                    )}
                </div>
                <div className="mb-4 text-h4 max-md:text-h5">
                    Unpublish{" "}
                    {items.length > 1 ? `${items.length} products` : "product"}!
                </div>
                <div className="mb-8 text-body-2 font-medium text-t-tertiary">
                    You’re unpublishing{" "}
                    {items.length > 1 ? `${items.length} products` : "product"}.
                    The selected product{items.length > 1 ? "s" : ""} will be
                    removed from your shop, and this action can be undone at any
                    time.
                </div>
                <div className="flex justify-end gap-3 mt-8">
                    <Button
                        className="flex-1"
                        isStroke
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button className="flex-1" isBlack onClick={onClick}>
                        Let’s do it
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default UnpublishItems;
