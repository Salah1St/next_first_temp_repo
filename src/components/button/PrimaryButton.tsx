import React from "react";
interface props {
  title: string;
  className?: string;
}
function PrimaryButton(props: props) {
  const { title } = props;
  return <button className="w-full h-full border border-primary-brand-400 text-primary-brand-400 rounded-2xl flex justify-center items-center p-2 text-sm">{title}</button>;
}

export default PrimaryButton;
