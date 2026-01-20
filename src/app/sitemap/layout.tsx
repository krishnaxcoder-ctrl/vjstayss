export default function SitemapLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <style>{`
                footer {
                    display: none !important;
                }
            `}</style>
            {children}
        </>
    );
}
