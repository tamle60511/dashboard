import Card from "@/backend/components/Card";
import Icon from "@/backend/components/Icon";
import Image from "@/backend/components/Image";
import Table from "@/backend/components/Table";
import Row from "@/backend/components/TableRow";
import { campaignEarningItems } from "@/backend/mocks/affiliate-center";
import { useState } from "react";
import { NumericFormat } from "react-number-format";



const durations = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last 14 days" },
    { id: 3, name: "Last 28 days" },
];

const tableHead = ["Product", "Views", "Orders", "Total earning"];

type IndicatorProps = {
    value: number;
    percentage: number;
};

const Indicator = ({ value, percentage }: IndicatorProps) => {
    return (
        <div className="inline-flex items-center gap-2">
            <div className="min-w-8">{value}</div>
            <div className="relative w-8 h-1.5 rounded-[2px] bg-shade-07/40">
                <div
                    className="absolute top-0 left-0 bottom-0 rounded-[2px] bg-chart-green"
                    style={{
                        width: `${percentage}%`,
                    }}
                />
            </div>
        </div>
    );
};

const CampaignEarning = () => {
    const [duration, setDuration] = useState(durations[0]);

    return (
        <Card
            title="Campaign earning"
            selectValue={duration}
            selectOnChange={setDuration}
            selectOptions={durations}
        >
            <div className="px-1 max-lg:px-0">
                <Table
                    cellsThead={tableHead.map((head) => (
                        <th
                            className="last:text-right last:text-nowrap max-md:first:!pr-0 max-md:nth-2:hidden max-md:nth-3:hidden"
                            key={head}
                        >
                            {head}
                        </th>
                    ))}
                    isMobileVisibleTHead
                >
                    {campaignEarningItems.map((item) => (
                        <Row className="[&_td]:!py-5" key={item.id}>
                            <td className="max-md:first:!pr-0">
                                <div className="inline-flex items-center">
                                    <div className="shrink-0">
                                        <Image
                                            className="size-16 rounded-xl opacity-100 object-cover"
                                            src={item.image}
                                            width={64}
                                            height={64}
                                            alt=""
                                        />
                                    </div>
                                    <div className="pl-5 max-md:pl-3">
                                        <div className="line-clamp-1 text-sub-title-1 max-3xl:max-w-66">
                                            {item.title}
                                        </div>
                                        <div className="flex items-center gap-4 mt-2">
                                            {item.socials.map((social) => (
                                                <a
                                                    className="group/social"
                                                    href={social.href}
                                                    key={social.icon}
                                                >
                                                    <Icon
                                                        className="!size-5 fill-t-secondary transition-colors group-hover/social:fill-t-primary"
                                                        name={social.icon}
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="max-md:hidden">
                                <Indicator
                                    value={item.views.counter}
                                    percentage={item.views.percentage}
                                />
                            </td>
                            <td className="max-md:hidden">
                                <Indicator
                                    value={item.orders.counter}
                                    percentage={item.orders.percentage}
                                />
                            </td>
                            <td className="text-right text-button max-md:align-top">
                                <NumericFormat
                                    className="max-md:block max-md:pt-2.5"
                                    value={item.totalEarning}
                                    decimalScale={2}
                                    fixedDecimalScale
                                    displayType="text"
                                    prefix="$"
                                />
                            </td>
                        </Row>
                    ))}
                </Table>
            </div>
        </Card>
    );
};

export default CampaignEarning;
