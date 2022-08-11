import type React from "react";

const style: React.CSSProperties = {
	height: "40px",
	padding: "0 10px",
	cursor: "pointer",
	backgroundColor: "white",
	border: "none",
	borderRadius: "5px",
	color: "#025",
	fontWeight: "bold",
};

type layoutProps = {
	title: string;
};

export default function Button({ title }: layoutProps) {
	return <button style={style}>{title}</button>;
}
