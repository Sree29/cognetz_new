"use client";
import { useState } from 'react';
import HeaderSidebar from './HeaderSidebar';
import HeaderMenu from './HeaderMenu';

const HeaderV1 = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    return (
        <>
            <HeaderSidebar isSidebarActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive} />
            <HeaderMenu onMenuClick={() => setIsSidebarActive(true)} />
        </>
    );
};

export default HeaderV1;