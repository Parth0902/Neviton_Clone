import { GetInTouch } from "@/components/getInTouch/getInTouch";
export default function AppLayout({
    children, // will be a page or nested layout
}) {
    return (
        <main>
            {children}
            <GetInTouch />
        </main>
    );
}
