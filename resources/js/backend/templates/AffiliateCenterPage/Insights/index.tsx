import { useState } from 'react';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

import Card from '@/backend/components/Card';
import Icon from '@/backend/components/Icon';
import Percentage from '@/backend/components/Percentage';
import Tooltip from '@/backend/components/Tooltip';
import { insights } from '@/backend/mocks/affiliate-center';

const durations = [
    { id: 1, name: 'Last 7 days' },
    { id: 2, name: 'Last 14 days' },
    { id: 3, name: 'Last 28 days' },
];

const Insights = () => {
    const [duration, setDuration] = useState(durations[0]);

    return (
        <Card className="overflow-hidden" title="Insights" selectValue={duration} selectOnChange={setDuration} selectOptions={durations}>
            <div className="before:from-b-surface2 after:from-b-surface2 relative before:pointer-events-none before:absolute before:top-0 before:bottom-0 before:-left-3 before:z-3 before:hidden before:w-8 before:bg-linear-to-r before:to-transparent after:pointer-events-none after:absolute after:top-0 after:-right-3 after:bottom-0 after:z-3 after:hidden after:w-8 after:bg-linear-to-l after:to-transparent max-2xl:before:block max-2xl:after:block">
                <div className="max-4xl:gap-8 max-3xl:gap-6 max-2xl:scrollbar-none flex gap-12 p-5 pt-4 max-2xl:-mx-3 max-2xl:gap-8 max-2xl:overflow-auto max-2xl:px-8 max-lg:px-6 max-lg:py-3 max-md:gap-5">
                    {insights.map((item) => (
                        <div className="flex flex-1 gap-5 max-2xl:w-86 max-2xl:flex-auto max-2xl:shrink-0 max-md:w-54" key={item.id}>
                            <div className="bg-b-surface1 dark:bg-b-highlight flex shrink-0 flex-col items-center justify-between rounded-full p-3 max-md:hidden">
                                <Icon className="fill-t-primary" name={item.icon} />
                                <Tooltip content={item.tooltip} large />
                            </div>
                            <div className="flex grow items-end">
                                <div className="mr-4 shrink-0">
                                    <div className="text-sub-title-1">{item.title}</div>
                                    <div className="text-h2 mb-3">{item.value}</div>
                                    <div className="flex items-center gap-2">
                                        <Percentage value={item.percentage} />
                                        <div className="text-body-2 text-t-tertiary">vs last year</div>
                                    </div>
                                </div>
                                <div className="max-3xl:h-18 ml-auto h-24 w-full max-w-46 max-md:hidden">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            width={150}
                                            height={40}
                                            data={item.dataChart}
                                            barCategoryGap={2}
                                            margin={{
                                                top: 0,
                                                right: 0,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <Bar dataKey="amt" fill="var(--shade-07)" fillOpacity={0.4} radius={2} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};

export default Insights;
