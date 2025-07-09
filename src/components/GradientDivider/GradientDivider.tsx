export default function GradientDivider({ from, to }: { from: string; to: string }) {
    return (
        <div
            className="w-full h-[25vh]"
            style={{background: `linear-gradient(to bottom, ${from}, ${to})`,
        }}
        />
    )
}