import React from 'react';
import members from '@/assets/members.svg';
import payments from '@/assets/payments.svg';
import event_booking from '@/assets/event_booking.svg';
import clubs from '@/assets/clubs.svg';
import Image from 'next/image';

const Achievements = () => {
    const achievements = [
        {
            icon: members,
            label: "Members",
            figure: "2,245,341",
        },
        {
            icon: clubs,
            label: "Clubs",
            figure: "46,328",
        },
        {
            icon: event_booking,
            label: "Event Booking",
            figure: "828,867",
        },
        {
            icon: payments,
            label: "Payments",
            figure: "1,926,436",
        },
    ];

    return (
        <div className="bg-[#F5F7FA] flex justify-evenly items-center px-[10%] py-[64px]">
            <div>
                <h1 className='font-semibold text-[36px]'>Helping a local <br /><span className='text-green-500'>business reinvent itself</span></h1>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className='flex flex-wrap justify-between w-[40%] gap-5'>
                {achievements.map((achievement, index) => (
                    <div key={index} className='w-[45%] flex gap-2 '>
                        <Image src={achievement.icon} height={48} width={48} alt='Achievements' />
                        <div>
                            <span className='font-bold text-[28px]'>{achievement.figure}</span>
                            <p className='text-[16px]'>{achievement.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
