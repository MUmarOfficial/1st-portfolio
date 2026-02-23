import Beams from "@/components/Beams";
import Footer from "@/components/Footer";
import StaggeredMenu from "@/components/StaggeredMenu";
import { contactDetails } from "@/data/content";
import { Outlet } from "react-router";
import { motion } from "framer-motion";

const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about me', link: '/about' },
    { label: 'Projects', ariaLabel: 'View my projects', link: '/projects' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
    { label: 'LinkedIn', link: contactDetails.linkedin },
    { label: 'GitHub', link: contactDetails.github },
    { label: 'Whatsapp', link: contactDetails.whatsapp },
];

export default function RootLayout() {
    return (
        <div className="relative min-h-screen bg-transparent">
            {/* Navigation */}
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials
                displayItemNumbering={true}
                menuButtonColor="#ffffff"
                openMenuButtonColor="#ffffff"
                changeMenuColorOnOpen={false}
                colors={['rgba(82,39,255,0.15)', 'rgba(0,0,0,0.2)']}
                logoUrl="/logo.webp"
                accentColor="#5227FF"
                onMenuOpen={() => console.log('Menu opened')}
                onMenuClose={() => console.log('Menu closed')}
                isFixed={true}
            />

            {/* Background Beams with enhanced visibility */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="w-full h-full"
                >
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
                </motion.div>
            </div>

            {/* Subtle gradient overlays for depth */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-1/3 bg-linear-to-b from-[#5227FF]/5 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-linear-to-t from-black/20 to-transparent" />
                <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-linear-to-l from-[#5227FF]/3 to-transparent blur-3xl" />
            </div>

            {/* Main Content */}
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-0"
            >
                <Outlet />
            </motion.main>

            {/* Footer */}
            <Footer />
        </div>
    );
}