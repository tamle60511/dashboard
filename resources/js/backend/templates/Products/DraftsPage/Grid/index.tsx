import GridProduct from "@/backend/components/GridProduct";
import Icon from "@/backend/components/Icon";
import DeleteItems from "@/backend/components/DeleteItems";
import ScheduleProduct from "@/backend/components/ScheduleProduct";
import { ProductDraft } from "@/backend/types/product";

type GridProps = {
    items: ProductDraft[];
    selectedRows: number[];
    onRowSelect: (id: number) => void;
};

const Grid = ({ selectedRows, onRowSelect, items }: GridProps) => {
    return (
        <div className="flex flex-wrap max-md:-mt-3">
            {items.map((item) => (
                <GridProduct
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    selectedRows={selectedRows.includes(item.id)}
                    onRowSelect={() => onRowSelect(item.id)}
                    key={item.id}
                    actions={
                        <>
                            <button className="action">
                                <Icon name="edit" />
                                Edit
                            </button>
                            <DeleteItems onDelete={() => {}} />
                            <ScheduleProduct
                                title={item.title}
                                details={item.category}
                                image={item.image}
                                price={item.price}
                            />
                        </>
                    }
                >
                    <div className="flex items-center gap-2 text-caption text-t-secondary/80">
                        <Icon className="fill-t-secondary" name="clock" />
                        {item.date}
                    </div>
                </GridProduct>
            ))}
        </div>
    );
};

export default Grid;
