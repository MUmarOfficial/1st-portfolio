import Beams from "@/components/Beams";
import Footer from "@/components/Footer";
import StaggeredMenu from "@/components/StaggeredMenu";
import { contactDetails } from "@/data/content";
import { Outlet } from "react-router";

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
    { label: 'LinkedIn', link: contactDetails.linkedin },
    { label: 'GitHub', link: contactDetails.github },
    { label: 'Whatsapp', link: contactDetails.whatsapp },
];

export default function RootLayout() {
    return (<>
        <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={true}
            menuButtonColor="#ffffff"
            openMenuButtonColor="#ffffff"
            changeMenuColorOnOpen={false}
            colors={['rgba(82,39,255,0.1)', 'rgba(0,0,0,0.1)']}
            logoUrl="/logo.webp"
            accentColor="#5227FF"
            onMenuOpen={() => console.log('Menu opened')}
            onMenuClose={() => console.log('Menu closed')}
            isFixed={true}
        />
        <div style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden' }}>
            <Beams
                beamWidth={1}
                beamHeight={30}
                beamNumber={30}
                lightColor="#9507f4"
                speed={2}
                noiseIntensity={1.75}
                scale={0.25}
                rotation={30}
            />
        </div>
        <main>
            <Outlet />
        </main>
        <Footer />
    </>);
}