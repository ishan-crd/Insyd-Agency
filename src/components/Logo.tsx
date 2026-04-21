import Link from "next/link";

export default function Logo({ size = 26 }: { size?: number }) {
	return (
		<Link
			href="/"
			className="insyd-logo"
			data-cursor="link"
			style={{
				display: "inline-flex",
				alignItems: "center",
				gap: 10,
			}}
		>
			<svg
				width={size}
				height={size}
				viewBox="0 0 32 32"
				fill="none"
				aria-hidden="true"
				style={{ flexShrink: 0 }}
			>
				<circle
					cx="16"
					cy="16"
					r="14.5"
					stroke="currentColor"
					strokeWidth="1.5"
				/>
				<path
					d="M10.5 22V10M10.5 10L21.5 22M21.5 10V22"
					stroke="currentColor"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<span
				style={{
					fontFamily: "var(--font-display)",
					fontSize: 24,
					fontWeight: "var(--display-weight)" as unknown as number,
					letterSpacing: "-0.03em",
					lineHeight: 1,
				}}
			>
				Insyd
			</span>
		</Link>
	);
}
