import Card from '@/backend/components/Card';
import { timeSlots } from '@/backend/mocks/activeTimes';
import React from 'react';

const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const ActiveTimes = () => {
    const getEngagementClass = (level: number) => {
        switch (level) {
            case 0:
                return 'opacity-5 dark:opacity-20'; // least active
            case 1:
                return 'opacity-10 dark:opacity-35'; // medium active
            case 2:
                return 'opacity-15 dark:opacity-50'; // most active
            default:
                return 'opacity-5 dark:opacity-20';
        }
    };

    return (
        <Card title="Active times">
            <div className="p-5 max-lg:p-3">
                <div className="flex">
                    <div className="flex w-20 shrink-0 flex-col gap-0.5 max-md:w-16">
                        {timeSlots.map((slot) => (
                            <div className="text-caption text-t-tertiary/80 flex h-5 items-center" key={slot.id}>
                                {slot.time}
                            </div>
                        ))}
                    </div>
                    <div className="grid grow grid-cols-7 gap-0.5">
                        {timeSlots.map((slot) => (
                            <React.Fragment key={slot.id}>
                                {days.map((day) => (
                                    <div
                                        key={`${slot.id}-${day}`}
                                        className={`bg-shade-04 dark:bg-shade-05 h-5 rounded ${getEngagementClass(
                                            slot.days[day as keyof typeof slot.days],
                                        )}`}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                        {days.map((day) => (
                            <div key={day} className="text-caption text-t-tertiary/80 mt-2.5 text-center">
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-center gap-4">
                    <div className="text-caption text-t-primary/80">Least engaged</div>
                    <div className="flex gap-0.5">
                        <div className="bg-shade-04 dark:bg-shade-05 h-2 w-12 rounded-[2px] opacity-5 max-md:w-6 dark:opacity-20"></div>
                        <div className="bg-shade-04 dark:bg-shade-05 h-2 w-12 rounded-[2px] opacity-10 max-md:w-6 dark:opacity-35"></div>
                        <div className="bg-shade-04 dark:bg-shade-05 h-2 w-12 rounded-[2px] opacity-15 max-md:w-6 dark:opacity-50"></div>
                    </div>
                    <div className="text-caption text-t-primary/80">Most engaged</div>
                </div>
            </div>
        </Card>
    );
};

export default ActiveTimes;
