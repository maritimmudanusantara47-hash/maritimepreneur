import React from 'react'
import LogoBlueEconomist from '../../assets/logo-blue-economist.jpg'
import LogoUNGC from '../../assets/UNGP.jpg'

const MemberOf = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-8"
            data-aos='fade-up'
            data-aos-duration='1000'
        >
            <h2 className="text-2xl font-bold text-primary-color mb-8">Member of</h2>
            <div className="flex flex-wrap items-center justify-center gap-20 px-8">
                <img
                    src={LogoBlueEconomist}
                    alt="The Blue Economist International Association"
                    className="h-40 lg:h-52 object-contain"
                />
                <img
                    src={LogoUNGC}
                    alt="UN Global Compact Network Indonesia"
                    className="h-40 lg:h-52 object-contain"
                />
            </div>
        </div>
    )
}

export default MemberOf
